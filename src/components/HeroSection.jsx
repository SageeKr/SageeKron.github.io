import React, { useEffect, useState } from 'react';
import Typing from './Typing';
import downArrow from '../assets/down-arrow-icon.png';
import sageePhoto from '../assets/SageeKron.jpg'; // Import the photo

const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 300; // Start fading when scrolling past this point (in pixels)
      const fadeEnd = 400; // Fully faded at this point (in pixels)
      const fadeRange = fadeEnd - fadeStart;

      let newOpacity = 1;
      if (scrollY > fadeStart) {
        newOpacity = 1 - (scrollY - fadeStart) / fadeRange;
        if (newOpacity < 0) {
          newOpacity = 0;
        }
      }
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + 700, // Scrolls down by 560px from the current position
      behavior: 'smooth', // Enables smooth scrolling
    });
  };

  return (
    <div
      className="text-white py-16 pt-48 mb-20 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="max-w-4xl mx-auto text-center">
              {/* Profile Photo */}
              <div className="flex justify-center mb-6">
          <img 
            src={sageePhoto} 
            alt="Sagee Kron" 
            className="w-40 h-40 rounded-full border-4 border-white shadow-xl transform hover:scale-105 transition-transform duration-300" 
          />
        </div>
        {/*Name Section */}
        <div className="flex flex-col items-center justify-center md:flex-row">
         
          <h1 className="text-5xl md:text-9xl font-bold font-montserrat tracking-wider">Sagee Kron</h1>
        </div>
        {/*About me Section */}
        <p className="my-5 text-lg md:text-2xl font-open-sans">
          Dedicated to transforming data into actionable insights.
          <br />
          Explore my latest projects and works in the world of data.
        </p>
        
        <Typing className="my-4 text-3xl font-montserrat" />
        
        <div
          onClick={scrollDown}
          className="inline-block focus:outline-none w-16 mt-4 focus:shadow-outline cursor-pointer hover:scale-110"
        >
          <img src={downArrow} alt="Scroll Down" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
