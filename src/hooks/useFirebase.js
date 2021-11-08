import firebaseInIt from "../firebase/firebase.init.js";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInIt();

const useFirebase = () => {
  const [newUser, setNewUser] = useState({});
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google login
  function googleSignIn() {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => setError(err.message));
  }
  // register user
  function registerUser() {
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((result) => {
        setUserDisplayName();
      })
      .catch((error) => setError(error.message));
  }

  // login
  function login() {
    console.log(newUser);
    signInWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => setError(err.message));
  }

  // get signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
    return () => unsubscribe;
  }, []);

  // set User name and photo url
  function setUserDisplayName() {
    updateProfile(auth.currentUser, {
      displayName: newUser.name,
      photoURL: newUser.photoUrl,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  }

  // log out
  function logout() {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((err) => setError(err.message));
  }

  return {
    googleSignIn,
    user,
    error,
    logout,
    newUser,
    setNewUser,
    registerUser,
    login,
  };
};

export default useFirebase;
