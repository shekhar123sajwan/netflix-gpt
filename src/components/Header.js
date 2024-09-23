import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const userStore = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        userDispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        userDispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
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
      <img className="w-32" src={LOGO} />
      <div className="flex justify-end">
        {userStore?.uid && (
          <>
            <p className="text-white mr-3 py-2">({userStore?.displayName})</p>
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
