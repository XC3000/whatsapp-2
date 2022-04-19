// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2lBJfyC56-7VDO216gGQPKFYz6lk0nT0",
  authDomain: "whatsapp-2-da514.firebaseapp.com",
  projectId: "whatsapp-2-da514",
  storageBucket: "whatsapp-2-da514.appspot.com",
  messagingSenderId: "420822326836",
  appId: "1:420822326836:web:05087b41a5841acf977461",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider };
