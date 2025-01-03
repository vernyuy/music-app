const DownloadComp = () => {
  return (
    <div
      data-aos="fade-left"
      className="bg-transparent opacity-100 rounded-lg relative flex justify-center items-center max-md:my-16 md:mt-40"
    >
      <div className="border-2 border-solid max-w-screen-lg border-gray-900 bg-[#131313] rounded-lg opacity-100 p-5">
        <div className="rounded-lg opacity-100 md:flex items-center gap-8">
          <div className="rounded-lg opacity-100 ">
            <div className="flex flex-col justify-start flex-shrink-0 opacity-100 outline-none">
              <h4 className="max-md:text-center">
                <p className="text-xl md:text-4xl uppercase heading leading-[20px] md:leading-[35px]">
                  Download <br />
                  the App!
                </p>
              </h4>
            </div>
            <div className="rounded-lg opacity-100 pt-5">
              <div className="rounded-lg opacity-100 flex gap-3 md:gap-8">
                <a
                  href="https://apps.apple.com/us/app/even-music-and-access/id6479705446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg overflow-hidden min-h-4 md:min-h-12"
                >
                  <img
                    src="https://framerusercontent.com/images/k89AFTelZbh40qvdkgTqgFITws.png"
                    alt="Apple App Store"
                    className="block w-full h-full rounded-lg object-cover"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.even.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative rounded-lg overflow-hidden min-h-4 md:min-h-12"
                >
                  <img
                    src="https://framerusercontent.com/images/M0Lx5qMjdgWmen2bj3Qn0XBAtjI.png"
                    alt="Google Play Store"
                    className="block w-full h-full rounded-lg object-cover"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start flex-shrink-0 opacity-50 max-md:pb-5">
              <p className="text-white text-sm leading-tight pt-2 max-md:text-center">
                *No credit card required.
              </p>
            </div>
          </div>
          <div className="rounded-lg opacity-100 shadow-sm w-dull ">
            <img
              src="https://framerusercontent.com/images/816ZpGz6BVUpiK5IbsDN2qasc4.jpg"
              alt="Download App Illustration"
              className="block w-full h-full rounded-2xl object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadComp;
