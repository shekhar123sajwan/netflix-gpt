import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [loginForm, setloginForm] = useState(1);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidateData(
      fullName?.current == null ? null : fullName.current.value,
      email.current.value,
      password.current.value
    );
    setError(message);

    if (message) return;

    //Sign Up Logic
    if (!loginForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/34606343?v=4",
          })
            .then(() => {
              // Profile updated
              const user = auth.currentUser;
              dispatch(
                addUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setError(errorCode + ": " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ": " + errorMessage);
        });
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + ": " + errorMessage);
        });
    }
  };
  const toggleForm = () => {
    setloginForm(!loginForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="w-full size-full absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_medium.jpg"
        />
      </div>
      <form className="w-1/3 mx-auto absolute left-0 my-36 right-0 p-8 bg-gradient-to-tr from-red-50 to-transparent">
        <h1 className="font-bold text-3xl mb-3">
          {loginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!loginForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
        />
        {error && (
          <p className="text-red-600 font-bold text-sm mb-1">* {error}</p>
        )}
        <button
          className="w-full px-2 py-1 text-sm rounded-sm bg-red-600 text-white"
          onClick={handleButtonClick}
        >
          Submit
        </button>
        <p className="mt-1 font-bold ">
          {loginForm ? "New to Netflix?" : "Already have an account?"}
          <a className="text-red-600" href="#" onClick={toggleForm}>
            {loginForm ? " Sign Up" : " Sign In"}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
