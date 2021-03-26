import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-46QOjayJc4NxuIm-dFQvsPK1gqAXWBQ",
  authDomain: "dev-next-32e5b.firebaseapp.com",
  projectId: "dev-next-32e5b",
  storageBucket: "dev-next-32e5b.appspot.com",
  messagingSenderId: "608686779369",
  appId: "1:608686779369:web:8d3a9b82855646689df978",
  measurementId: "G-R4R5PDXN5H",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};
