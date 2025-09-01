
import React from 'react';

const StylizedECGIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="stylizedEcgGradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
        <stop offset="20%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="80%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="1bg-gray-100 dark:bg-neutral-900 p-1.5 rounded-full flex items-center justify-start space-x-1 my-6 max-w-full overflow-x-auto scrollbar-hide00%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
      <filter id="stylizedEcgGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M0 50 H40 L50 20 L75 80 L100 35 L110 50 H200"
      fill="none"
      stroke="url(#stylizedEcgGradient)"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#stylizedEcgGlow)"
    />
  </svg>
);

export default StylizedECGIcon;
