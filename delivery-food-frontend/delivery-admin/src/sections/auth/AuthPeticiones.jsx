import { useState, useEffect, createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signOut,
  // sendSignInLinkToEmail
} from "firebase/auth";
import { auth } from "../../firebase";

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
// Await 
  const addImageAfterUserIsRegistered = async (userData, image) => {
    return  updateProfile(userData, { photoURL: image });
  };
// Await 
  const sendEmailVerificationAfterUserIsRegistered = async () => {
    return  sendEmailVerification(auth.currentUser);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

// Await 
  const logout = async () => {
    return signOut(auth);
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
        loginWithFacebook,
        user,
        addUsernameWhenUserIsRegistered,
        addImageAfterUserIsRegistered,
        sendEmailVerificationAfterUserIsRegistered,
        logout,
        loading,
        // sendLinkEmail,
      }}
    >
      {children}
    </contextAuth.Provider>
  );
};
