import Carousel from "../components/Carousel";
import PayWhatYouWant from "../components/PayWhatYouWant";
import { imageUrls } from "../assets/constants";

function Index() {
  const calcAnimationDelay = (index: number) => {
    const delay = ((30 * (16 - (index + 1))) / 16) * -1;
    return `${delay}s`;
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12 md:pt-40 px-8 w-full bg-cover bg-top bg-[url('https://framerusercontent.com/images/rBVjyPoC7PBsJAawr0Prom5k0.png')]">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1 className="heading text-3xl md:text-4xl lg:text-6xl uppercase">
              Buy The Art <br />
              From The Artist
            </h1>
            <p className="text-md md:text-xl pt-4 md:pt-8">
              Get access like never before.
            </p>

            <div className="w-full flex justify-center py-10">
              <div className="flex items-center gap-4">
                <a
                  href="/"
                  className="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] py-2.5 font-bold md:font-medium hover:border-gray-500 rounded-full border-[1.8px] border-transparent"
                >
                  For Artists
                </a>
                <a
                  href="/explore"
                  className="md:px-10 max-md:w-40 text-xl md:text-2xl bg-[#131313] hover:border-red-500 py-2.5 font-bold md:font-medium border-white rounded-full border-[1.8px] border-transparent"
                >
                  Explore
                </a>
              </div>
            </div>

            <div className="relative w-full h-full flex justify-center">
              <div className="h-full rounded-lg overflow-hidden">
                <img
                  className="w-[250px] md:w-[400px]"
                  src="https://framerusercontent.com/images/psyiUOuYoXODyqf1xisxzopqs.png"
                  alt="Iphone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rewarded Section */}
      <div className="px-8 pt-16 md:pt-32">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1 className="heading text-2xl md:text-3xl lg:text-5xl uppercase">
              Get <br className="max-md:block hidden" />
              Rewarded <br />
              With Access
            </h1>
            <p className="text-xl pt-7">
              Connect with your favorite artists and other fans.
            </p>
          </div>
        </div>
        <div className="md:ml-5 lg:ml-32 pt-10 md:pt-16">
          <Carousel />
        </div>

        <div className="p-4 text-5xl tracking-[50px] py-24">
          LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN • LET'S GET EVEN
        </div>

        <PayWhatYouWant />

        {/* Image Section */}
        <div className="wrapper">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="item"
              style={{ animationDelay: calcAnimationDelay(index) }}
            >
              <img src={url} alt={`Image ${index}`} className="rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
