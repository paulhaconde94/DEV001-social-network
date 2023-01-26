import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  ongetPost, sendPost, deletePost, auth,
} from '../lib/firebase';

export const Muro = (onNavigate) => {
  const muroDiv = document.createElement('div');
  muroDiv.innerHTML = `
  <div class="formBox2" id="formBox2">
  <div class = "navPost">
  <h3  id = "userName" class = "userName"> Nombre </h3>
  <button id="logout">Log out</button>
  </div>
  <figure>
      <img class="IconoPost" src="https://i.ibb.co/8X5MHv7/logoWall.png" alt="Icono">
    </figure>
  <div class = 'postContainer'>
  <label for="comment" id = 'commentText'>Comparte!</label>
  <textarea id="task-comment" rows="3" placeholder="Escribe una frase..."></textarea>
  <span class='errorMessage'></span>
  <button id="btn-task-save">Publicar!</button>
  <div id="comments-container"></div>
  `;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      muroDiv.querySelector('#userName').textContent = user.displayName;
    }
  });
  muroDiv.querySelector('#logout').addEventListener('click', () => {
    signOut(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
      console.error(error);
    });
  });
  muroDiv.querySelector('#btn-task-save').addEventListener('click', (e) => {
    e.preventDefault();
    const writePost = muroDiv.querySelector('#task-comment');
    sendPost(writePost.value, auth.currentUser.displayName);
  });
  const toPost = async () => {
    ongetPost((querySnapshot) => {
      const containerPost = muroDiv.querySelector('#comments-container');
      let publicados = '';
      querySnapshot.forEach((doc) => {
        const toComment = doc.data();
        publicados += `
        <div class='commentCreated'>
        <h6 id= 'userName2' > ${toComment.author} </h6>
        <div class= 'divPost'> <p> ${toComment.post} </p>
        <input type="button" class="btn-delete" data-id="${doc.id}" value="&#128465">
        </div>
        </div>
        `;
      });
      containerPost.innerHTML = publicados;
      muroDiv.querySelectorAll('.btn-delete').forEach((button) => {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          deletePost(button.dataset.id);
        });
      });
    });
  };
  toPost();
  return muroDiv;
};
