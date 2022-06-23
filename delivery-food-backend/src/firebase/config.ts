import { initializeApp } from "firebase-admin/app";
import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';
import {ServiceAccount} from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
    apiKey: "AIzaSyC8k1DSfWd2zuXGhFx27YIto3ulWNGzNO8",
    authDomain: "delivery-food-20027.firebaseapp.com",
    projectId: "delivery-food-20027",
    storageBucket: "delivery-food-20027.appspot.com",
    messagingSenderId: "606489646430",
    appId: "1:606489646430:web:a6cf3a364d59281f8e6bcf"
};
const app = initializeApp(firebaseConfig);

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount as ServiceAccount)
})
export default {app,admin};

