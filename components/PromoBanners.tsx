

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, StylizedECGIcon2,StylizedECGIcon3 } from './icons';

// Define the structure for a banner
interface Banner {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonClass: string;
  imageUrl: string;
  imageContainerClass: string;
  backgroundClass: string;
}

// Correct three-orb magenta gradient style from the brand guide
const magentaOrbGradient = 'bg-[radial-gradient(circle_at_100%_100%,#fe139c80_0%,#fe139c80_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb880_0%,#c71cb880_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c33_0%,#fe139c33_16%,transparent_18%)] dark:bg-[radial-gradient(circle_at_100%_100%,#fe139c99_0%,#fe139c99_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb899_0%,#c71cb899_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c40_0%,#fe139c40_16%,transparent_18%)]';

// A more subtle version of the magenta orb gradient
const magentaOrbGradient2 = 'bg-[radial-gradient(circle_at_100%_100%,#fe139c40_0%,#fe139c40_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb840_0%,#c71cb840_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c1A_0%,#fe139c1A_16%,transparent_18%)] dark:bg-[radial-gradient(circle_at_100%_100%,#fe139c50_0%,#fe139c50_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb850_0%,#c71cb850_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c20_0%,#fe139c20_16%,transparent_18%)]';

// Array of banner data
const banners: Banner[] = [
  {
    id: 1,
    title: '200% Coin Bonus!',
    description: 'Get extra gold coins on first purchase',
    buttonText: 'Visit Store',
    buttonClass: 'bg-gradient-to-b from-yellow-400 to-orange-500 text-white',
    imageUrl: 'https://i.postimg.cc/ZqDYcB82/Frame-33-1.png',
    imageContainerClass: 'h-[140px] bottom-0',
    backgroundClass: ''
  },
  {
    id: 2,
    title: 'Love Free Coins?',
    description: 'Join free promos every week',
    buttonText: 'Like on Facebook',
    buttonClass: 'bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] text-white',
    imageUrl: 'https://i.postimg.cc/k5Wdb9Pb/7701fe53-5790-4350-990b-c640caab8221-1.png',
    imageContainerClass: 'h-[168px] top-0 -mr-3',
    backgroundClass: magentaOrbGradient2
  },
  {
    id: 3,
    title: 'Love Free Coins?',
    description: 'Join free promos every week',
    buttonText: 'Follow on Instagram',
    buttonClass: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white',
    imageUrl: 'https://i.postimg.cc/jdC2JWgn/image-22.png',
    imageContainerClass: 'h-[160px] top-1',
    backgroundClass: magentaOrbGradient2
  }
];

const PromoBanners: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numBanners = banners.length;
  const visibleBanners = 2;

  const canScroll = numBanners > visibleBanners;
  const maxIndex = canScroll ? numBanners - visibleBanners : 0;

  const nextSlide = useCallback(() => {
    if (!canScroll) return;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [canScroll, maxIndex]);

  const prevSlide = () => {
    if (!canScroll) return;
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };
  
  useEffect(() => {
    if (canScroll) {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }
  }, [nextSlide, canScroll]);

  return (
    <div className="relative w-full overflow-hidden h-56 md:h-48 -mx-2 group">
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(calc(-${currentIndex * 100 / visibleBanners}%))` }}
        aria-live="polite"
      >
        {banners.map((banner) => (
          <div key={banner.id} className="w-1/2 shrink-0 px-2">
            <div className="relative w-full h-full bg-white dark:bg-neutral-900 overflow-hidden p-8 flex flex-col justify-between rounded-xl shadow-lg border border-gray-200 dark:border-neutral-800">
              <div 
                className={`absolute inset-0 pointer-events-none ${banner.backgroundClass}`}
                aria-hidden="true"
              ></div>
              <div className={`absolute z-10 right-12 ${banner.imageContainerClass}`}>
                <img src={banner.imageUrl} className="h-full" alt="" />
              </div>
              <div 
                className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.1)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.15)_0%,_transparent_50%)] pointer-events-none"
                aria-hidden="true"
              ></div>
              <div className="relative z-10">
                <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-gray-800 dark:text-neutral-200">{banner.title}</h2>
                <p className="text-gray-500 dark:text-neutral-400 font-medium mt-1">{banner.description}</p>
              </div>
              <button className={`relative z-10 self-start px-6 lg:px-8 font-semibold font-display py-3 rounded-xl text-base lg:text-lg hover:opacity-90 transition-transform hover:scale-105 ${banner.buttonClass}`}>
                {banner.buttonText}
              </button>
               {banner.id === 1 && (
                <div className="absolute -top-[30px] -right-[24px] flex items-center justify-center pointer-events-none" aria-hidden="true">
                  <StylizedECGIcon3 className=" h-[260px] text-primary opacity-50 dark:opacity-40" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {canScroll && (
        <>
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute top-1/2 left-6 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute top-1/2 right-6 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default PromoBanners;