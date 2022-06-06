import { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
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

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = async () => {
    return await signOut(auth);
  };

  // const sendLinkEmail = (email) => {
  //   const actionCodeSettings = {
  //     // URL you want to redirect back to. The domain (www.example.com) for this
  //     // URL must be in the authorized domains list in the Firebase Console.
  //     url: 'http://localhost:3000/',
  //     // This must be true.
  //     handleCodeInApp: true,
  //   };
  //   return sendSignInLinkToEmail(auth, email, actionCodeSettings)
  // }

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
        logout,
        loading,
        // sendLinkEmail,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
