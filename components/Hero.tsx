
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageUrl = "https://i.postimg.cc/DyWfrzY6/30248e90-d46a-41cb-bc5f-05f5f10b8ad6.png";

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
  }, [imageUrl]);

  return (
    <div 
      className={`relative rounded-xl overflow-hidden h-[400px] flex items-center justify-center text-center text-white p-8 transition-colors duration-500 ${!isLoaded ? 'bg-gray-200 dark:bg-gray-700 animate-pulse' : ''}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
            backgroundImage: `url('${imageUrl}')`,
            opacity: isLoaded ? 1 : 0,
        }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight">Pulsz: #1 Social Casino</h1>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
        Daily Coin Rewards abd Over 1000 Free casino-style games
        </p>
        <button className="mt-8 px-8 py-3 text-lg font-semibold font-display tracking-wide text-white bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] rounded-xl hover:opacity-90 transition-transform hover:scale-105">
          Register
        </button>
      </div>
    </div>
  );
};

export default Hero;