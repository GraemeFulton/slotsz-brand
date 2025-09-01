

import React, { useState, useEffect } from 'react';
import type { Game } from '../types';
import { CloseIcon, InfoIcon, LightningIcon, PhoneLandscapeIcon, PhonePortraitIcon } from './icons';

interface GameDetailModalProps {
  game: Game;
  onClose: () => void;
}

const InfoDetail: React.FC<{ label: string; value: string | React.ReactNode; info?: boolean; }> = ({ label, value, info = false }) => (
    <div className="bg-gray-50 dark:bg-neutral-800/50 p-3 rounded-lg text-center">
        <div className="flex items-center justify-center space-x-1">
            <h4 className="text-xs font-semibold text-gray-500 dark:text-neutral-400 uppercase tracking-wider">{label}</h4>
            {info && <InfoIcon className="w-3 h-3 text-gray-400" />}
        </div>
        <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-neutral-200 mt-1">{value}</p>
    </div>
);


const GameDetailModal: React.FC<GameDetailModalProps> = ({ game, onClose }) => {
    const [coinType, setCoinType] = useState<'GC' | 'SC'>('SC');
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);


  return (
    <div 
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-title"
    >
      <div 
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden animate-fade-in"
        >
          <button 
              onClick={onClose} 
              className="sm:hidden absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors z-10 p-1 bg-white/20 dark:bg-black/20 rounded-full"
              aria-label="Close dialog"
          >
            <CloseIcon className="w-6 h-6" />
          </button>

          <div className="relative w-full h-48 sm:h-64 bg-gray-200 dark:bg-neutral-800">
            {!isImageLoaded && <div className="absolute inset-0 animate-pulse"></div>}
            <img
              src={game.imageUrl}
              alt={game.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setIsImageLoaded(true)}
            />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
              <div className="text-center">
                  <h2 id="game-title" className="text-3xl font-bold font-display text-gray-900 dark:text-white">{game.title}</h2>
                  <p className="mt-2 text-gray-600 dark:text-neutral-400">Play this awesome game and win great prizes!</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                  <InfoDetail label="Top Prize" value="GC 8,373,000,000" />
                  <InfoDetail label="Min / Max" value="GC 50 / GC 500,000" info />
                  <InfoDetail label="Volatility" info value={
                      <span className="flex justify-center items-center text-orange-400 gap-0.5">
                          <LightningIcon className="w-5 h-5" />
                          <LightningIcon className="w-5 h-5" />
                          <LightningIcon className="w-5 h-5" />
                      </span>
                  } />
                  <InfoDetail label="Orientation" value={
                      <span className="flex justify-center items-center text-orange-400 gap-2">
                          <PhonePortraitIcon className="w-5 h-5" />
                          <PhoneLandscapeIcon className="w-5 h-5" />
                      </span>
                  } />
              </div>

              <div className="space-y-4">
                  <div className="bg-gray-100 dark:bg-neutral-800 rounded-full p-1 flex">
                      <button 
                          onClick={() => setCoinType('GC')}
                          className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors ${coinType === 'GC' ? 'bg-white dark:bg-neutral-700 text-gray-800 dark:text-white shadow' : 'text-gray-500'}`}
                      >
                          Gold Coins
                      </button>
                      <button 
                          onClick={() => setCoinType('SC')}
                          className={`w-1/2 py-2 text-sm font-semibold rounded-full transition-colors ${coinType === 'SC' ? 'bg-white dark:bg-neutral-700 text-gray-800 dark:text-white shadow' : 'text-gray-500'}`}
                      >
                          Sweepstakes Coins
                      </button>
                  </div>
                  
                  {coinType === 'GC' ? (
                      <button className="w-full bg-gradient-to-b from-yellow-400 to-orange-500 text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                          <span className="block text-xl font-bold tracking-wider">PLAY</span>
                          <span className="block text-xs font-semibold opacity-80">WITH GOLD COINS</span>
                      </button>
                  ) : (
                      <button className="w-full bg-[linear-gradient(90deg,#1AAE42,#049347)] text-white font-display rounded-xl py-3 text-center hover:opacity-90 transition-opacity">
                          <span className="block text-xl font-bold tracking-wider">PLAY</span>
                          <span className="block text-xs font-semibold opacity-80">WITH SWEEPSTAKES COINS</span>
                      </button>
                  )}
              </div>
          </div>
        </div>

        <button 
            onClick={onClose} 
            className="hidden sm:block absolute top-0 left-full ml-4 text-gray-300 hover:text-white transition-colors z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full"
            aria-label="Close dialog"
        >
          <CloseIcon className="w-8 h-8" />
        </button>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GameDetailModal;