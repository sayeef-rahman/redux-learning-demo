// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  // Withour .env.local file
  apiKey: "AIzaSyBe71CfmkXKBmug83BqK9IEf0X5KgS3Ous",
  authDomain: "ecommerce-redux-2c10b.firebaseapp.com",
  projectId: "ecommerce-redux-2c10b",
  storageBucket: "ecommerce-redux-2c10b.appspot.com",
  messagingSenderId: "163878531194",
  appId: "1:163878531194:web:143b33884212216ebd4bc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;