// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { Login } from '../src/componentes/login';
import { signIn, signInGoogle } from '../src/lib/firebase';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

// Test de la funcion correo y contraseña

document.body.innerHTML = `<button id="btnIniciar"></button>

<input id="Email"></input>

<input id="Password"></input>/
`;

describe('Test de la funcion login', () => {
  it('debería llamar correctamente a signInWithEmailAndPassword', () => {
    signIn();
    document.getElementById('btnIniciar').click();

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

// Test de la funcion google

describe('signInGoogle', () => {
  it('debería llamar la función signInWithPopup', () => {
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});
