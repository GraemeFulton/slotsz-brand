

import React from 'react';

const PulseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12h3l4-9 8 18 4-9h2" />
    <circle cx="5" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

export default PulseIcon;