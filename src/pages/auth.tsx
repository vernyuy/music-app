import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect, useState } from "react";
import { fetchAuthSession, signOut } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";

function Auth() {
  const [signIn, setSignIn] = useState(false);
  const resendButton = Array.from(
    document.querySelectorAll(".amplify-button.amplify-field-group__control")
  ).find(
    (button) => (button as HTMLElement).textContent?.trim() === "Resend Code"
  );

  if (resendButton) {
    (resendButton as HTMLElement).style.color = "#b3261e";
  }

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
    <div
      className={`w-full px-8 flex justify-center items-center  ${
        signIn
          ? "min-h-[62.9vh] flex justify-center items-center"
          : "min-h-screen pt-12 md:pt-32"
      }`}
    >
      <div className="w-full">
        <div className="w-full flex justify-center">
          {!signIn && (
            <div className="text-center">
              <h1 className="heading lg:text-xl uppercase">Welcome Back! </h1>
            </div>
          )}
        </div>

        <div
          className={`w-full flex items-center justify-center ${
            !signIn && "pt-14"
          }`}
        >
          <Authenticator>
            {({ user }) => (
              <main>
                <h1 className="heading lg:text-xl uppercase text-center pb-4">
                  User Info!
                </h1>
                <h1>Hello {user?.signInDetails?.loginId}</h1>
                <div className="flex justify-center w-full pt-10">
                  <button
                    className="amplify-button text-red-500 hover:text-red-700"
                    onClick={() => handleSignOut()}
                  >
                    Sign Out
                  </button>
                </div>
              </main>
            )}
          </Authenticator>
        </div>

        {!signIn && (
          <div className="text-[#727377] text-center pt-5">
            <p>© All Rights Reserved!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
