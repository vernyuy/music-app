import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-black rounded-lg shadow mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex justify-center items-center">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link to="#" className="text-gray-500 ms-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.321 5.562a5 5 0 0 1-.443-.258a6.2 6.2 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943q.002.3-.008.595l-.004.073q0 .016-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604a3.2 3.2 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281s1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.18 7.18 0 0 0-5.532 1.62a7.6 7.6 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246c-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.9 7.9 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187c.359-.015 1.562 0 2.928-.647c1.515-.718 2.377-1.787 2.377-1.787a7.4 7.4 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59"
                />
              </svg>
              <span className="sr-only">Tiktok page</span>
            </Link>
            <Link to="#" className="text-gray-500 ms-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500 ms-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-50 border-opacity-50 sm:mx-auto lg:my-8" />
        <div className="w-full text-[#727377] md:flex justify-center md:justify-between items-center">
          <div className="md:order-2 max-md:flex justify-center max-md:w-full">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium md:mb-0">
              <li>
                <Link to="/explore" className="hover:underline me-4 md:me-6">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline me-4 md:me-6">
                  My Library
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline me-4 md:me-6">
                  For Artists
                </Link>
              </li>
            </ul>
          </div>

          <div className="max-md:flex justify-center max-md:w-full">
            <div className="text-sm flex items-center gap-3">
              <Link to="/">
                <img src={Logo} className="h-4" alt="Music app" />
              </Link>

              <div className="max-md:text-sm">
                COPYRIGHT © {new Date().getFullYear()}
                <Link to="" className="hover:underline hover:cursor-pointer">
                  Music app.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
