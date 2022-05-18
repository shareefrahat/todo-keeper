// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnfVsfudEdrrYA7i1_b_2e_St3tMgquJg",
  authDomain: "todo-keeper-bd.firebaseapp.com",
  projectId: "todo-keeper-bd",
  storageBucket: "todo-keeper-bd.appspot.com",
  messagingSenderId: "953245443776",
  appId: "1:953245443776:web:ed9683adee63787987af25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
