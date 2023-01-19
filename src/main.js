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

  rootDiv.appendChild(routes[window.location.pathname]);
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
