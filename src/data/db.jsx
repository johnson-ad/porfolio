import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

 
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

 
// const firebaseConfig = {
//   apiKey: "AIzaSyD8PDZClxx_7V4P0wUg-Sa9sq_Y8YpUyBo",
//   authDomain: "johnson-ad.firebaseapp.com",
//   projectId: "johnson-ad",
//   storageBucket: "johnson-ad.appspot.com",
//   messagingSenderId: "356725618195",
//   appId: "1:356725618195:web:5c34d7a1a2c1078417b1e6",
//   measurementId: "G-R5BE796MG6"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);