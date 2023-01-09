import { signIn, signInGoogle } from '../lib/firebase.js';

export const Login = (onNavigate) => {
  const loginDiv = document.createElement('div');
  const template = `
  <div class="formBox" id="formBox">
  <img class=“logo” src=images/logos.png>
  <form id="loginForm" class="form">
  <div class="formgroup">
    <input type="email" id="email" placeholder="Correo" required>
  </div>
  <div class="formgroup2">
    <input type="password" id="password" placeholder="Contraseña" required>
    <span class="eyeicon" id="eyeIcon"></span>
  </div>
    <button id="btnIniciar" class="form-button" type="submit">Iniciar Sesión</button>
    <div class=“texto”>
      <p> ---- ó ---- </p>
    </div>
  </form>
  <div class="signUpgoogle">
      <h3>Continua con Google</h3>
      <button id="btnGmail" class="btnGmail" type="button"><img class="google-icon" src="images/google.png"></button>
  </div>
</div> `;
  // Muestra template para visualizar contenido  de la pagina
  loginDiv.innerHTML = template;
  const btnIniciar = loginDiv.querySelector('#btnIniciar');
  btnIniciar.addEventListener('click', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    signIn(correo, password)
      .then(() => onNavigate('/muro'))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  });
  const btnGmail = loginDiv.querySelector('#btnGmail');
  btnGmail.addEventListener('click', () => {
    signInGoogle()
      .then(() => {
        onNavigate('/muro');
      }).catch((error) => {
        console.log(error);
      });
  });
  return loginDiv;
};
