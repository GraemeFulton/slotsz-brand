import React from 'react';

const PulseLineIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pulseLineGradient" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
        <stop offset="20%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="80%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
      </linearGradient>
      <filter id="pulseLineGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#pulseLineGlow)">
      <path
        d="M0 50 H40 L50 20 L75 80 L100 35 L110 50 H190"
        fill="none"
        stroke="url(#pulseLineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="195" cy="50" r="4" fill="currentColor" />
    </g>
  </svg>
);

export default PulseLineIcon;
