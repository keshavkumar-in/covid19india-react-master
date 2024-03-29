import React from 'react';
import {Zoom} from 'react-slideshow-image';

const images = [
  '/slider/slide_1.webp',
  '/slider/slide_2.webp',
  '/slider/slide_3.webp',
];

const zoomInProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 1.5,
  arrows: true,
};

const Banner = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <img
            key={index}
            style={{width: '100%'}}
            src={each}
            alt="COVID-19 Symptoms, Precaution, Myths & Truths"
          />
        ))}
      </Zoom>
    </div>
  );
};
export default Banner;
