import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANpuYUXUziQzkVum7X9__pJcCffgMRWtM",
  authDomain: "proyecto-react-coffee.firebaseapp.com",
  projectId: "proyecto-react-coffee",
  storageBucket: "proyecto-react-coffee.appspot.com",
  messagingSenderId: "86372375665",
  appId: "1:86372375665:web:cfc74a980b5088fb4f4fd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
