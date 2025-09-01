
import React from 'react';

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.076 16.924a.5.5 0 01-.68.02l-1.464-.99a.5.5 0 01-.115-.79l3.52-5.182-1.802-1.802-5.182 3.52a.5.5 0 01-.79-.115l-.99-1.464a.5.5 0 01.02-.68l3.966-5.838a.5.5 0 01.624-.225l5.838 3.966a.5.5 0 01-.225.624L11.08 9.076l1.802 1.802 5.182-3.52a.5.5 0 01.79.115l.99 1.464a.5.5 0 01-.02.68l-3.966 5.838a.5.5 0 01-.624.225l-5.838-3.966a.5.5 0 01.225-.624l1.246-.842-3.52 5.182z"/>
  </svg>
);
export default RocketIcon;
