
import React from 'react';
import { SearchIcon } from './icons';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 h-16 flex items-center justify-center shrink-0 dark:border-b dark:border-neutral-800">
      <div className="w-full max-w-[1200px] flex items-center justify-between px-8">
        <Logo className="h-6" />
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search games"
            className="bg-white w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-semibold font-display text-primary bg-gray-50 dark:bg-neutral-800 rounded-xl hover:bg-primary/10 dark:hover:bg-primary/20 transition">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-semibold font-display tracking-wide text-white bg-[linear-gradient(-135deg,#fe139c,#c71cb8)] rounded-xl hover:opacity-90 transition">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;