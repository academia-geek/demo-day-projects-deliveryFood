import { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const contextAuth = createContext();

export const useAuth = () => useContext(contextAuth);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <contextAuth.Provider
      value={{ createUser, loginWithEmailandPassword, loginWithGoogle, user }}
    >
      {children}
    </contextAuth.Provider>
  );
};
