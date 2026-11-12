
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBquPL-x2Z2GYhlZXLKLMa74uELXiAX7BI",
  authDomain: "pcsd-7adee.firebaseapp.com",
  projectId: "pcsd-7adee",
  storageBucket: "pcsd-7adee.firebasestorage.app",
  messagingSenderId: "287437546233",
  appId: "1:287437546233:web:71490d0c2f4d38bc3bb828",
  measurementId: "G-72XBXX7H7W"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("registerBtn").addEventListener("click", async () => {
  try {
    message.textContent = "Creando cuenta...";

    await createUserWithEmailAndPassword(
      auth,
      emailInput.value.trim(),
      passwordInput.value
    );

    message.textContent = "¡Cuenta creada correctamente!";
  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  try {
    message.textContent = "Iniciando sesión...";

    await signInWithEmailAndPassword(
      auth,
      emailInput.value.trim(),
      passwordInput.value
    );

    message.textContent = "¡Bienvenido a PCS!";
  } catch (error) {
    message.textContent = "Error: " + error.message;
  }
});
