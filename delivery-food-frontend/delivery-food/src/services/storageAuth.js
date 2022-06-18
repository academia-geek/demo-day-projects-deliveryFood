import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

export const updateImageUser = async (image) => {
  const refStorage = ref(storage, `auth_images/${image.name}`);
  const uploadimage = await uploadBytes(refStorage, image);
  const data = uploadimage;
  const getImageName = data.metadata.name;
  const urlImage = `
  https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/auth_images%2F${getImageName}?alt=media&token=78d1ccc2-8e0a-4e49-be85-52940a9a88ec
  `;
  return urlImage;
};
