import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAph0eyrF2rnKGF8izh4h9ILxjLAqiXOnU",
  authDomain: "generic-ecommerce-shalem.firebaseapp.com",
  projectId: "generic-ecommerce-shalem",
  storageBucket: "generic-ecommerce-shalem.appspot.com",
  messagingSenderId: "990987284708",
  appId: "1:990987284708:web:dc1c84113e01005ebc7cf1",
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}

// const fb = firebase.initializeApp(firebaseConfig);

// export const dataBase = fb.firestore();
