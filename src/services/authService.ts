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
  User,
} from "firebase/auth";

import { auth } from "../config/firebase";

/* Cadastro com email/senha */
export const registerWithEmail = async (email: string, password: string): Promise<User> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result.user;
};

/* Login com email/senha */
export const loginWithEmail = async (email: string, password: string): Promise<User> => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
};

/* Login com Google (Popup) */
export const loginWithGoogle = async (): Promise<User | null> => {
  try {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    const result = await signInWithPopup(auth, provider);
    return result.user; // Retorna o usuário logado
  } catch (err) {
    console.error("Erro no login com Google:", err);
    return null;
  }
};

/* Login com Facebook (Popup) */
export const loginWithFacebook = async (): Promise<User | null> => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider); // Mudamos para Popup
    return result.user; // Retorna o usuário logado
  } catch (err) {
    console.error("Erro no login com Facebook:", err);
    return null;
  }
};

/* Pegar resultado de login via redirect (se usar redirect)*/
export const getSocialRedirectResult = async (): Promise<User | null> => {
  try {
    const result = await getRedirectResult(auth);
    return result?.user || null;
  } catch (err) {
    console.error("Erro ao obter resultado do redirect:", err);
    return null;
  }
};

/* Reset de senha */
export const resetPassword = async (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

/* Verifica código de reset de senha */
export const verifyResetCode = async (code: string) => {
  return verifyPasswordResetCode(auth, code);
};

/* Confirma nova senha */
export const confirmNewPassword = async (code: string, newPassword: string) => {
  return confirmPasswordReset(auth, code, newPassword);
};
