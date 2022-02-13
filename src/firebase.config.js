import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqQlEsK4VVYq7pXRDQex1p3ls-3EuVQ00",
  authDomain: "house-marketplace-app-f8364.firebaseapp.com",
  projectId: "house-marketplace-app-f8364",
  storageBucket: "house-marketplace-app-f8364.appspot.com",
  messagingSenderId: "934324655287",
  appId: "1:934324655287:web:1af1827e73522a3c932932",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
