

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getApp, getApps, initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFvwFUsqgqZgSvG8GFASf1wqvSkpo7S4Q",
  authDomain: "rookas-chat-gpt-app.firebaseapp.com",
  projectId: "rookas-chat-gpt-app",
  storageBucket: "rookas-chat-gpt-app.appspot.com",
  messagingSenderId: "103684272282",
  appId: "1:103684272282:web:6bc6c29bfe9537ad2baf23",
  measurementId: "G-8J3GP7W0EE"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; // by Rokas with ❤️
