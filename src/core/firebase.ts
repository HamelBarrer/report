import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_VUE_APP_APIKEY,
  authDomain: import.meta.env.VITE_VUE_APP_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_VUE_APP_DATABASEURL,
  projectId: import.meta.env.VITE_VUE_APP_PROJECTId,
  storageBucket: import.meta.env.VITE_VUE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_VUE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_VUE_APP_APPId,
  measurementId: import.meta.env.VITE_VUE_APP_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };
