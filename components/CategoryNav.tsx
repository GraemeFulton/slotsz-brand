import React, { useState } from 'react';
import { HomeIcon, NewIcon, VerifyIcon, Cherries, TableGamesIcon } from './icons';

const categories = [
  { name: 'Home', icon: HomeIcon },
  { name: 'New Releases', icon: NewIcon },
  { name: 'Pulsz Exclusives', icon: VerifyIcon },
  { name: 'Slot Games', icon: Cherries },
  { name: 'Table Games', icon: TableGamesIcon },
];

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Home');

  return (
    <div className="bg-gray-100/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-black/5 dark:border-white/10 p-1.5 rounded-full flex items-center justify-start space-x-1 my-6 w-fit overflow-x-auto scrollbar-hide">
      {categories.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => setActiveCategory(name)}
          className={`flex items-center space-x-2.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-900 ${
            activeCategory === name
              ? 'bg-white dark:bg-neutral-800 text-gray-900 dark:text-neutral-100 shadow'
              : 'text-gray-500 dark:text-neutral-400 hover:bg-white/30 dark:hover:bg-black/20'
          }`}
        >
          <Icon className="w-5 h-5" />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;