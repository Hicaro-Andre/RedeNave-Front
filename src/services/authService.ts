import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

import { auth } from "../config/firebase";

/** Cadastro com email/senha **/
export const registerWithEmail = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/** Login com email/senha **/
export const loginWithEmail = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/** Login com Google  **/
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  await signInWithRedirect(auth, provider);
};

/** Login com Facebook **/
export const loginWithFacebook = async () => {
  const provider = new FacebookAuthProvider();

  await signInWithRedirect(auth, provider);
};

export const getSocialRedirectResult = async () => {
  return getRedirectResult(auth);
};

/** Reset de senha **/
export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

/** Reset senha - valida código **/
export const verifyResetCode = (code: string) => {
  return verifyPasswordResetCode(auth, code);
};

/** Reset senha - confirma nova senha **/
export const confirmNewPassword = (
  code: string,
  newPassword: string
) => {
  return confirmPasswordReset(auth, code, newPassword);
};
