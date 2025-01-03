import React from "react";
import { Link } from "react-router-dom";

const PayWhatYouWant: React.FC = () => {
  const paymentIcons = [
    {
      src: "https://framerusercontent.com/images/hQOrXnaaLng4bEC4b6AjGYeHnoY.png",
      alt: "Mastercard",
    },
    {
      src: "https://framerusercontent.com/images/VEFmOMVNTiThXqGPclrHd7muQ8.png",
      alt: "Visa",
    },
    {
      src: "https://framerusercontent.com/images/r3DfuZfdis4hZdnTspjZEZqRog.png",
      alt: "American Express",
    },
    {
      src: "https://framerusercontent.com/images/dXLRjFAJmQaqNVLCo79IFRIx088.png",
      alt: "Cash App",
    },
    {
      src: "https://framerusercontent.com/images/dycvfQiaTm21dIXFiRFzeKnP1m8.png",
      alt: "Klarna",
    },
    {
      src: "https://framerusercontent.com/images/XVPORM7MeBayN9sE4VOqw344Fs.png",
      alt: "Apple Pay",
    },
    {
      src: "https://framerusercontent.com/images/oJejfJYc4auBfyNOYcKzNzPvQg.png",
      alt: "Google Pay",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl px-2 py-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Left Section (Text and Icons) */}
            <div className="flex-1">
              {/* Title Section */}
              <div className="text-3xl md:text-5xl max-md:text-start font-bold leading-tight text-center md:text-left heading uppercase">
                <h2 data-aos="zoom-in-up" data-aos-duration="700">
                  Pay What <br className="hidden md:inline" />
                  You Want,
                </h2>
                <h2
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                  className="mt-3"
                >
                  Pay How <br className="hidden md:inline" />
                  You Want.
                </h2>
              </div>

              {/* Description Section */}
              <div
                data-aos="zoom-in-up"
                data-aos-duration="900"
                className="mt-4 font-medium"
              >
                <p className="mb-2 ">
                  EVEN makes it easy to buy the art directly from your favorite
                  artists.
                </p>
                <p>
                  We support 22 global payment methods, over 135 currencies, and
                  flexible payment options, including:
                </p>
              </div>

              {/* Payment Icons Section */}
              <div data-aos="zoom-in-up" className="mt-8 flex flex-wrap gap-4">
                {paymentIcons.map((icon) => (
                  <div
                    key={icon.alt}
                    className="flex items-center justify-center px-10 py-2 bg-[#131313] rounded-lg"
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="h-7 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section (Video) */}
            <div className="flex-1 max-md:pt-10">
              <video
                src="https://framerusercontent.com/assets/AvG3aTdw1fT08jNhfCykFCEyec.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full rounded-2xl"
                poster="https://framerusercontent.com/images/nFJVnt8czEbQpZZq3XHiMPORw.png"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-5 md:mt-52">
        <div className="w-full max-w-screen-xl px-2 py-8">
          <div className="flex flex-col md:flex-row gap-20 md:gap-12 items-center">
            {/* Left Section (Video)  */}
            <div className="flex-1 rounded-2xl">
              <video
                src="https://framerusercontent.com/assets/EQsAYNi32IIuM0WdWLaqa9eCEE.mp4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full rounded-2xl"
                poster="https://framerusercontent.com/images/IcjO5SqIYPyO2GVNiT1LowYghEg.png"
              ></video>
            </div>

            {/* Right Section (Text and Icons) */}
            <div className="flex-1 max-md:order-first ">
              {/* Title Section */}
              <div className="text-3xl md:text-5xl max-md:text-start font-bold leading-tight text-center md:text-left heading uppercase">
                <h2 data-aos="zoom-in-up" data-aos-duration="500">
                  Get Closer <br className="hidden md:inline" /> Than Ever.
                </h2>
              </div>

              {/* Description Section */}
              <div className="mt-4 font-medium">
                <p
                  data-aos="zoom-in-up"
                  data-aos-duration="700"
                  className="mb-2 "
                >
                  With EVEN, fans can get closer to their favorite artists than
                  ever before. Take a yoga class together, get a private
                  FaceTime call or even get flown out to perform with them.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="800">
                  Your support means you get proximity like never before.
                </p>

                <div data-aos="zoom-in-up" className="mt-14 ">
                  <Link to="/explore" className="w-full bg-red-500">
                    <div className="md:px-10 text-center max-md:w-full w-40 text-xl md:text-2xl bg-[#131313] hover:border-red-500 py-2.5 font-bold md:font-medium border-white rounded-full border-[1.8px] border-transparent ">
                      Explore
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayWhatYouWant;
