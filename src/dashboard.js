import { getUserNotes, addBasicNote, addMediaNote } from './services/apiRequests';
import './assets/css/dashboard.css';

const addNoteBtn = document.querySelector('#addNoteBtn');

addNoteBtn.addEventListener('click', async () => {
  const userID = sessionStorage.getItem('ChromieUserID');
  if (userID) {
    const pageLink = window.location.href;
    const body = 'Just a test note';
    const result = await addBasicNote(pageLink, body, userID);
    if (result.status === 200) {
      console.log(result.data);
    } else console.log(result.data || result.statusText);
  }
});
