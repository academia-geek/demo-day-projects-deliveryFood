import { initializeApp } from "firebase/app";
import * as dotenv from 'dotenv'
import admin, {ServiceAccount} from "firebase-admin";
import serviceAccount from "../firebase/service-account-key.json";

dotenv.config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

const app = initializeApp(firebaseConfig);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as ServiceAccount)
});


export default {app, admin}




