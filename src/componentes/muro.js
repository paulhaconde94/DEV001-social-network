import { signOut } from 'firebase/auth';
import { ongetPost, sendPost, auth, deletePost, } from '../lib/firebase';

export const Muro = (onNavigate) => {
  const muroDiv = document.createElement('div');
  muroDiv.innerHTML = `
  <div class = 'navPost'>
  <button id="logout">Log out</button>
  </div>
  <figure>
      <img class="IconoPost" src="images/logoMuro.png" alt="Icono">
    </figure>
  <div class = 'postContainer'>
  <label for="comment" id = 'commentText'>Comentar!</label>
  <textarea id="task-comment" rows="3" placeholder="Escribe una frase..."></textarea>
  <span class='errorMessage'></span>
  <button id="btn-task-save">Publicar!</button>
  </div>
  <div id="comments-container"></div>
  `;
  muroDiv.querySelector('#logout').addEventListener('click', (e) => {
    signOut(auth).then(() => {
      onNavigate('/');
    }).catch((error) => {
    });
  });
  muroDiv.querySelector('#btn-task-save').addEventListener('click', (e) => {
    e.preventDefault();
    const writePost = muroDiv.querySelector('#task-comment');
    sendPost(writePost.value);
  });
  const toPost = async () => {
    ongetPost((querySnapshot) => {
      const containerPost = muroDiv.querySelector('#comments-container');
      let publicados = '';
      querySnapshot.forEach((doc) => {
        const toComment = doc.data();
        publicados += `
        <div class='commentCreated'>
        <div class= 'headerPost'>
        <div class= 'divPost' placeholder="Post..."> <p> ${toComment.post} </p>
        <input type="button" id="btn-delete" value = '&#128465'>
        </div>
        `;
      });
      containerPost.innerHTML = publicados;
      muroDiv.querySelector('#btn-delete').addEventListener('click', (e) => {
        e.preventDefault();
        deletePost('680DOdcIDOJEbKOvpaG5');
      });
    });
  };
  toPost();
  return muroDiv;
};
