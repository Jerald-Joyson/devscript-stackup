import { getAuth } from "firebase/auth";
import firebaseApp from "./firebase"; // Import your Firebase configuration file

const auth = getAuth(firebaseApp);

export default auth;
