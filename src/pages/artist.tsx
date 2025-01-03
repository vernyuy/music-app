import React, { useEffect, useState } from "react";
import { musics, artists, gradients } from "../assets/constants";
import { useLocation, useParams } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import MessageComponent from "../components/MessageComponent";

const Artist: React.FC = () => {
  interface CardProps {
    id: number;
    name: string;
    image: string;
  }

  const location = useLocation();
  const [openChat, setOpenChat] = useState(false);
  const [artistId, setArtistId] = useState("0");
  const [currentArtist, setCurrentArtist] = useState<CardProps | null>(null);
  const { id } = useParams<{ id: string }>();

  // Set artistId only when id changes
  useEffect(() => {
    if (id) {
      setArtistId((parseInt(id) - 1).toString());
      setCurrentArtist(artists[parseInt(artistId)]);
    }
  }, [id, artistId]);

  useEffect(() => {
    setOpenChat(location.state?.openChat);
  }, [location.state?.openChat, openChat]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="w-full pt-12 md:pt-40">
        <div className="w-full">
          <div className="w-full px-8 flex justify-center items-center">
            <div className="border-red-800 border-[3px] p-3 md:p-5 max-w-screen-lg w-full rounded-3xl">
              <div
                data-aos="fade-right"
                className={`w-full max-w-screen-lg  rounded-3xl flex items-center py-16 md:py-32 bg-cover bg-center relative`}
                style={{
                  backgroundImage: `url(${currentArtist?.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="w-full flex justify-center relative z-10">
                  <div className="text-center">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="700"
                      className="heading text-3xl mb-5 md:text-4xl lg:text-6xl uppercase text-white "
                    >
                      {currentArtist?.name}
                    </h1>

                    <div data-aos="fade-up" className="flex justify-center">
                      <button
                        onClick={() => setOpenChat(true)}
                        className="px-8 lg:px-12 text-sm heading uppercase bg-black bg-opacity-55 max-w-xs py-1.5 md:py-[12px] lg:font-medium border-red-700 rounded-full border-[1.8px]"
                      >
                        Open Chat
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          <div className="w-full flex items-center justify-center pt-14 md:pt-20">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-6">
              {musics[parseInt(artistId)]?.map((artist, index) => (
                <CardComponent
                  key={index}
                  card={artist}
                  gradient={gradients[index]}
                  isFullWidth={true}
                />
              ))}
            </div>
          </div>
        </div>

        {<p className="p-40">Chat is open: {openChat.toString()}</p>}
        <MessageComponent chatOpen={openChat} artistId={artistId} />
      </div>
    </>
  );
};

export default Artist;
