// ════════════════════════════════════════════════════════════════════════════
// FIRESTORE DATA LAYER - Cloud sync for matches and user data
// ════════════════════════════════════════════════════════════════════════════

import { 
  collection, 
  doc, 
  setDoc, 
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
    const matchDoc = {
      ...matchData,
      ownerId: user.uid,
      participants: [user.uid],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
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
    await updateDoc(doc(db, 'matches', matchId), {
      ...matchData,
      updatedAt: serverTimestamp()
    });
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
      return { id: docSnap.id, ...docSnap.data() };
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
    const q = query(
      collection(db, 'matches'),
      where('participants', 'array-contains', user.uid)
    );
    
    const querySnapshot = await getDocs(q);
    const matches = [];
    querySnapshot.forEach((doc) => {
      matches.push({ id: doc.id, ...doc.data() });
    });
    
    // Sort by date (newest first)
    matches.sort((a, b) => {
      const dateA = a.date || a.createdAt?.toDate() || new Date(0);
      const dateB = b.date || b.createdAt?.toDate() || new Date(0);
      return dateB - dateA;
    });
    
    return matches;
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
  
  const q = query(
    collection(db, 'matches'),
    where('participants', 'array-contains', user.uid)
  );
  
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const matches = [];
    snapshot.forEach((doc) => {
      matches.push({ id: doc.id, ...doc.data() });
    });
    
    // Sort by date
    matches.sort((a, b) => {
      const dateA = a.date || a.createdAt?.toDate() || new Date(0);
      const dateB = b.date || b.createdAt?.toDate() || new Date(0);
      return dateB - dateA;
    });
    
    callback(matches);
  }, (error) => {
    console.error('Listen to matches error:', error);
  });
  
  return unsubscribe;
}

export function listenToMatch(matchId, callback) {
  const unsubscribe = onSnapshot(doc(db, 'matches', matchId), (doc) => {
    if (doc.exists()) {
      callback({ id: doc.id, ...doc.data() });
    } else {
      callback(null);
    }
  }, (error) => {
    console.error('Listen to match error:', error);
  });
  
  return unsubscribe;
}

// ════════════════════════════════════════════════════════════════════════════
// MATCH SHARING - Invite others to collaborate
// ════════════════════════════════════════════════════════════════════════════

export async function inviteUserToMatch(matchId, inviteeEmail) {
  const user = getCurrentUser();
  if (!user) return { success: false, error: 'Not authenticated' };
  
  try {
    // Find user by email
    const q = query(collection(db, 'users'), where('email', '==', inviteeEmail));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return { success: false, error: 'Bruker ikke funnet' };
    }
    
    const inviteeDoc = querySnapshot.docs[0];
    const inviteeId = inviteeDoc.id;
    
    // Check if match exists and user has access
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }
    
    const matchData = matchDoc.data();
    if (!matchData.participants.includes(user.uid)) {
      return { success: false, error: 'Ingen tilgang til denne matchen' };
    }
    
    // Check if user is already a participant
    if (matchData.participants.includes(inviteeId)) {
      return { success: false, error: 'Bruker er allerede deltaker' };
    }
    
    // Add user to participants
    await updateDoc(doc(db, 'matches', matchId), {
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
    // Check if current user is owner
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return { success: false, error: 'Match ikke funnet' };
    }
    
    const matchData = matchDoc.data();
    if (matchData.ownerId !== user.uid) {
      return { success: false, error: 'Kun eier kan fjerne deltakere' };
    }
    
    // Can't remove owner
    if (userId === matchData.ownerId) {
      return { success: false, error: 'Kan ikke fjerne eier' };
    }
    
    // Remove user from participants
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
    
    // Owner can't leave
    if (matchData.ownerId === user.uid) {
      return { success: false, error: 'Eier kan ikke forlate match. Slett matchen i stedet.' };
    }
    
    // Remove self from participants
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

// ════════════════════════════════════════════════════════════════════════════
// GET MATCH PARTICIPANTS
// ════════════════════════════════════════════════════════════════════════════

export async function getMatchParticipants(matchId) {
  try {
    const matchDoc = await getDoc(doc(db, 'matches', matchId));
    if (!matchDoc.exists()) {
      return [];
    }
    
    const matchData = matchDoc.data();
    const participantIds = matchData.participants || [];
    
    // Fetch user profiles for all participants
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
