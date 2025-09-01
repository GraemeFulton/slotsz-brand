import React, { useState } from 'react';
import { StylizedECGIcon4 } from './icons';

const DealsHero: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="relative overflow-visible bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-800">
      
      <div 
        className="absolute inset-0 rounded-br-2xl pointer-events-none bg-[radial-gradient(circle_at_100%_100%,#fe139c80_0%,#fe139c80_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb880_0%,#c71cb880_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c33_0%,#fe139c33_16%,transparent_18%)] dark:bg-[radial-gradient(circle_at_100%_100%,#fe139c99_0%,#fe139c99_4%,transparent_6%),radial-gradient(circle_at_100%_100%,#c71cb899_0%,#c71cb899_10%,transparent_12%),radial-gradient(circle_at_100%_100%,#fe139c40_0%,#fe139c40_16%,transparent_18%)] opacity-50"
        aria-hidden="true"
      ></div>
      <div 
        className="absolute inset-0 rounded-br-2xl bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.1)_0%,_transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_80%_at_100%_100%,_rgba(254,19,156,0.15)_0%,_transparent_50%)] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute top-[16px] right-[40px] flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
        <StylizedECGIcon4 className="h-[250px] text-primary opacity-40 dark:opacity-40" />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-12">
          <div className="inline-block bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-800 text-base font-medium px-2 py-0.5 rounded-xl">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Offer
            </span>
          </div>
          <h1 className="font-display font-semibold text-gray-800 dark:text-white text-4xl lg:text-5xl mt-6 leading-tight tracking-tight">
            200% extra gold coins welcome offer
          </h1>
          <p className="mt-4 text-2xl text-gray-500 dark:text-neutral-400">
            400,000 gold coins, plus free purchase benefits today 
          </p>
          <button className="mt-8 bg-[linear-gradient(90deg,#1AAE42,#049347)] text-white font-display font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity text-base tracking-wide">
            Accept Offer Now
          </button>
        </div>
        <div className="relative h-64 md:h-full min-h-[250px]">
          {!isImageLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 animate-pulse"></div>}
          <img
            src="https://i.postimg.cc/8z7HgxPw/17a88654-b92d-4862-a14c-ba77f3fe9870.png"
            alt="Welcome offer with gold coins and prize tickets"
            className={`absolute bottom-0 max-w-[fit-content] -right-[100px] -mb-[8px] h-[100%] w-auto md:h-[115%] transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default DealsHero;
