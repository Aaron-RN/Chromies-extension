import { getUserNotes, addBasicNote, addMediaNote } from './services/apiRequests';
import './assets/css/dashboard.css';

const showNotesDiv = document.querySelector('#showNotes');
const addNoteBtn = document.querySelector('#addNoteBtn');

// Fetches all notes written by user that is logged in
const populateNotes = async (userID) => {
  const result = await getUserNotes(userID);
  if (result.status === 200) {
    const allNotes = result.data.notes;
    showNotesDiv.innerHTML = allNotes.map(note => `<div>${note.body}</div>`).join('');
  } else { showNotesDiv.textContent = ''; }
};

// Check if user is logged in and saved in localStorage
const userID = localStorage.getItem('ChromieUserID');
if (userID) {
  populateNotes(userID);
}

addNoteBtn.addEventListener('click', async () => {
  const userID = localStorage.getItem('ChromieUserID');
  if (userID) {
    const noteTextInput = document.querySelector('#noteBodyInput');
    const pageLink = window.location.href; // does not give URL of page it is encased in
    const body = noteTextInput.value;
    const result = await addBasicNote(pageLink, body, userID);
    if (result.status === 200) {
      populateNotes(userID);
    } else console.log(result.data || result.statusText);
  }
});
