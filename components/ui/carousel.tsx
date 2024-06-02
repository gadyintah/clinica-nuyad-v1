import React, { useState, useEffect } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'Clinica Nuyad Guinobatan: (0915-872-2655)',
    'Clinica Nuyad Guinobatan: (0915-872-2655)',
    'Clinica Nuyad ACE Hospital: (0915-872-2655)'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="carousel rounded-box overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item w-full flex-none">
            <span className="font-medium text-black hover:text-gray-900 flex items-center transition duration-1000 ease-in-out">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
