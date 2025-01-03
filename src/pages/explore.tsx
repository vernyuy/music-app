import React, { useEffect } from "react";
import { musics, gradients } from "../assets/constants";
import CardComponent from "../components/CardComponent";
import SwipperComponent from "../components/SwipperComponent";

// Functional component using React.FC
const Explore: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full pt-12 lg:pt-52">
      <div className="w-full">
        <div className="w-full px-8 flex justify-center">
          <div className="text-center">
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="700"
              className="heading text-3xl md:text-4xl lg:text-6xl uppercase"
            >
              Explore
            </h1>
            <p data-aos="zoom-in-up" className="text-xl pt-7">
              Discover the hottest music releases of the year!
            </p>
          </div>
        </div>
        <SwipperComponent />

        <div className="flex justify-center">
          <p className="text-3xl md:text-5xl pt-16 md:pt-20 uppercase heading text-center flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-16 md:h-24 text-red-700"
            >
              <path
                fill="currentColor"
                d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"
              />
            </svg>
            Play list
          </p>
        </div>

        <div className="w-full flex items-center justify-center px-2 pt-14 md:pt-20">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
            {musics.map((artist, index) => (
              <>
                {artist.map((music, index2) => (
                  <CardComponent
                    key={`${index}${index2}`}
                    card={music}
                    gradient={gradients[index]}
                    isFullWidth={true}
                  />
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
