// src/services/authService.ts
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

import { auth } from "../config/firebase";

/** ========================
 * Cadastro com email/senha
 * ======================== */
export const registerWithEmail = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/** ========================
 * Login com email/senha
 * ======================== */
export const loginWithEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/** ========================
 * Login com Google (Popup)
 * ======================== */
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  const result = await signInWithPopup(auth, provider);
  return {
    nome: result.user.displayName,
    email: result.user.email,
    fotoURL: result.user.photoURL, // <--- Foto do Google
  };
};

/** ========================
 * Login com Facebook (Redirect)
 * ======================== */
export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  await signInWithRedirect(auth, provider);
};

/** ========================
 * Pegar resultado de login via redirect
 * ======================== */
export const getSocialRedirectResult = async () => {
  return getRedirectResult(auth);
};

/** ========================
 * Reset de senha
 * ======================== */
export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

/** ========================
 * Verifica código de reset de senha
 * ======================== */
export const verifyResetCode = (code: string) => {
  return verifyPasswordResetCode(auth, code);
};

/** ========================
 * Confirma nova senha
 * ======================== */
export const confirmNewPassword = (code: string, newPassword: string) => {
  return confirmPasswordReset(auth, code, newPassword);
};
