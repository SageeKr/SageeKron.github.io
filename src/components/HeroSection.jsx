import React, { useEffect, useState } from 'react';
import Typing from './Typing';
import downArrow from '../assets/down-arrow-icon.png'


const HeroSection = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeStart = 290; // Start fading when scrolling past this point (in pixels)
      const fadeEnd = 350; // Fully faded at this point (in pixels)
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
      top: window.scrollY + 560, // Scrolls down by 500px from the current position
      behavior: 'smooth', // Enables smooth scrolling
    });
  };
  

  return (
    <div
      className="text-white py-24 pt-72 mb-20 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight font-montserrat">Sagee Kron</h1>
        <p className="my-4 text-lg md:text-xl font-open-sans">Dedicated to transforming data into actionable insights.<br />Explore my latest projects and works in the world of data.</p>
        <Typing className="my-4 text-3xl font-montserrat" />
        <div
          onClick={scrollDown}
           className="inline-block focus:outline-none w-16 mt-4 focus:shadow-outline cursor-pointer"
        >
         <img src={downArrow} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
