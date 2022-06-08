import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";

export const updateUserProfile = async (user) => {
  const { displayName, photoURL } = user;

  await updateProfile(auth.currentUser, {
    displayName: displayName,
    photoURL: photoURL !== undefined ? photoURL : auth.currentUser.photoURL,
  });
  return;
};
