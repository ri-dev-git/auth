import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyAJxz-CC4V_U0KtDlRb4GM8OP3OPJQW0ng",
    authDomain: "auth-e1b54.firebaseapp.com",
    projectId: "auth-e1b54",
    storageBucket: "auth-e1b54.appspot.com",
    messagingSenderId: "1037759264707",
    appId: "1:1037759264707:web:50af86048f0cb569f1ef76"
  };

  // Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
