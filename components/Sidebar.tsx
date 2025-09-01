

import React, { useState, useRef, useEffect } from 'react';
import { navItems } from '../constants';
import type { NavItem } from '../types';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, HamburgerMenuIcon, DarkModeIcon } from './icons';

const SidebarNavItem: React.FC<{ item: NavItem; isActive: boolean; onClick: () => void; isCollapsed: boolean; }> = ({ item, isActive, onClick, isCollapsed }) => (
  <li
    onClick={onClick}
    data-name={item.name}
    className={`flex items-center space-x-3 p-2 rounded-xl cursor-pointer transition-colors duration-200 relative ${
      isActive
        ? 'bg-primary/10 text-primary font-semibold'
        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200'
    } ${isCollapsed ? 'justify-center' : 'pl-8'}`}
  >
    <item.icon className="h-6 w-6 shrink-0" />
    {!isCollapsed && <span>{item.name}</span>}
  </li>
);

const ToggleSwitch: React.FC<{ enabled: boolean; setEnabled: () => void }> = ({ enabled, setEnabled }) => (
  <button
    onClick={(e) => { e.stopPropagation(); setEnabled(); }}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      enabled ? 'bg-primary' : 'bg-gray-300 dark:bg-neutral-700'
    }`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);


const Sidebar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isIconLoaded, setIsIconLoaded] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  // FIX: Explicitly type indicatorStyle state with React.CSSProperties to allow for dynamic style properties.
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({ opacity: 0 });

  useEffect(() => {
    const navList = navListRef.current;
    if (!navList) return;

    const activeLink = navList.querySelector(`[data-name="${activeItem}"]`) as HTMLLIElement;
    if (activeLink) {
        if (isCollapsed) {
            setIndicatorStyle({
                opacity: 1,
                top: `${activeLink.offsetTop + activeLink.offsetHeight - 4}px`,
                left: '50%',
                transform: 'translateX(-50%)',
                height: '6px',
                width: '16px',
            });
        } else {
            setIndicatorStyle({
                opacity: 1,
                top: `${activeLink.offsetTop + (activeLink.offsetHeight / 2)}px`,
                left: '10px',
                transform: 'translateY(-50%)',
                height: '20px',
                width: '6px',
            });
        }
    }
  }, [activeItem, isCollapsed]);

  return (
    <aside className={`relative bg-gray-50/10 dark:border-neutral-800 dark:bg-neutral-900 border-gray-100 flex flex-col py-2 border-r overflow-hidden shrink-0 transition-all duration-300 ${isCollapsed ? 'w-24' : 'w-64'}`}>
      <div className={`flex border-b dark:border-neutral-800 border-gray-100 shadow-sm items-center p-2 px-4 mb-2 ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 p-2 rounded-xl transition-colors"
        >
          <HamburgerMenuIcon className="h-6 w-6" />
        </button>
        {!isCollapsed && (
            <div className="flex items-center space-x-2">
                <DarkModeIcon className="h-6 w-6 text-gray-500 dark:text-neutral-400"/>
                <ToggleSwitch enabled={theme === 'dark'} setEnabled={toggleTheme} />
            </div>
        )}
      </div>

      <div className="relative m-2 mx-4">
        <div 
          aria-hidden="true"
          className="absolute -mx-12 -m-8 inset-0 rounded-xl bg-gradient-to-b from-transparent via-primary to-transparent blur-md opacity-20 dark:opacity-20"
        ></div>
        <nav className="relative dark:bg-neutral-800 bg-white p-4 rounded-xl border border-gray-200 dark:border-neutral-800">
          <div className="relative">
            {!isCollapsed && (
              <div 
                className="absolute top-0 left-3 h-full w-[1.4px] bg-primary/40 dark:bg-primary/40 rounded-xl" 
                aria-hidden="true"
              />
            )}
            
            <div
              className="absolute bg-primary rounded-full shadow-[0_0_10px_theme(colors.primary)] transition-all duration-300 ease-in-out"
              style={indicatorStyle}
              aria-hidden="true"
            />

            <ul ref={navListRef} className="space-y-2">
              {navItems.map((item) => (
                <SidebarNavItem 
                  key={item.name} 
                  item={item} 
                  isActive={activeItem === item.name}
                  onClick={() => setActiveItem(item.name)}
                  isCollapsed={isCollapsed}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className={`px-8 mt-5 transition-all duration-300 ${isCollapsed ? 'opacity-0 h-0 pointer-events-none' : 'opacity-100'}`}>
          <button 
            onClick={() => window.location.hash = 'styleguide'}
            className="text-xs font-medium text-neutral-500 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Brand Book
          </button>
      </div>

      <div className={`mx-4 mt-auto transition-opacity duration-200 ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center p-2">
          <button 
            onClick={() => alert('App install initiated!')}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary/10 transition"
          >
            <div className="relative h-6 w-6">
              {!isIconLoaded && <div className="absolute inset-0 bg-gray-300 dark:bg-neutral-800 animate-pulse rounded-md"></div>}
              <img
                src="https://i.postimg.cc/T173z6dh/circles-shape-15-3.png"
                alt="PWA Icon"
                className={`h-6 w-6 rounded-md transition-opacity duration-500 ${isIconLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsIconLoaded(true)}
              />
            </div>
            <span>Install App</span>
          </button>
        </div>
        <div className="flex items-center justify-center space-x-4 p-2 mt-2">
          <a href="#" className="text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 transition"><FacebookIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 transition"><InstagramIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 transition"><TwitterIcon className="h-6 w-6"/></a>
          <a href="#" className="text-gray-400 dark:text-neutral-500 hover:text-gray-700 dark:hover:text-neutral-200 transition"><YoutubeIcon className="h-6 w-6"/></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;