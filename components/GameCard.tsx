

import React, { useState } from 'react';
import type { Game } from '../types';
import { InfoIcon, PulseIcon } from './icons';


interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasNew = game.tags.includes('new');
  const hasExclusive = game.tags.includes('exclusive');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${game.title}`}
      className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 w-[135px] flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-neutral-950 rounded-lg"
    >
      <div className="relative rounded-xl group-hover:shadow-2xl transition-shadow shadow-md overflow-hidden aspect-[2/3]">
        {!isLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-neutral-800 animate-pulse"></div>}
        <img
          src={game.imageUrl}
          alt={game.title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Tags */}
        <div className="absolute top-2 right-2 flex flex-col items-end space-y-1">
          {hasNew && (
              <span className="bg-accent text-white text-xs font-medium px-2 py-1 rounded-xl">New</span>
          )}
          {hasExclusive && (
              <div className="bg-white leading-loose border border-gray-200 dark:bg-neutral-900 dark:border-neutral-800 text-xs font-medium px-2 h-6 flex flex-col justify-center align-center rounded-xl">
                <span className="leading-loose bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Exclusive
                </span>
              </div>
          )}
        </div>

        {/* Info Icon on hover */}
        <div 
          aria-hidden="true"
          className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-xl p-1 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <InfoIcon className="w-5 h-5" />
        </div>
      </div>
      <div className="pt-2">
        <div className="flex items-center space-x-1.5">
            <PulseIcon className="w-4 h-4 text-primary" />
            <p className="text-xs text-gray-500 dark:text-neutral-300 font-medium"><span className="font-bold">{game.playingCount.toLocaleString()}</span> wins today</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;