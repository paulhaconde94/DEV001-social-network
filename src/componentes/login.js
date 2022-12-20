// eslint-disable-next-line import/no-cycle

/* export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenida al Login';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
}; */
// import { Muro } from './componentes/muro.js';
import { signIn } from '../lib/firebase.js';

export const Login = () => {
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
      <button id="buttonGmail" type="button"><img class="google-icon" src="images/google.png"></button>
  </div>
</div> `;
  // mostrar template para mostrar  contenido  en la pagina
  loginDiv.innerHTML = template;
  const btnIniciar = loginDiv.querySelector('#btnIniciar');
  btnIniciar.addEventListener('click', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    signIn(correo, password)
      .then(() => ('/muro'));
    // console.log('lograr que este console log se imprima cuando se haya logueado con exito');
    // -- por aca mas o menos ya el hace login
  });
  return loginDiv;
};
