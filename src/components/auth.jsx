import { auth, googleProvider } from "../config/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import GoogleButton from "react-google-button"

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container-alt">
      <input className="input-alt"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="input-alt"
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button-alt" onClick={signIn}>Sign In</button>
      <GoogleButton type="dark" className="google" onClick={signInWithGoogle}>Sign In With Google</GoogleButton>
      <button className="button-alt" onClick={logout}>Logout</button>
      {/* make sure to add redirect page after logging out */}
    </div>
  );
};
