import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { collection, doc } from 'firebase/firestore';
import {
  deletePost,
  getPost, ongetPost, sendPost, signIn, signInGoogle,
} from '../src/lib/firebase';

jest.mock('firebase/auth');
jest.mock('firebase/firestore');

// Test para correo y contraseña

document.body.innerHTML = `<button id="btnIniciar"></button>

<input id="Email"></input>

<input id="Password"></input>
<button id="btnGmail"></button>
`;

describe('Test signIn', () => {
  it('debería llamar correctamente a signInWithEmailAndPassword', () => {
    signIn();
    document.getElementById('btnIniciar').click();

    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });
});

// Test Inicio con google

describe('Test signInGoogle', () => {
  it('debería llamar la función signInWithPopup', () => {
    signInGoogle();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

// Test sendPost

describe('Test sendPost', () => {
  it('deberia llamar la funcion collection', () => {
    sendPost();
    expect(collection).toHaveBeenCalled();
  });
});

// Test getPost

describe('Test getPost', () => {
  it('deberia llamar la funcion collection', () => {
    getPost();
    expect(collection).toHaveBeenCalled();
  });
});

// Test ongetPost

describe('Test ongetPost', () => {
  it('deberia llamar la funcion collection', () => {
    ongetPost();
    expect(collection).toHaveBeenCalled();
  });
});

// Test deletePost

describe('Test deletePost', () => {
  it('deberia llamar la funcion doc', () => {
    deletePost();
    expect(doc).toHaveBeenCalled();
  });
});
