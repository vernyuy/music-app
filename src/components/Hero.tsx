

import { useEffect } from 'react';
import './hero.css'

const Hero = () => {
   // Trigger animations when the component is mounted
   useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'transform', 'translate-y-0');
      }, index * 300); // Staggered animation
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-32 px-6 lg:px-16 animate-slide-in">
      {/* Parallax Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 opacity-60 bg-fixed animate-bg-change" style={{
          backgroundImage: 'url("https://images.ctfassets.net/bdyhigkzupmv/3TMIM5OQpl2VcRbfMdDrU3/3e095e3205d27334055e1006b4a1bc63/randb.webp?fit=fill&w=500&h=300")', // Replace with your image URL
          backgroundSize: 'cover', // Ensures the image covers the whole area
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          backgroundBlendMode: 'overlay', // Blend the gradient with the image
        }}></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-6 animate-fade-in opacity-0 transform translate-y-12 scale-90"
        >
          Unleash Your Sound, <span className="text-white">Shop the Best Music Deals</span>
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium mb-8 max-w-3xl mx-auto animate-fade-in opacity-0 transform translate-y-12"
        >
          Discover exclusive discounts on premium music gear, instruments, and accessories. Elevate your sound with the best brands today!
        </p>

        {/* Call-to-action buttons */}
        <div className="flex justify-center space-x-6 flex-wrap gap-4">
          {/* Shop Now button */}
          <a
            href="#shop-now"
            className="bg-pink-500 text-black py-2 px-7 rounded-full text-lg font-semibold tracking-wide uppercase shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-2 hover:bg-orange-400 hover:shadow-xl animate-fade-in opacity-0 translate-y-12"
          >
            Shop Now
          </a>
          {/* Learn More button */}
          <a
            href="#learn-more"
            className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full text-lg font-semibold tracking-wide uppercase transition duration-300 ease-in-out transform hover:scale-110 hover:rotate-2 hover:bg-white hover:text-black animate-fade-in opacity-0 translate-y-12"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Animated Soundwave Illustration */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-0 h-24 bg-pink-500 opacity-50 animate-wave"></div> */}
    </section>
  );
};

export default Hero;
