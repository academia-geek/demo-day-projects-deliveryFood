import { initializeApp } from "firebase-admin/app";
import admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';
import {ServiceAccount} from 'firebase-admin';
import * as dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
    apiKey: "AIzaSyCcS850zQtFKQ49MCJV3JJiHX4Rdx6zaSU",
    authDomain: "deliveryfood-67e4e.firebaseapp.com",
    projectId: "deliveryfood-67e4e",
    storageBucket: "deliveryfood-67e4e.appspot.com",
    messagingSenderId: "372310120115",
    appId: "1:372310120115:web:b777492131b1133a6902c6"
};
const app = initializeApp(firebaseConfig);

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount as ServiceAccount)
})
export default {app,admin};

