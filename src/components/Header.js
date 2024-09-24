import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const userStore = useSelector((store) => store.user);
  const gptStore = useSelector((store) => store.gpt.showGptSearch);
  const configLang = useSelector((store) => store.config.lang);

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

  const handleGptSearchClick = () => {
    //Toggle Gpt Button
    userDispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    userDispatch(setLang(e.currentTarget.value));
  };
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
    <div className=" flex items-center justify-between w-full absolute z-10 px-8 bg-gradient-to-b from-black to-transparent flex-col sm:flex-row md:flex-row">
      <img className="w-32 mx-auto sm:md:mx-0 md:mx-0" src={LOGO} />
      <div className="flex justify-end">
        {userStore?.uid && (
          <>
            {gptStore ? (
              <>
                <select
                  name="lang"
                  className="bg-gray-200 text-sm font-bold p-2 mx-2"
                  onChange={handleLangChange}
                  defaultValue={
                    configLang == "hindi"
                      ? "hindi"
                      : configLang == "en"
                      ? "en"
                      : ""
                  }
                >
                  <option value="hindi">Hindi</option>
                  <option value="en">English</option>
                </select>
                <button
                  onClick={() => {
                    userDispatch(toggleGptSearchView());
                  }}
                  className="bg-purple-500 text-white rounded-sm p-2 mx-2"
                >
                  Home
                </button>
              </>
            ) : (
              <div>
                <button
                  onClick={handleGptSearchClick}
                  className="bg-purple-500 text-white rounded-sm p-2 mx-2"
                >
                  Gpt Search
                </button>
              </div>
            )}

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
