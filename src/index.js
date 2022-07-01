import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAwAzp3V-luELTnj0v8G0eANn9B0kPojXU",
  authDomain: "jaboon-barbato.firebaseapp.com",
  projectId: "jaboon-barbato",
  storageBucket: "jaboon-barbato.appspot.com",
  messagingSenderId: "951310403520",
  appId: "1:951310403520:web:2c0906792a3daf1c72aa25"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
