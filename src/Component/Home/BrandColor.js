// import React from 'react';

// const BrandLogosBar = () => {
//   return (
//     <div className="bg-black py-8 w-full relative">
//       {/* Background Text */}
//       <div className="absolute inset-0 flex justify-center items-center">
//         <h1 className="text-white text-7xl md:text-6xl sm:text-5xl font-bold uppercase opacity-10 tracking-widest">
//           Trusted By
//         </h1>
//       </div>

//       <div className="max-w-8xl mx-auto px-4 relative z-10">
//         <div className="flex flex-wrap justify-center gap-10">
//           {/* Force Logo */}
//           <div className="opacity-70">
//             <img src="force.png" alt="Force Logo" className="h-12 md:h-10 sm:h-8" />
//           </div>

//           {/* Circular Logo */}
//           <div className="opacity-70">
//             <img src="force2.png" alt="Circular Logo" className="h-12 md:h-10 sm:h-8" />
//           </div>

//           {/* Hurley Logo */}
//           <div className="opacity-70">
//             <img src="force3.png" alt="Hurley Logo" className="h-12 md:h-10 sm:h-8" />
//           </div>

//           {/* Chanel Logo */}
//           <div className="opacity-70">
//             <img src="force4.png" alt="Chanel Logo" className="h-12 md:h-10 sm:h-8" />
//           </div>

//           {/* Tree Logo */}
//           <div className="opacity-70">
//             <img src="force5.png" alt="Tree Logo" className="h-12 md:h-10 sm:h-8" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandLogosBar;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrandLogosBar = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('https://framedigitalbackend.onrender.com/Brand');
        // Assuming the API returns an array of brand objects with an 'image' field
        setBrands(response.data);
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    };

    fetchBrands();
  }, []);

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
          {brands.map((brand, index) => (
            <div className="opacity-70" key={index}>
              <img
                src={brand.image} // Make sure your API response contains 'image'
                alt={`Brand Logo ${index + 1}`}
                className="h-12 md:h-10 sm:h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogosBar;
