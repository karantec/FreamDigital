import React from 'react';

const BrandLogosBar = () => {
  return (
    <div className="bg-black py-8 w-full relative">
      {/* Background Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-7xl md:text-6xl sm:text-5xl font-bold uppercase opacity-10 tracking-widest">
          Trusted By
        </h1>
      </div>

      <div className="max-w-8xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center gap-10">
          {/* Force Logo */}
          <div className="opacity-70">
            <img src="force.png" alt="Force Logo" className="h-12 md:h-10 sm:h-8" />
          </div>

          {/* Circular Logo */}
          <div className="opacity-70">
            <img src="force2.png" alt="Circular Logo" className="h-12 md:h-10 sm:h-8" />
          </div>

          {/* Hurley Logo */}
          <div className="opacity-70">
            <img src="force3.png" alt="Hurley Logo" className="h-12 md:h-10 sm:h-8" />
          </div>

          {/* Chanel Logo */}
          <div className="opacity-70">
            <img src="force4.png" alt="Chanel Logo" className="h-12 md:h-10 sm:h-8" />
          </div>

          {/* Tree Logo */}
          <div className="opacity-70">
            <img src="force5.png" alt="Tree Logo" className="h-12 md:h-10 sm:h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogosBar;
