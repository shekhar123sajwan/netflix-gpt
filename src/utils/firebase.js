// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS8oaiW_BTPJ4uqkfDe4GCm85zd5_o2ho",
  authDomain: "netflix-gpt-6b0d2.firebaseapp.com",
  projectId: "netflix-gpt-6b0d2",
  storageBucket: "netflix-gpt-6b0d2.appspot.com",
  messagingSenderId: "267052094718",
  appId: "1:267052094718:web:9d2f494aea31c58e55c1af",
  measurementId: "G-X2NKMPXVCF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const googlAuthProvider = new GoogleAuthProvider();
