// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARVO4-s1FpXiLtsKlLNj9RuRDO-sruC0A",
    authDomain: "a-09-discount-pro.firebaseapp.com",
    projectId: "a-09-discount-pro",
    storageBucket: "a-09-discount-pro.firebasestorage.app",
    messagingSenderId: "925893250456",
    appId: "1:925893250456:web:ba3bf31d0b92a7c96a2fed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);