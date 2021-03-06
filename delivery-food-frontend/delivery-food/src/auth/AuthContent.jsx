import { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signOut,
  // sendSignInLinkToEmail
} from "firebase/auth";
import { auth } from "../firebase";

const contextAuth = createContext();

export const useAuth = () => useContext(contextAuth);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailandPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const addUsernameWhenUserIsRegistered = (userData, username) => {
    return updateProfile(userData, { displayName: username });
  };

  const addImageAfterUserIsRegistered = async (userData, image) => {
    return await updateProfile(userData, { photoURL: image });
  };

  const sendEmailVerificationAfterUserIsRegistered = async () => {
    await sendEmailVerification(auth.currentUser);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    return await signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <contextAuth.Provider
      value={{
        createUser,
        loginWithEmailandPassword,
        loginWithGoogle,
        user,
        addUsernameWhenUserIsRegistered,
        addImageAfterUserIsRegistered,
        sendEmailVerificationAfterUserIsRegistered,
        logout,
        loading,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
