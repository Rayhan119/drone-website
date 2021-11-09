import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const FirebaseInitialize = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
