import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const userStore = useSelector((store) => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        userDispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        userDispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className=" flex items-center justify-between w-full absolute z-10 px-8 bg-gradient-to-b from-black to-transparent">
      <img
        className="w-32"
        src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
      />
      <div className="flex justify-end">
        {userStore?.uid && (
          <>
            <img
              src={`${userStore?.photoURL}`}
              alt=""
              className="w-12 rounded-3xl mr-2"
            />
            <button
              onClick={handleSignOut}
              className="text-white p-2 text-sm bg-red-400"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
