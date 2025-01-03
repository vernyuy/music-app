import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [signIn, setSignIn] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Methods
  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setScreenWidth(currentWidth);

    if (
      (currentWidth > 1024 && !showMenu) ||
      (currentWidth <= 1024 && showMenu)
    ) {
      setShowMenu(!showMenu);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (screenWidth <= 767) {
      setShowMenu(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const handleAuthentication = async () => {
    try {
      const { accessToken } = (await fetchAuthSession()).tokens ?? {};
      if (accessToken === undefined) {
        setSignIn(false);
        localStorage.setItem("authEvent", "false");
      } else {
        setSignIn(true);
        localStorage.setItem("authEvent", "true");
      }
    } catch (error) {
      //
    }
  };

  const listener = (data: any) => {
    const { event } = data.payload;
    if (event == "signedIn") {
      setSignIn(true);
      localStorage.setItem("authEvent", "true");
    }
    if (event == "signedOut") {
      setSignIn(false);
      localStorage.setItem("authEvent", "false");
    }
    handleAuthentication();
  };

  useEffect(() => {
    handleAuthentication();
    Hub.listen("auth", listener);
  }, []);

  const handleSignOut = async () => {
    try {
      handleAuthentication();
      await signOut();
    } catch (error) {
      //
    }
  };

  return (
    <nav
      className={`${
        showMenu ? "bg-[#131313] lg:bg-black lg:bg-opacity-40" : ""
      } lg:fixed w-full z-20 top-0 start-0 p-5 lg:px-3.5 lg:py-6 transition-all ease-in-out duration-700`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto transition-all ease-in-out duration-700">
        <div className="flex items-center space-x-10 rtl:space-x-reverse">
          <Link to="/">
            <img src={Logo} className="h-6 lg:h-7" alt="Music app" />
          </Link>
          <ul className="max-lg:hidden flex gap-9">
            <li className="group text-center font-medium">
              <Link to="/explore">
                <span>Explore</span>
                <div className="w-full flex justify-center">
                  <span className="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"></span>
                </div>
              </Link>
            </li>

            {/* {location.pathname.startsWith("/artist/") ? (
              <button
                onClick={openChat}
                className="group text-center font-medium"
              >
                <span>Chats</span>
                <div className="w-full flex justify-center">
                  <span className="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"></span>
                </div>
              </button>
            ) : (
              <></>
            )} */}
          </ul>
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden"
          onClick={toggleMenu}
        >
          {!showMenu ? (
            <div className="flex flex-col justify-between w-24 cursor-pointer">
              <span className="block w-full h-[3px] bg-white rounded"></span>
              <span className="block w-full h-[3px] bg-white rounded mt-[5px]"></span>
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 16 16"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
              />
            </svg>
          )}
        </button>

        {showMenu && (
          <div className="w-full lg:block lg:w-auto overflow-hidden transition-all ease-in-out duration-200">
            <ul className="font-medium lg:flex lg:items-center flex flex-col py-4 lg:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-6 rtl:space-x-reverse lg:mt-0 lg:border-0">
              <li className="hidden max-lg:block">
                <Link
                  to="/explore"
                  className="lg:px-6 max-lg:text-2xl lg:bg-black py-[6px] font-bold lg:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                >
                  Explore
                </Link>
              </li>
              {/* <li className="hidden max-lg:block my-4">
                <Link
                  to="/"
                  className="lg:px-6 max-lg:text-2xl lg:bg-black py-[6px] font-bold lg:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                >
                  My Library
                </Link>
              </li> */}
              <li className="gap-2 lg:flex block max-lg:space-y-4">
                {/* <div>
                  <Link
                    to="/"
                    className="lg:px-6 max-lg:text-2xl lg:bg-black py-[6px] font-bold lg:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                  >
                    Join our Community
                  </Link>
                </div> */}
                <div>
                  <Link
                    to="/artists"
                    className="lg:px-6 max-lg:text-2xl lg:bg-black py-[6px] font-bold lg:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                  >
                    Artists
                  </Link>
                </div>
              </li>
              <li className="h-5 hidden lg:block bg-gray-50 w-[1.5px] bg-opacity-30"></li>

              {signIn ? (
                <li className="max-lg:mt-5 max-lg:mb-2">
                  <button
                    className="px-6 max-lg:mt-3 py-[6px] max-lg:w-full font-medium hover:border-white bg-black rounded-full hover:border-[1.8px] border-[1.5px] border-gray-50 border-opacity-45"
                    onClick={() => handleSignOut()}
                  >
                    Sign Out
                  </button>
                </li>
              ) : (
                <li className="lg:flex max-lg:mt-5 lg:items-center justify-center gap-3 max-lg:mb-2 text-center">
                  <Link to="/auth">
                    <div className="px-6 py-[6px] max-lg:w-full font-medium hover:border-white bg-black rounded-full border-[1.8px] border-transparent">
                      Log In
                    </div>
                  </Link>
                  <Link to="/auth">
                    <div className="px-6 max-lg:mt-3 py-[6px] max-lg:w-full font-medium hover:border-white bg-black rounded-full hover:border-[1.8px] border-[1.5px] border-gray-50 border-opacity-45">
                      Sign Up
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
