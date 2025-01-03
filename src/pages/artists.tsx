import React, { useEffect } from "react";
import { artists, gradients } from "../assets/constants";
import ArtistCard from "../components/ArtistCard";
import SwipperComponent from "../components/SwipperComponent";

// Functional component using React.FC
const Artists: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="w-full  pt-12 md:pt-52">
      <div className="w-full">
        <div className="w-full px-8 flex justify-center">
          <div className="text-center">
            <h1
              data-aos="zoom-in-up"
              data-aos-duration="700"
              className="heading text-3xl md:text-4xl lg:text-6xl uppercase"
            >
              Artists
            </h1>
            <p data-aos="zoom-in-up" className="text-xl pt-7">
              Top 6 most popular artists
            </p>
          </div>
        </div>

        <SwipperComponent />

        <div className="flex justify-center">
          <p className="text-3xl md:text-5xl pt-16 md:pt-32 uppercase heading text-center flex items-center ">
            See All Artists
          </p>
        </div>

        <div className="w-full flex items-center justify-center px-2 pt-14 md:pt-20">
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
            {artists.map((artist, index) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                gradient={gradients[index]}
                isFullWidth={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
