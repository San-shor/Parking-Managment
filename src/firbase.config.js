import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD3iEOfKqHZS0NoGhl2u1KmijSR7JbNpRw",
    authDomain: "parking-management-76732.firebaseapp.com",
    projectId: "parking-management-76732",
    storageBucket: "parking-management-76732.appspot.com",
    messagingSenderId: "654611851719",
    appId: "1:654611851719:web:727b4560a96a819a6491e2"
  };

  const app = initializeApp(firebaseConfig);
   export const db=getFirestore(app)