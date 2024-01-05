// CustomCarousel.js

import React, { useState, useEffect } from 'react';
import '../assets/CustomCarousel.css'
const CustomCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalImages = images.length;
  const itemsToShow = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Adjust the interval according to your preference in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex, totalImages]);

  const renderImages = () => {
    const visibleImages = [];

    for (let i = 0; i < itemsToShow; i++) {
      const indexToShow = (activeIndex + i) % totalImages;
      visibleImages.push(
        <div key={indexToShow} className="carousel-item">
          <img  key={indexToShow} src={images[indexToShow]} alt={`Image ${indexToShow}`} />
        </div>
      );
    }

    return visibleImages;
  };

  return (
    <div className="custom-carousel-container">
      <div className="carousel-wrapper">
        {renderImages()}
      </div>
    </div>
  );
};

export default CustomCarousel;
