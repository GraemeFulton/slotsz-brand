

import React, { useRef } from 'react';
import type { Publisher } from '../types';
import PublisherCard from './PublisherCard';
import { JoystickIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface PublishersProps {
  publishers: Publisher[];
}

const Publishers: React.FC<PublishersProps> = ({ publishers }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <JoystickIcon className="h-6 w-6 text-gray-800 dark:text-neutral-200" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Publishers</h2>
        </div>
        <div className="flex items-center">
          <button onClick={() => scroll('left')} aria-label="Scroll left" className="p-2 rounded-l-full border border-r-0 border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
            <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-neutral-400" />
          </button>
          <button onClick={() => scroll('right')} aria-label="Scroll right" className="p-2 rounded-r-full border border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition">
            <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-neutral-400" />
          </button>
        </div>
      </div>
      <div ref={scrollContainer} className="flex items-start space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {publishers.map((publisher) => (
          <PublisherCard key={publisher.id} publisher={publisher} />
        ))}
      </div>
    </section>
  );
};

export default Publishers;