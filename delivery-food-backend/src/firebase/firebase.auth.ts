import app from "../firebase/firebase.config";
import { FirebaseApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(app.app as FirebaseApp);

const createUser = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user_name = userCredential.user;
      return { error: false, data: user_name };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { error: true, data: error };
    });
  return response;
};

const login = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user_name = userCredential.user;
      return { error: false, data: user_name };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return { error: true, data: errorMessage };
    });

  return response;
};

export default { createUser, login };