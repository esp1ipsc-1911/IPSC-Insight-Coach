// ════════════════════════════════════════════════════════════════════════════
// FIRESTORE DATA LAYER - Cloud sync for matches and user data
// ════════════════════════════════════════════════════════════════════════════

import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { db } from './firebase.js';
import { getCurrentUser } from './auth.js';

// ════════════════════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════════════════════

function normalizeMatch(match) {
  if (!match) return match;

  const ownerId = match.ownerId || null;
  const rawParticipants = Array.isArray(match.participants) ? match.participants : [];
  const uniqueParticipants = [...new Set(rawParticipants.filter(Boolean))];

  if (ownerId && !uniqueParticipants.includes(ownerId)) {
    uniqueParticipants.unshift(ownerId);
  }

  return {
    ...match,
    ownerId,
    participants: uniqueParticipants,
    stages: Array.isArray(match.stages) ? match.stages : [],
    shooters: Array.isArray(match.shooters) ? match.shooters : []
  };
}

function sortMatchesByNewest(matches) {
  matches.sort((a, b) => {
    const dateA = a.date || a.createdAt?.toDate?.() || new Date(0);
    const dateB = b.date || b.createdAt?.toDate?.() || new Date(0);
    return dateB - dateA;
  });
  return matches;
}

function mergeMatchArrays(...arrays) {
  const map = new Map();

  arrays.flat().forEach((match) => {
    if (!match?.id) return;
    map.set(match.id, normalizeMatch(match));
  });

  return sortMatchesByNewest([...map.values()]);
}

// ════════════════════════════════════════════════════════════════════════════
// USER PROFILE
// ════════════════════════════════════════════════════════════════════════════

export async function saveUserProfile(profile) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    // FIX: Fjernet ugyldige matchData.stages/shooters — profil har ikke disse feltene
    await updateDoc(doc(db, 'users', user.uid), {
      ...profile,
      updatedAt: serverTimestamp()
    });
    return { success: true };
  } catch (error) {
    console.error('Save profile error:', error);
    return { success: false, error: error.message };
  }
}

export async function getUserProfile(userId) {
  try {
    const effectiveUserId = userId || getCurrentUser()?.uid;
    if (!effectiveUserId) return null;
    const userDoc = await getDoc(doc(db, 'users', effectiveUserId));
    if (userDoc.exists()) {
      return { uid: effectiveUserId, ...userDoc.data() };
    }
    return null;
  } catch (error) {
    console.error('Get user profile error:', error);
    return null;
  }
}

// ════════════════════════════════════════════════════════════════════════════
// MATCH CRUD
// ════════════════════════════════════════════════════════════════════════════

export async function createMatch(matchData) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const matchDoc = normalizeMatch({
      ...matchData,
      ownerId: user.uid,
      participants: [user.uid],
      createdAt: serverTimestamp(),
      stages: Array.isArray(matchData.stages) ? matchData.stages : [],
      shooters: Array.isArray(matchData.shooters) ? matchData.shooters : [],
      updatedAt: serverTimestamp()
    });

    const docRef = await addDoc(collection(db, 'matches'), matchDoc);
    return { success: true, matchId: docRef.id };
  } catch (error) {
    console.error('Create match error:', error);
    return { success: false, error: error.message };
  }
}

export async function updateMatch(matchId, matchData) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const existing = await getDoc(doc(db, 'matches', matchId));
    if (!existing.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const existingData = normalizeMatch(existing.data());
    const payload = {
      ...matchData,
      ownerId: existingData.ownerId,
      participants: Array.isArray(matchData.participants)
        ? normalizeMatch({
            ownerId: existingData.ownerId,
            participants: matchData.participants
          }).participants
        : existingData.participants,
      updatedAt: serverTimestamp()
    };

    await updateDoc(doc(db, 'matches', matchId), payload);
    return { success: true };
  } catch (error) {
    console.error('Update match error:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteMatch(matchId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    await deleteDoc(doc(db, 'matches', matchId));
    return { success: true };
  } catch (error) {
    console.error('Delete match error:', error);
    return { success: false, error: error.message };
  }
}

export async function getMatch(matchId) {
  try {
    const docSnap = await getDoc(doc(db, 'matches', matchId));
    if (docSnap.exists()) {
      return normalizeMatch({ id: docSnap.id, ...docSnap.data() });
    }
    return null;
  } catch (error) {
    console.error('Get match error:', error);
    return null;
  }
}

export async function getUserMatches() {
  const user = getCurrentUser();
  if (!user) return [];

  try {
    const participantQuery = query(
      collection(db, 'matches'),
      where('participants', 'array-contains', user.uid)
    );

    const ownerQuery = query(
      collection(db, 'matches'),
      where('ownerId', '==', user.uid)
    );

    const [participantSnapshot, ownerSnapshot] = await Promise.all([
      getDocs(participantQuery),
      getDocs(ownerQuery)
    ]);

    const participantMatches = [];
    participantSnapshot.forEach((docSnap) => {
      participantMatches.push({ id: docSnap.id, ...docSnap.data() });
    });

    const ownerMatches = [];
    ownerSnapshot.forEach((docSnap) => {
      ownerMatches.push({ id: docSnap.id, ...docSnap.data() });
    });

    return mergeMatchArrays(participantMatches, ownerMatches);
  } catch (error) {
    console.error('Get user matches error:', error);
    return [];
  }
}

// ════════════════════════════════════════════════════════════════════════════
// REAL-TIME LISTENERS
// ════════════════════════════════════════════════════════════════════════════

export function listenToUserMatches(callback) {
  const user = getCurrentUser();
  if (!user) return () => {};

  const participantQuery = query(
    collection(db, 'matches'),
    where('participants', 'array-contains', user.uid)
  );

  const ownerQuery = query(
    collection(db, 'matches'),
    where('ownerId', '==', user.uid)
  );

  let participantMatches = [];
  let ownerMatches = [];

  const emit = () => {
    callback(mergeMatchArrays(participantMatches, ownerMatches));
  };

  const unsubscribeParticipants = onSnapshot(
    participantQuery,
    (snapshot) => {
      participantMatches = [];
      snapshot.forEach((docSnap) => {
        participantMatches.push({ id: docSnap.id, ...docSnap.data() });
      });
      emit();
    },
    (error) => {
      console.error('Participant listener error:', error);
    }
  );

  const unsubscribeOwners = onSnapshot(
    ownerQuery,
    (snapshot) => {
      ownerMatches = [];
      snapshot.forEach((docSnap) => {
        ownerMatches.push({ id: docSnap.id, ...docSnap.data() });
      });
      emit();
    },
    (error) => {
      console.error('Owner listener error:', error);
    }
  );

  return () => {
    unsubscribeParticipants();
    unsubscribeOwners();
  };
}

export function listenToMatch(matchId, callback) {
  const unsubscribe = onSnapshot(
    doc(db, 'matches', matchId),
    (docSnap) => {
      if (docSnap.exists()) {
        callback(normalizeMatch({ id: docSnap.id, ...docSnap.data() }));
      } else {
        callback(null);
      }
    },
    (error) => {
      console.error('Listen to match error:', error);
    }
  );

  return unsubscribe;
}

// ════════════════════════════════════════════════════════════════════════════
// MATCH SHARING
// ════════════════════════════════════════════════════════════════════════════

export async function inviteUserToMatch(matchId, email) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = matchDoc.data();
    if (matchData.ownerId !== user.uid) {
      return { success: false, error: 'Kun matchens eier kan invitere' };
    }

    const usersSnapshot = await getDocs(
      query(collection(db, 'users'), where('email', '==', email))
    );

    if (usersSnapshot.empty) {
      return { success: false, error: 'Bruker ikke funnet' };
    }

    const invitedUser = usersSnapshot.docs[0];
    const invitedUserId = invitedUser.id;

    if (matchData.participants?.includes(invitedUserId)) {
      return { success: false, error: 'Bruker er allerede deltaker' };
    }

    // FIX: Kun oppdater participants — ikke skriv stages/shooters unødvendig
    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayUnion(invitedUserId),
      updatedAt: serverTimestamp()
    });

    return { success: true, message: 'Bruker lagt til!' };
  } catch (error) {
    console.error('Invite user error:', error);
    return { success: false, error: error.message };
  }
}

export async function removeUserFromMatch(matchId, userId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = matchDoc.data();
    if (matchData.ownerId !== user.uid) {
      return { success: false, error: 'Kun matchens eier kan fjerne deltakere' };
    }

    if (userId === matchData.ownerId) {
      return { success: false, error: 'Kan ikke fjerne matchens eier' };
    }

    // FIX: Kun oppdater participants — ikke skriv stages/shooters unødvendig
    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayRemove(userId),
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Remove user error:', error);
    return { success: false, error: error.message };
  }
}

export async function leaveMatch(matchId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = matchDoc.data();
    if (matchData.ownerId === user.uid) {
      return { success: false, error: 'Eieren kan ikke forlate matchen' };
    }

    // FIX: Kun oppdater participants — ikke skriv stages/shooters unødvendig
    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayRemove(user.uid),
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Leave match error:', error);
    return { success: false, error: error.message };
  }
}

export async function getMatchParticipants(matchId) {
  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) return [];

    const matchData = matchDoc.data();
    const participantIds = matchData.participants || [];

    const participants = await Promise.all(
      participantIds.map(async (uid) => {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          return {
            uid,
            name: userData.firstName && userData.lastName
              ? `${userData.firstName} ${userData.lastName}`
              : userData.email,
            email: userData.email,
            isOwner: uid === matchData.ownerId
          };
        }
        return null;
      })
    );

    return participants.filter(Boolean);
  } catch (error) {
    console.error('Get match participants error:', error);
    return [];
  }
}
