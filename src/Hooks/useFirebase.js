import { useEffect, useState } from "react";
//import all from firebase Auth
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import FirebaseInitialize from "../Firebase/Firebase.init";
FirebaseInitialize();
const useFirebase = () => {
  //declare auth
  const auth = getAuth();
  //declare all the useing state and useEffect
  const [users, setUsers] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  //google sign in
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  //google sign out
  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {});
  };
  //keeps sign in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if (signedInUser) {
        setUsers(signedInUser);
      } else {
        setUsers({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  //form submit
  const formSubmit = (e) => {
    e.preventDefault();
  };
  //sign up Email and password
  const signUpEmailPassword = (e) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign In email and password
  const signInEmailPassword = (e) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  console.log(email, password);
  //Emali and Password and photo url
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  const getName = (e) => {
    setName(e?.target?.value);
  };
  const getImage = (e) => {
    setImage(e?.target?.value);
  };
  //update name and photo url
  const updateNameAndImage = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    getEmail,
    getPassword,
    getName,
    getImage,
    signUpEmailPassword,
    signInEmailPassword,
    handleGoogleSignIn,
    handleGoogleSignOut,
    setUsers,
    setError,
    users,
    error,
    loading,
    setLoading,
    formSubmit,
    updateNameAndImage,
  };
};

export default useFirebase;
