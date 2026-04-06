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
    participants: uniqueParticipants
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

export async function getUserProfile() {
  const user = getCurrentUser();
  if (!user) return null;

  try {
    const docSnap = await getDoc(doc(db, 'users', user.uid));
    if (docSnap.exists()) {
      return { uid: user.uid, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Get profile error:', error);
    return null;
  }
}

// ════════════════════════════════════════════════════════════════════════════
// MATCHES - CRUD Operations
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
      console.error('Listen to participant matches error:', error);
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
      console.error('Listen to owner matches error:', error);
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
// MATCH SHARING - Invite others to collaborate
// ════════════════════════════════════════════════════════════════════════════

export async function inviteUserToMatch(matchId, inviteeEmail) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const normalizedEmail = (inviteeEmail || '').trim().toLowerCase();
    if (!normalizedEmail) {
      return { success: false, error: 'Du må skrive inn en e-postadresse' };
    }

    const matchRef = doc(db, 'matches', matchId);
    const matchDoc = await getDoc(matchRef);

    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = normalizeMatch(matchDoc.data());

    if (!matchData.ownerId) {
      return { success: false, error: 'Matchen mangler eierinformasjon' };
    }

    if (matchData.ownerId !== user.uid) {
      return { success: false, error: 'Kun den som opprettet matchen kan invitere deltakere' };
    }

    const q = query(collection(db, 'users'), where('email', '==', normalizedEmail));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: 'Bruker ikke funnet' };
    }

    const inviteeDoc = querySnapshot.docs[0];
    const inviteeId = inviteeDoc.id;

    if (inviteeId === user.uid) {
      return { success: false, error: 'Du er allerede eier av matchen' };
    }

    if (matchData.participants.includes(inviteeId)) {
      return { success: false, error: 'Bruker er allerede deltaker' };
    }

    await updateDoc(matchRef, {
      participants: arrayUnion(inviteeId),
      updatedAt: serverTimestamp()
    });

    return { success: true, message: 'Bruker lagt til' };
  } catch (error) {
    console.error('Invite user error:', error);
    return { success: false, error: error.message };
  }
}

export async function removeUserFromMatch(matchId, userId) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };

  try {
    const matchRef = doc(db, 'matches', matchId);
    const matchDoc = await getDoc(matchRef);

    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = normalizeMatch(matchDoc.data());

    if (!matchData.ownerId) {
      return { success: false, error: 'Matchen mangler eierinformasjon' };
    }

    if (matchData.ownerId !== user.uid) {
      return { success: false, error: 'Kun eier kan fjerne deltakere' };
    }

    if (userId === matchData.ownerId) {
      return { success: false, error: 'Kan ikke fjerne eier' };
    }

    if (!matchData.participants.includes(userId)) {
      return { success: false, error: 'Bruker er ikke deltaker i matchen' };
    }

    await updateDoc(matchRef, {
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
    const matchRef = doc(db, 'matches', matchId);
    const matchDoc = await getDoc(matchRef);

    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }

    const matchData = normalizeMatch(matchDoc.data());

    if (!matchData.ownerId) {
      return { success: false, error: 'Matchen mangler eierinformasjon' };
    }

    if (matchData.ownerId === user.uid) {
      return { success: false, error: 'Eier kan ikke forlate match. Slett matchen i stedet.' };
    }

    if (!matchData.participants.includes(user.uid)) {
      return { success: false, error: 'Du er ikke deltaker i denne matchen' };
    }

    await updateDoc(matchRef, {
      participants: arrayRemove(user.uid),
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error('Leave match error:', error);
    return { success: false, error: error.message };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// GET MATCH PARTICIPANTS
// ════════════════════════════════════════════════════════════════════════════

export async function getMatchParticipants(matchId) {
  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return [];
    }

    const matchData = normalizeMatch(matchDoc.data());
    const participantIds = matchData.participants || [];

    const participants = [];
    for (const userId of participantIds) {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        participants.push({
          uid: userId,
          ...userDoc.data(),
          isOwner: userId === matchData.ownerId
        });
      }
    }

    return participants;
  } catch (error) {
    console.error('Get participants error:', error);
    return [];
  }
}
