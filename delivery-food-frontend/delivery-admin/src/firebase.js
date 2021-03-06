import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC8k1DSfWd2zuXGhFx27YIto3ulWNGzNO8',
  authDomain: 'delivery-food-20027.firebaseapp.com',
  projectId: 'delivery-food-20027',
  storageBucket: 'delivery-food-20027.appspot.com',
  messagingSenderId: '606489646430',
  appId: '1:606489646430:web:a6cf3a364d59281f8e6bcf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
