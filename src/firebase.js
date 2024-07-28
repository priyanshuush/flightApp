
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
   //     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID

apiKey: "AIzaSyA-vntoUmCFNw0w_FLK_sKLt__R_ep0Vwc",
authDomain: "flighapp.firebaseapp.com",
projectId: "flighapp",
storageBucket: "flighapp.appspot.com",
messagingSenderId: "412763227896",
appId: "1:412763227896:web:a2fc9577a0cd04ea28dd0d"
};


const app = initializeApp(firebaseConfig);


const messaging = getMessaging(app);

export { messaging };