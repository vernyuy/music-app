import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  // Methods
  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setScreenWidth(currentWidth);

    if (
      (currentWidth > 767 && !showMenu) ||
      (currentWidth <= 767 && showMenu)
    ) {
      setShowMenu(!showMenu);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Lifecycle Hooks
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (screenWidth <= 767) {
      setShowMenu(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  return (
    <nav
      className={`${
        showMenu ? "bg-[#131313] md:bg-black md:bg-opacity-40" : ""
      } md:fixed w-full z-20 top-0 start-0 p-5 md:px-3.5 md:py-6 transition-all ease-in-out duration-700`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto transition-all ease-in-out duration-700">
        <div className="flex items-center space-x-10 rtl:space-x-reverse">
          <Link to="/">
            <img src={Logo} className="h-6 md:h-7" alt="Music app" />
          </Link>
          <ul className="max-md:hidden flex gap-9">
            <li className="group text-center font-medium">
              <Link to="/explore">
                <span>Explore</span>
                <div className="w-full flex justify-center">
                  <span className="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"></span>
                </div>
              </Link>
            </li>
            <li className="group text-center font-medium">
              <span>My Library</span>
              <div className="w-full flex justify-center">
                <span className="hidden group-hover:block bg-red-500 h-[3px] w-10 rounded-full mt-[2px]"></span>
              </div>
            </li>
          </ul>
        </div>

        <button
          type="button"
          aria-label="Toggle Menu"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
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
          <div className="w-full md:block md:w-auto overflow-hidden transition-all ease-in-out duration-200">
            <ul className="font-medium md:flex md:items-center flex flex-col py-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="hidden max-md:block">
                <Link
                  to="/explore"
                  className="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                >
                  Explore
                </Link>
              </li>
              <li className="hidden max-md:block my-4">
                <Link
                  to="/"
                  className="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                >
                  My Library
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="md:px-6 max-md:text-2xl md:bg-black py-[6px] font-bold md:font-medium hover:border-white rounded-full border-[1.8px] border-transparent"
                >
                  For Artists
                </Link>
              </li>
              <li className="h-5 hidden md:block bg-gray-50 w-[1.5px] bg-opacity-30"></li>
              <li className="md:flex max-md:mt-5 md:items-center justify-center gap-3 max-md:mb-2">
                <Link
                  to="/auth"
                  className="px-6 py-[6px] max-md:w-full font-medium hover:border-white bg-black rounded-full border-[1.8px] border-transparent"
                >
                  Log In
                </Link>
                <Link
                  to="/auth"
                  className="px-6 max-md:mt-3 py-[6px] max-md:w-full font-medium hover:border-white bg-black rounded-full hover:border-[1.8px] border-[1.5px] border-gray-50 border-opacity-45"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
