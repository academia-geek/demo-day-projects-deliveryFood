import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

export const uploadImage = async (image) => {
  const refStorage = ref(storage, `menu/establecimiento/${image.name}`);
  const uploadImage = await uploadBytes(refStorage, image);
  const data = uploadImage;
  const imageName = data.metadata.name;
  const urlImg = `https://firebasestorage.googleapis.com/v0/b/delivery-food-20027.appspot.com/o/menu%2Festablecimiento%2F${imageName}?alt=media&token=dff42c43-9336-4c20-acd5-feb3c4111752`;
  return urlImg;
};
