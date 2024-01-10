import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzWxnFvFweMWXhlaz6kc4BW5q9BTlva7U",
    authDomain: "zen-log.firebaseapp.com",
    projectId: "zen-log",
    storageBucket: "zen-log.appspot.com",
    messagingSenderId: "587777896424",
    appId: "1:587777896424:web:e723dc2a289b6c4b6afe5d"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default firebaseConfig;