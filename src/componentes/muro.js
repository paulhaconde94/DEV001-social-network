import { ongetPost, sendPost } from '../lib/firebase';

export const Muro = () => {
  const muroDiv = document.createElement('div');
  muroDiv.innerHTML = `
  <div class = 'navPost'>
  <button id="logout">Log out</button>
  </div>
  <figure>
      <img class="IconoPost" src="images/Logos.png" alt="Icono">
    </figure>
  <div class = 'postContainer'>
  <label for="comment" id = 'commentText'>Comentar!</label>
  <textarea id="task-comment" rows="3" placeholder="Post..."></textarea>
  <span class='errorMessage'></span>
  <button id="btn-task-save">Publicar!</button>
  </div>
  <div id="comments-container"></div>
  `;
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
        <div class= 'divPost' placeholder="Post..."> <p> ${toComment.post} </p>
        </div>
        `;
      });
      containerPost.innerHTML = publicados;
    });
  };
  toPost();
  return muroDiv;
};
