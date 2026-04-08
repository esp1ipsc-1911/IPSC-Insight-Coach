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
    await updateDoc(doc(db, 'users', user.uid), {
      ...profile,
      stages: Array.isArray(matchData.stages) ? matchData.stages : [],
      shooters: Array.isArray(matchData.shooters) ? matchData.shooters : [],
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
  console.log('🔍 [CREATE MATCH] User:', user?.uid);
  
  if (!user) {
    console.error('❌ [CREATE MATCH] Not authenticated');
    return { success: false, error: 'Not authenticated' };
  }

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

    console.log('📝 [CREATE MATCH] Match document to save:', {
      name: matchDoc.name,
      ownerId: matchDoc.ownerId,
      participants: matchDoc.participants,
      date: matchDoc.date,
      type: matchDoc.type
    });

    const docRef = await addDoc(collection(db, 'matches'), matchDoc);
    
    console.log('✅ [CREATE MATCH] Success! Match ID:', docRef.id);
    
    return { success: true, matchId: docRef.id };
  } catch (error) {
    console.error('❌ [CREATE MATCH] Error:', error);
    console.error('   Error code:', error.code);
    console.error('   Error message:', error.message);
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
  console.log('📊 [GET USER MATCHES] User:', user?.uid);
  
  if (!user) {
    console.warn('⚠️ [GET USER MATCHES] Not authenticated');
    return [];
  }

  try {
    const participantQuery = query(
      collection(db, 'matches'),
      where('participants', 'array-contains', user.uid)
    );

    const ownerQuery = query(
      collection(db, 'matches'),
      where('ownerId', '==', user.uid)
    );

    console.log('🔍 [GET USER MATCHES] Running queries...');

    const [participantSnapshot, ownerSnapshot] = await Promise.all([
      getDocs(participantQuery),
      getDocs(ownerQuery)
    ]);

    const participantMatches = [];
    participantSnapshot.forEach((docSnap) => {
      const match = { id: docSnap.id, ...docSnap.data() };
      console.log('  📌 Participant match:', docSnap.id, '-', match.name);
      participantMatches.push(match);
    });

    const ownerMatches = [];
    ownerSnapshot.forEach((docSnap) => {
      const match = { id: docSnap.id, ...docSnap.data() };
      console.log('  👑 Owner match:', docSnap.id, '-', match.name);
      ownerMatches.push(match);
    });

    const merged = mergeMatchArrays(participantMatches, ownerMatches);
    console.log('✅ [GET USER MATCHES] Total matches:', merged.length);

    return merged;
  } catch (error) {
    console.error('❌ [GET USER MATCHES] Error:', error);
    console.error('   Error code:', error.code);
    console.error('   Error message:', error.message);
    return [];
  }
}

// ════════════════════════════════════════════════════════════════════════════
// REAL-TIME LISTENERS
// ════════════════════════════════════════════════════════════════════════════

export function listenToUserMatches(callback) {
  const user = getCurrentUser();
  console.log('👂 [LISTEN USER MATCHES] Setting up listeners for user:', user?.uid);
  
  if (!user) {
    console.warn('⚠️ [LISTEN USER MATCHES] No user, skipping listeners');
    return () => {};
  }

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
    const merged = mergeMatchArrays(participantMatches, ownerMatches);
    console.log('🔄 [LISTEN USER MATCHES] Emitting', merged.length, 'matches');
    callback(merged);
  };

  const unsubscribeParticipants = onSnapshot(
    participantQuery,
    (snapshot) => {
      console.log('📊 [LISTEN USER MATCHES] Participant snapshot:', snapshot.size, 'docs');
      participantMatches = [];
      snapshot.forEach((docSnap) => {
        const match = { id: docSnap.id, ...docSnap.data() };
        console.log('  📌 Participant match:', docSnap.id, '-', match.name);
        participantMatches.push(match);
      });
      emit();
    },
    (error) => {
      console.error('❌ [LISTEN USER MATCHES] Participant query error:', error);
      console.error('   Error code:', error.code);
      console.error('   Error message:', error.message);
    }
  );

  const unsubscribeOwners = onSnapshot(
    ownerQuery,
    (snapshot) => {
      console.log('👑 [LISTEN USER MATCHES] Owner snapshot:', snapshot.size, 'docs');
      ownerMatches = [];
      snapshot.forEach((docSnap) => {
        const match = { id: docSnap.id, ...docSnap.data() };
        console.log('  👑 Owner match:', docSnap.id, '-', match.name);
        ownerMatches.push(match);
      });
      emit();
    },
    (error) => {
      console.error('❌ [LISTEN USER MATCHES] Owner query error:', error);
      console.error('   Error code:', error.code);
      console.error('   Error message:', error.message);
    }
  );

  return () => {
    console.log('🔌 [LISTEN USER MATCHES] Unsubscribing from listeners');
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

    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayUnion(invitedUserId),
      stages: Array.isArray(matchData.stages) ? matchData.stages : [],
      shooters: Array.isArray(matchData.shooters) ? matchData.shooters : [],
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

    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayRemove(userId),
      stages: Array.isArray(matchData.stages) ? matchData.stages : [],
      shooters: Array.isArray(matchData.shooters) ? matchData.shooters : [],
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

    await updateDoc(doc(db, 'matches', matchId), {
      participants: arrayRemove(user.uid),
      stages: Array.isArray(matchData.stages) ? matchData.stages : [],
      shooters: Array.isArray(matchData.shooters) ? matchData.shooters : [],
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
    if (!matchDoc.exists()) {
      return [];
    }

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
