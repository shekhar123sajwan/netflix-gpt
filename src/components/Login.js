import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [loginForm, setloginForm] = useState(1);

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
            type="text"
            placeholder="Full Name"
            className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-300 p-1 mb-4 rounded border-2 border-gray-500"
        />
        <button className="w-full px-2 py-1 text-sm rounded-sm bg-red-600 text-white">
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
