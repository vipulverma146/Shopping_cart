import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCEi5ELCK4k-MNIUn6l7ZDI_fWxRm6IHMc",
  authDomain: "cart-8bcc3.firebaseapp.com",
  projectId: "cart-8bcc3",
  storageBucket: "cart-8bcc3.appspot.com",
  messagingSenderId: "680067239139",
  appId: "1:680067239139:web:aec3e4fb97a252ee9c49d6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


