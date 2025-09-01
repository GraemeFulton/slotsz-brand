
import React from 'react';
import { SlidersIcon } from './icons';

interface StyleGuideSidebarProps {
  sections: { id: string; title: string }[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const StyleGuideSidebar: React.FC<StyleGuideSidebarProps> = ({ sections, activeSection, onSectionClick }) => {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-neutral-900/20 border-r border-gray-200 dark:border-neutral-800/50 p-4 shrink-0 overflow-y-auto scrollbar-hide hidden lg:block">
      <div className="flex items-center space-x-3 mb-4 px-2">
        <SlidersIcon className="h-6 w-6 text-gray-500 dark:text-neutral-400" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Sections</h3>
      </div>
      <nav>
        <ul className="space-y-1">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSectionClick(section.id);
                }}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default StyleGuideSidebar;