import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAhvex2C85eY0anepOlEIls3ywoPWlV74",
  authDomain: "stackup-devscript.firebaseapp.com",
  projectId: "stackup-devscript",
  storageBucket: "stackup-devscript.appspot.com",
  messagingSenderId: "282650086684",
  appId: "1:282650086684:web:75ba9ecf1afed79c37fed9",
  measurementId: "G-VN6S7PH244",
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage }
