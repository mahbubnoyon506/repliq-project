// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp7wBKUb8F37Jj7jTXXyZ4zNkY-9HjTBY",
  authDomain: "repliq-project.firebaseapp.com",
  projectId: "repliq-project",
  storageBucket: "repliq-project.appspot.com",
  messagingSenderId: "42242075480",
  appId: "1:42242075480:web:6da5edde9e1bc24388932d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;