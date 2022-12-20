// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// eslint-disable-next-line no-console, spaced-comment
//console.log('Hola Mundo');

// eslint-disable-next-line spaced-comment
//myFunction();

/* eslint-disable import/no-cycle */
import { Login } from './componentes/login.js';
import { Muro } from './componentes/muro.js';

export const rootDiv = document.getElementById('root');
let routes = {};
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.innerHTML = (routes[pathname]);
};

routes = {
  '/': Login(onNavigate),
  '/muro': Muro(onNavigate),
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]);
};

rootDiv.appendChild(component);
