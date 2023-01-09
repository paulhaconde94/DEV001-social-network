import {
} from 'firebase/firestore';

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
  muroDiv.querySelector('#btn-task-save').addEventListener('click', () => {

  });
  return muroDiv;
};

// export const Muro = () => {
// };
