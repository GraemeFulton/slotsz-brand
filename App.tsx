

import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DealsHero from './components/DealsHero';
import PromoBanners from './components/PromoBanners';
import GameGrid from './components/GameGrid';
import Publishers from './components/Publishers';
import { newGames, exclusiveGames, topGames, publishers } from './constants';
import StyleGuide from './components/StyleGuide';
import { NewIcon, VerifyIcon, TopGamesIcon, StylizedECGIcon2 } from './components/icons';
import CategoryNav from './components/CategoryNav';

interface WavePatternProps {
  width: number;
  height: number;
  className?: string;
}

const WavePattern: React.FC<WavePatternProps> = ({ width, height, className }) => (
  <div
    className={`absolute -translate-x-1/2 pointer-events-none
      bg-[radial-gradient(circle,rgba(254,19,156,0.5)_0%,rgba(199,28,184,0.35)_10%,rgba(140,20,130,0.2)_30%,transparent_60%)] 
      dark:bg-[radial-gradient(circle,rgba(254,19,156,0.5)_0%,rgba(199,28,184,0.3)_20%,rgba(140,20,130,0.15)_40%,transparent_60%)] ${className || ''}`}
    style={{ width: `${width}px`, height: `${height}px` }}
  />
);

const JoltLines: React.FC = () => (
  <svg
    width="100%"
    height="200px"
    viewBox="0 0 1920 1080"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 -top-[10px] text-primary opacity-50 dark:opacity-60 pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="fade-down-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="60%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id="fade-down-mask">
        <rect width="1920" height="1080" fill="url(#fade-down-gradient)" />
      </mask>
    </defs>
    <g stroke="currentColor" strokeWidth="4" fill="none" mask="url(#fade-down-mask)">
      {/* Wider, more dramatic lines from top-left */}
      <path d="M-100,0 L500,540 l-30,40 L600,700" />
      <path d="M100,0 L600,540 l-20,20 L700,650" />
      <path d="M300,0 L700,540 l30,30 L800,720" />
      <path d="M500,0 L800,540 l-10,50 L900,750" />
      
      {/* Wider, more dramatic lines from top-right */}
      <path d="M2020,0 L1420,540 l30,40 L1320,700" />
      <path d="M1820,0 L1320,540 l20,20 L1220,650" />
      <path d="M1620,0 L1220,540 l-30,30 L1120,720" />
      <path d="M1420,0 L1120,540 l10,50 L1020,750" />
    </g>
  </svg>
);


const MainApp: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => (
  <div className="bg-white dark:bg-neutral-950 h-screen flex text-gray-800 dark:text-neutral-300 overflow-hidden">
    <Sidebar theme={theme} toggleTheme={toggleTheme} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        <WavePattern width={800} height={800} className="top-[10%] left-1/2 opacity-60 dark:opacity-60 -translate-y-1/2" />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-8">
          <WavePattern width={400} height={400} className="top-[944px] left-[12%] opacity-40 dark:opacity-30 -translate-y-1/2" />
          <StylizedECGIcon2
            aria-hidden="true"
            className="absolute top-[260px] right-[74px] h-[128px] text-primary pointer-events-none opacity-50 dark:opacity-40 hidden xl:block"
          />
          <PromoBanners />
          <CategoryNav />
          <div className="space-y-10">
            <GameGrid title="New Games" games={newGames} icon={NewIcon} />
            <GameGrid title="Exclusive Games" games={exclusiveGames} icon={VerifyIcon} />
            <Publishers publishers={publishers} />
            <GameGrid title="Top Games" games={topGames} icon={TopGamesIcon} />
            <DealsHero />
          </div>
        </div>
      </main>
    </div>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  const getCurrentRoute = () => window.location.hash.replace(/^#/, '');
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getCurrentRoute());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  if (route === 'styleguide') {
    return <StyleGuide theme={theme} toggleTheme={toggleTheme} />;
  }

  return <MainApp theme={theme} toggleTheme={toggleTheme} />;
};

export default App;