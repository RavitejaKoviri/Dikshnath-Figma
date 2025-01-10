
"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemGroups, setItemGroups] = useState([]);

  const items = [
    {
      id: 1,
      src:"https://www.grafterr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FgoProducts.2cf79b68.webp&w=3840&q=75",
      alt: "Nature landscape",
      title: "Mountain Escape",
      path: "https://www.fininfocom.com/",
    },
    {
      id: 2,
      src:"https://www.grafterr.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhospitalityProducts.9393e64c.webp&w=1920&q=75",
      alt: "City skyline",
      title: "Urban Adventure",
      path: "https://www.fininfocom.com/",
    },
    {
      id: 3,
      src:"https://www.grafterr.com/homePageImages/homeNewImages/pointOfSale.webp",
      alt: "Mountain view",
      title: "Forest Journey",
      path: "https://www.fininfocom.com/",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww",
      alt: "City skyline",
      title: "Urban Adventure",
      path: "https://www.fininfocom.com/",
    },
    {
      id: 5,
      src:"https://www.grafterr.com/homePageImages/homeNewImages/OnlineDevice.webp",
      alt: "City skyline",
      title: "Urban Adventure",
      path: "https://www.fininfocom.com/",
    },
    {
      id: 6,
      src:"https://www.grafterr.com/homePageImages/homeNewImages/collectionDevice.webp",
      alt: "City skyline",
      title: "Urban Adventure",
      path: "https://www.fininfocom.com/",
    },
  ];

  // Group items based on screen size
  const getItemGroups = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      // Mobile: 1 card per slide
      return items.map((item) => [item]);
    } else if (screenWidth < 1024) {
      // Tablet: 2 cards per slide
      const groups = [];
      for (let i = 0; i < items.length; i += 2) {
        groups.push(items.slice(i, i + 2));
      }
      return groups;
    } else {
      // Laptop/Large: 3 cards per slide
      const groups = [];
      for (let i = 0; i < items.length; i += 3) {
        groups.push(items.slice(i, i + 3));
      }
      return groups;
    }
  };

  useEffect(() => {
    // Set initial item groups after component mounts
    setItemGroups(getItemGroups());

    const handleResize = () => {
      setItemGroups(getItemGroups());
      setCurrentIndex(0); // Reset to the first slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === itemGroups.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying, itemGroups.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === itemGroups.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? itemGroups.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto Carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Line Indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 z-10 mb-16">
        <div className="w-full h-1 bg-white rounded-full overflow-hidden">
          <div className="relative w-full h-5">
            {itemGroups.map((_, index) => (
              <div
                key={index}
                className="absolute top-0 h-full transition-all duration-300 bg-black cursor-pointer"
                style={{
                  width: `${100 / itemGroups.length}%`,
                  left: `${(100 / itemGroups.length) * index}%`,
                  opacity: index === currentIndex ? 1 : 0.3,
                }}
                onClick={() => goToSlide(index)}
                role="button"
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Slides */}
      <div className="relative flex justify-center mt-8">
        <div className="relative h-[400px] overflow-hidden rounded-xl w-full max-w-4xl">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {itemGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex-shrink-0 w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
              >
                {group.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="relative group rounded-lg overflow-hidden shadow-md bg-white"
                    onMouseEnter={handleMouseEnter}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                      <h2 className="text-black text-lg font-bold">{item.title}</h2>
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Control Buttons for Small and Medium Screens */}
      <div className="lg:hidden flex justify-center gap-4 mt-6 mb-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/20 text-white hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Control Buttons for Large Screens */}
      <div className="hidden lg:flex justify-center gap-4 mt-6 mb-8">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;











