// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blinkbytes-d5712.firebaseapp.com",
    projectId: "blinkbytes-d5712",
    storageBucket: "blinkbytes-d5712.appspot.com",
    messagingSenderId: "511457074412",
    appId: "1:511457074412:web:97663770d9026a9baed9c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;