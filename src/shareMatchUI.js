// ════════════════════════════════════════════════════════════════════════════
// MATCH SHARING UI
// ════════════════════════════════════════════════════════════════════════════

import { 
  inviteUserToMatch, 
  getMatchParticipants, 
  removeUserFromMatch, 
  leaveMatch 
} from './dataLayer.js';
import { getCurrentUser } from './auth.js';

export async function showMatchSharingModal(matchId, matchName) {
  const modal = document.createElement('div');
  modal.id = 'share-match-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;
  
  const content = document.createElement('div');
  content.style.cssText = `
    background: #1a1d25;
    border-radius: 16px;
    padding: 24px;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
  `;
  
  content.innerHTML = `
    <h2 style="color: #e8b84b; margin: 0 0 8px 0;">Del match</h2>
    <p style="color: #8b92a7; margin: 0 0 24px 0; font-size: 14px;">${matchName}</p>
    
    <div style="margin-bottom: 24px;">
      <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
        Inviter bruker (e-post)
      </label>
      <div style="display: flex; gap: 8px;">
        <input 
          type="email" 
          id="invite-email-input"
          placeholder="henrik@example.com"
          style="
            flex: 1;
            padding: 12px;
            background: #2a2f3a;
            border: 1px solid #3a3f4a;
            border-radius: 8px;
            color: #fff;
            font-size: 14px;
          "
        />
        <button 
          id="invite-btn"
          style="
            padding: 12px 20px;
            background: #e8b84b;
            border: none;
            border-radius: 8px;
            color: #0a0c10;
            font-weight: 600;
            cursor: pointer;
          "
        >Inviter</button>
      </div>
      <div id="invite-message" style="
        margin-top: 8px;
        padding: 8px;
        border-radius: 4px;
        font-size: 13px;
        display: none;
      "></div>
    </div>
    
    <div>
      <h3 style="color: #fff; font-size: 16px; margin: 0 0 12px 0;">Deltakere</h3>
      <div id="participants-list" style="
        display: flex;
        flex-direction: column;
        gap: 8px;
      ">
        <div style="text-align: center; color: #8b92a7; padding: 20px;">
          Laster...
        </div>
      </div>
    </div>
    
    <div style="display: flex; gap: 8px; margin-top: 24px;">
      <button 
        id="close-share-modal"
        style="
          flex: 1;
          padding: 12px;
          background: #2a2f3a;
          border: none;
          border-radius: 8px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
        "
      >Lukk</button>
    </div>
  `;
  
  modal.appendChild(content);
  document.body.appendChild(modal);
  
  // Load participants
  loadParticipants(matchId);
  
  // Event handlers
  document.getElementById('invite-btn').addEventListener('click', async () => {
    const email = document.getElementById('invite-email-input').value.trim();
    if (!email) return;
    
    const btn = document.getElementById('invite-btn');
    btn.disabled = true;
    btn.textContent = 'Sender...';
    
    const result = await inviteUserToMatch(matchId, email);
    const msg = document.getElementById('invite-message');
    
    if (result.success) {
      msg.style.background = '#1a4a1a';
      msg.style.color = '#4ade80';
      msg.textContent = result.message || 'Bruker lagt til!';
      document.getElementById('invite-email-input').value = '';
      loadParticipants(matchId); // Refresh list
    } else {
      msg.style.background = '#4a1a1a';
      msg.style.color = '#ff6b6b';
      msg.textContent = result.error;
    }
    
    msg.style.display = 'block';
    btn.disabled = false;
    btn.textContent = 'Inviter';
    
    setTimeout(() => {
      msg.style.display = 'none';
    }, 3000);
  });
  
  document.getElementById('close-share-modal').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

async function loadParticipants(matchId) {
  const container = document.getElementById('participants-list');
  if (!container) return;
  
  const participants = await getMatchParticipants(matchId);
  const currentUser = getCurrentUser();
  
  if (participants.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; color: #8b92a7; padding: 20px;">
        Ingen deltakere ennå
      </div>
    `;
    return;
  }
  
  container.innerHTML = participants.map(p => `
    <div style="
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: #2a2f3a;
      border-radius: 8px;
    ">
      <div style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${p.isOwner ? '#e8b84b' : '#3a3f4a'};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${p.isOwner ? '#0a0c10' : '#fff'};
        font-weight: 700;
        font-size: 16px;
      ">
        ${(p.name || p.email).charAt(0).toUpperCase()}
      </div>
      <div style="flex: 1;">
        <div style="color: #fff; font-weight: 600;">
          ${p.name || p.email}
          ${p.isOwner ? '<span style="color: #e8b84b; font-size: 12px; margin-left: 8px;">EIER</span>' : ''}
        </div>
        <div style="color: #8b92a7; font-size: 13px;">${p.email}</div>
      </div>
      ${!p.isOwner && currentUser && (p.uid === currentUser.uid || p.isOwner) ? `
        <button 
          onclick="removeParticipant('${matchId}', '${p.uid}')"
          style="
            padding: 6px 12px;
            background: #4a1a1a;
            border: 1px solid #7a2a2a;
            border-radius: 6px;
            color: #ff6b6b;
            font-size: 12px;
            cursor: pointer;
          "
        >${p.uid === currentUser.uid ? 'Forlat' : 'Fjern'}</button>
      ` : ''}
    </div>
  `).join('');
}

window.removeParticipant = async function(matchId, userId) {
  const currentUser = getCurrentUser();
  if (!currentUser) return;
  
  const confirmed = confirm(
    userId === currentUser.uid 
      ? 'Vil du forlate denne matchen?' 
      : 'Vil du fjerne denne brukeren?'
  );
  
  if (!confirmed) return;
  
  let result;
  if (userId === currentUser.uid) {
    result = await leaveMatch(matchId);
  } else {
    result = await removeUserFromMatch(matchId, userId);
  }
  
  if (result.success) {
    if (userId === currentUser.uid) {
      // User left the match, close modal
      document.getElementById('share-match-modal')?.remove();
    } else {
      // Refresh participants list
      loadParticipants(matchId);
    }
  } else {
    alert(result.error);
  }
};
