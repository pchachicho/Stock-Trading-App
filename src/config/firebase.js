import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjhI_PqhjWprcmA0eI46_sd12mDYuj_Xo",
  authDomain: "stocktradingapp-65dbe.firebaseapp.com",
  projectId: "stocktradingapp-65dbe",
  storageBucket: "stocktradingapp-65dbe.appspot.com",
  messagingSenderId: "404695737169",
  appId: "1:404695737169:web:bbf5ff1c941a7d2dab2970",
  measurementId: "G-N1VX6ZKSY5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
