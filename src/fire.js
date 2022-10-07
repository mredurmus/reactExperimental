import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDB5BZEQ93YA9kNW0ZAb9MehsP1vRj40XQ",
  authDomain: "finalprojesi-da526.firebaseapp.com",
  databaseURL: "https://finalprojesi-da526-default-rtdb.firebaseio.com",
  projectId: "finalprojesi-da526",
  storageBucket: "finalprojesi-da526.appspot.com",
  messagingSenderId: "261598929059",
  appId: "1:261598929059:web:61fcfa3ac3d0c0b50f5f16"
};

initializeApp(firebaseConfig);
export const auth = getAuth();