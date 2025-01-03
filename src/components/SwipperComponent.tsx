import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { artists } from "../assets/constants";

const SwipperComponent: React.FC = () => {
  return (
    <div
      data-aos="flip-right"
      data-aos-offset="100"
      className="w-full h-[45vh] md:h-[50vh] mt-10 flex justify-center px-8"
    >
      <div className="w-full max-w-screen-lg p-5 relative border-red-600 border-2 rounded-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            renderBullet: (className) =>
              `<span class='${className} bg-red-700'></span>`,
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full flex justify-center overflow-hidden"
        >
          {artists.map((artist, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full relative h-full bg-cover bg-center rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer "
                style={{ backgroundImage: `url(${artist.image})` }}
              >
                <div className="absolute bottom-5 w-full">
                  <p className="uppercase heading text-xl text-center md:text-4xl text-green-500 ">
                    {artist.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute -left-5 lg-left-12 xl:-left-14 top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-5"
          >
            <path
              fill="currentColor"
              d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
            />
          </svg>
        </div>
        <div className="custom-next absolute -right-5 lg:-right-12 xl:-right-14  top-1/2 transform -translate-y-1/2 bg-black text-white w-12 h-12 flex items-center justify-center rounded-full cursor-pointer z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SwipperComponent;
