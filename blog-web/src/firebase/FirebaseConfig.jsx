// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTIqFkXKbSSRuGk9O1AoFntTaPksidBiM",
  authDomain: "blog-app-436b8.firebaseapp.com",
  databaseURL: "https://blog-app-436b8-default-rtdb.firebaseio.com",
  projectId: "blog-app-436b8",
  storageBucket: "blog-app-436b8.appspot.com",
  messagingSenderId: "460779416736",
  appId: "1:460779416736:web:5b12dca9742d8b6905adc5",
  measurementId: "G-L2DGNXTZK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage }