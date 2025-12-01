import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyANpuYUXUziQzkVum7X9__pJcCffgMRWtM",
    authDomain: "proyecto-react-coffee.firebaseapp.com",
    projectId: "proyecto-react-coffee",
    storageBucket: "proyecto-react-coffee.firebasestorage.app",
    messagingSenderId: "86372375665",
    appId: "1:86372375665:web:cfc74a980b5088fb4f4fd0"
  };

export const app = initializeApp(firebaseConfig);