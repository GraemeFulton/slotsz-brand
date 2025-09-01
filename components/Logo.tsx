import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <>
    {/* Light Mode Logo */}

    <img alt="Vertical Lockup" className="h-[34px] dark:hidden" src="https://i.postimg.cc/PJNx4mNv/Frame-29-2.png"/>
    {/* Dark Mode Logo */}
    <img alt="Vertical Lockup" className="h-[34px] dark:block hidden" src="https://i.postimg.cc/mg6GY0Cj/Frame-30-1.png"/>
    
  </>
);

export default Logo;
