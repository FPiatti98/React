import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { initializeApp } from "firebase/app";


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTC8PVC1Ix0MTjaQBwPjO0yWcA5OhAc4E",
    authDomain: "react-proyect-coderhouse.firebaseapp.com",
    projectId: "react-proyect-coderhouse",
    storageBucket: "react-proyect-coderhouse.appspot.com",
    messagingSenderId: "578417303288",
    appId: "1:578417303288:web:d0c95b4eaf7bab8120e50d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);