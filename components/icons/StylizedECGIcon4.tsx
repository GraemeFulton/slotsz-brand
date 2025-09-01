import React from 'react';

const StylizedECGIcon4: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 0 255 100"
    className={className}
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="stylizedEcgGradient4" x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
        <stop offset="10%" stopColor="currentColor" stopOpacity="1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
      <filter id="stylizedEcgGlow4" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#stylizedEcgGlow4)">
      <path
        d="M0 50 H40 L50 20 L75 80 L100 35 L110 50 H240"
        fill="none"
        stroke="url(#stylizedEcgGradient4)"
        strokeWidth="2"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </g>
    <g transform="translate(240, 50)">
      <circle cx="0" cy="0" r="6" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" fill="none" />
      <circle cx="0" cy="0" r="4" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" fill="none" />
      <circle cx="0" cy="0" r="2.5" fill="currentColor" />
    </g>
  </svg>
);

export default StylizedECGIcon4;