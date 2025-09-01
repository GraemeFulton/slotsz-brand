
import React from 'react';

const ECGBackgroundIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 400"
    fill="none"
    className={className}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
        <stop offset="50%" stopColor="white" stopOpacity="0.7" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
      </linearGradient>
      <filter id="ecgGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="currentColor" floodOpacity="1" />
      </filter>
    </defs>

    <path
      d="M0 200 H100 L125 115 L175 285 L225 150 L250 200 H350 L375 250 L425 150 L475 225 L500 200 H600"
      stroke="url(#ecgGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      filter="url(#ecgGlow)"
    />
  </svg>
);

export default ECGBackgroundIcon;
