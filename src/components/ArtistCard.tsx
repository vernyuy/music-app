import React from "react";
import { useNavigate } from "react-router-dom";
interface artistProps {
  artist: {
    image: string;
    name: string;
    id: number;
  };
  gradient: string;
  isFullWidth: boolean;
}

const ArtistCard: React.FC<artistProps> = ({
  artist,
  gradient,
  isFullWidth,
}) => {
  const navigate = useNavigate();
  const stripePayment = async (id: number) => {
    navigate(`/artist/${id}`);
    console.log("artist-clicked", artist);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="600"
      className={`flex-shrink-0 p-4 snap-center rounded-xl hover:cursor-pointer ${
        isFullWidth
          ? "w-full"
          : "sm:w-1/2 md:w-[calc((100%-32px)/2.5)] lg:w-[calc((100%-32px)/3.5)]"
      }`}
      style={{ background: gradient }}
      onClick={() => stripePayment(artist.id)}
    >
      <div className="shadow-lg overflow-hidden">
        <img
          src={artist.image}
          alt="artist"
          className="w-full h-80 rounded-xl object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center font-bold artist-title uppercase text-2xl md:text-3xl pb-2 pt-4">
            <h3>{artist.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
