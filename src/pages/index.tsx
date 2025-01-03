import Carousel from "../components/Carousel";
import PayWhatYouWant from "../components/PayWhatYouWant";
import { flags, imageUrls } from "../assets/constants";
import { Link } from "react-router-dom";
import DownloadComp from "../components/DownloadComp";
import Artists from "../components/Artists";
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const calcAnimationDelay = (index: number, length: number) => {
    const delay = ((100 * (length - index)) / length) * -1;
    return `${delay}s`;
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12 md:pt-40 px-8 w-full bg-cover bg-top bg-[url('https://framerusercontent.com/images/rBVjyPoC7PBsJAawr0Prom5k0.png')]">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="700"
              className="heading text-3xl md:text-4xl lg:text-6xl uppercase"
            >
              Buy The Art <br />
              From The Artist
            </h1>
            <p
              data-aos="zoom-in-up"
              className="text-md md:text-xl pt-4 md:pt-8"
            >
              Get access like never before.
            </p>

            <div className="w-full flex justify-center py-10">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="700"
                className="flex items-center gap-4"
              >
                <Link
                  to="/"
                  className="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] py-2.5 font-bold md:font-medium hover:border-gray-500 rounded-full border-[1.8px] border-transparent"
                >
                  For Artists
                </Link>
                <Link
                  to="/explore"
                  className="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] hover:border-red-500 py-2.5 font-bold md:font-medium border-white rounded-full border-[1.8px] border-transparent"
                >
                  Explore
                </Link>
              </div>
            </div>

            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="relative w-full h-full flex justify-center"
            >
              <div className="h-full rounded-lg overflow-hidden">
                <img
                  className="w-[250px] md:w-[400px]"
                  src="https://framerusercontent.com/images/psyiUOuYoXODyqf1xisxzopqs.png"
                  alt="Iphone"
                />
              </div>

              <div
                data-aos="zoom-in-up"
                className="absolute top-[25%] left-[-10px] md:left-[-70px] lg:left-20 bg-[#131313] rounded-lg opacity-100 py-3.5 px-4 lg:px-6 w-[200px] lg:w-[250px] animate-slow-move"
              >
                <div className="w-full flex items-center gap-3">
                  <img
                    src="https://framerusercontent.com/images/GXhDCVwortYx7SFrIPCSmkgvDw.jpeg"
                    className="object-cover object-center rounded-full h-10 w-10 lg:h-14 lg:w-14"
                  />
                  <p className="text-white max-lg:text-xs leading-tight text-start font-semibold">
                    I love you all so much, thank you for all your love.! ❤️❤️
                  </p>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="absolute top-[10%] -right-[10px] md:-right-[50px] lg:right-20 bg-[#131313] rounded-lg opacity-100 py-3.5  px-4 lg:px-6 w-[180px] lg:w-[250px] animate-slow-move2"
              >
                <div className="flex items-center justify-between">
                  <div className="w-full flex items-center gap-2">
                    <img
                      src="https://framerusercontent.com/images/GXhDCVwortYx7SFrIPCSmkgvDw.jpeg"
                      className="object-cover object-center rounded-lg h-10 w-10 lg:h-14 lg:w-14"
                    />
                    <p className="text-white max-lg:text-xs leading-tight text-start font-semibold">
                      #3 Cule Viaje
                    </p>
                  </div>

                  <div className="flex flex-col justify-between max-lg:w-[2px] w-[3px] cursor-pointer rotate-90">
                    <span className="block w-5 h-[3px] bg-white rounded"></span>
                    <span className="block w-5 h-[3px] bg-white rounded mt-[5px]"></span>
                  </div>
                </div>

                <div className="pt-3 relative">
                  <div className="w-full h-[3px] bg-gray-500 rounded-full absolute"></div>
                  <div className="h-[3px] bg-white rounded-full absolute w-20"></div>
                </div>
              </div>

              <div
                data-aos="zoom-in-up"
                className="absolute bottom-[30%] max-w-screen-lg bg-[#131313] rounded-lg opacity-100 px-4 lg:px-8 py-5"
              >
                <div className="rounded-lg opacity-100 ">
                  <div className="rounded-lg opacity-100">
                    <div className="rounded-lg opacity-100 flex gap-3">
                      <a
                        href="https://apps.apple.com/us/app/even-music-and-access/id6479705446"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-lg overflow-hidden h-10 lg:h-12"
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
                        className="relative rounded-lg overflow-hidden h-10 lg:h-12"
                      >
                        <img
                          src="https://framerusercontent.com/images/M0Lx5qMjdgWmen2bj3Qn0XBAtjI.png"
                          alt="Google Play Store"
                          className="block w-full h-full rounded-lg object-cover"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start flex-shrink-0 opacity-50 ">
                    <p className="text-white text-sm leading-tight pt-3 max-md:text-center">
                      *No credit card required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rewarded Section */}
      <div className="px-4 pt-24 md:pt-32">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="700"
              className="heading text-2xl md:text-3xl lg:text-5xl uppercase"
            >
              Get <br className="max-md:block hidden" />
              Rewarded <br />
              With Access
            </h1>
            <p data-aos="zoom-in-up" className="text-xl pt-7">
              Connect with your favorite artists and other fans.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          className="md:ml-5 lg:ml-32 pt-10 md:pt-16"
        >
          <Carousel />
        </div>

        <div className="overflow-hidden">
          <div className="marquee p-4 text-5xl tracking-[50px] py-24 md:py-52 whitespace-nowrap">
            LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN
          </div>
        </div>

        <PayWhatYouWant />

        <DownloadComp />

        <Artists />

        {/* Country Section */}

        <div className="py-12 md:py-16">
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
            className="heading text-center uppercase text-xl md:text-3xl -mb-7 md:-mb-5"
          >
            TEAM EVEN Proudly Made In
          </h1>
          <div
            data-aos="fade-up"
            className="wrapper2 bg-[#131313] flex justify-center items-center"
          >
            {flags.map((url, index) => (
              <div
                key={index}
                className="item2 flex justify-center items-center"
                style={{
                  animationDelay: calcAnimationDelay(index, flags.length),
                }}
              >
                <div className="rounded-full bg-black p-2 flex justify-center items-center border border-gray-700">
                  <img
                    src={url}
                    alt={`Image ${index}`}
                    className="rounded-full h-8 w-8 ring-black"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="wrapper">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="item"
              style={{
                animationDelay: calcAnimationDelay(index, imageUrls.length),
              }}
            >
              <img src={url} alt={`Image ${index}`} className="rounded-xl" />
            </div>
          ))}
        </div>

        <div
          id="testimonials"
          className="pt-24 w-full px-2 flex justify-center"
        >
          <div className="w-full max-w-screen-xl ">
            {/* Section Title */}
            <div className="text-center mb-12 w-full flex gap-4">
              <h2
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-4xl font-bold text-gray-400 heading"
              >
                FAQ
              </h2>
              <div className="w-full hidden md:block h-[2px] bg-gray-800 mx-auto mt-4"></div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-md:space-y-4 sm:gap-4 grid md:grid-cols-3 gap-8 items-start">
              {/* FAQ Items */}
              {[
                {
                  title: "What is EVEN?",
                  duration: 500,
                  content: (
                    <>
                      <p>
                        EVEN is more than just a platform; it's a community that
                        thrives on the direct connection between artists and
                        their fans. It revolutionizes the way fans can support
                        their favorite artists and how artists can give back to
                        their most loyal fans.
                      </p>
                      <p>
                        When you purchase a release on EVEN, you're not just
                        buying music – you're gaining early access to an
                        artist's creative work. This could include their latest
                        music, exclusive content, first dibs on tour tickets,
                        merchandise, and much more.
                      </p>
                    </>
                  ),
                },
                {
                  title: "How does EVEN work?",
                  duration: 1000,
                  content: (
                    <>
                      <p>
                        EVEN operates with the aim of fostering a direct and
                        rewarding relationship between artists and fans. Here's
                        how it works:
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Explore the Catalogue:</strong> Browse through
                          a wide variety of releases from your favorite artists.
                        </li>
                        <li>
                          <strong>Purchase Releases:</strong> Buy directly on
                          the platform and support your favorite artists.
                        </li>
                        <li>
                          <strong>Gain Exclusive Access:</strong> Enjoy early
                          access to music, merchandise, tour tickets, and more.
                        </li>
                      </ol>
                    </>
                  ),
                },
                {
                  title: "How do artists benefit?",
                  duration: 800,
                  content: (
                    <>
                      <p>
                        The future of music is direct. EVEN equips artists with
                        the tools and resources to make their music available to
                        fans while taking ownership of that relationship.
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Set the price for their art.</li>
                        <li>Decide how to reward their fans.</li>
                        <li>Get paid daily!</li>
                        <li>Own and export their data easily.</li>
                      </ul>
                    </>
                  ),
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration={faq.duration}
                  className="flex flex-col items-start gap-3"
                >
                  {/* Title */}
                  <div className="">
                    <h5 className="text-xl heading md:text-3xl font-bold text-gray-700">
                      {faq.title}
                    </h5>
                  </div>

                  {/* Content */}
                  <div className="text-gray-400 space-y-4">{faq.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
