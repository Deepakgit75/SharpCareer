// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <header className="bg-blue-200 font-bold text-black p-2 rounded-sm">
//       <nav className="container mx-auto flex justify-between items-center">
//         <div className="text-black  p-4 text-left font-bold text-xl"> <Link to="/">ServicePros</Link></div>
//         <ul className="flex space-x-44 text-xl pr-5">
//           <li className="font-bold text-xl">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="relative">
//             <button className='flex flex-row gap-1 items-center justify-center' onClick={toggleDropdown}>Services 
//             <ChevronDownIcon className="-mr-1 h-7 w-7" aria-hidden="true" />
//             </button>
//             {isDropdownOpen && (
//               <ul className="absolute bg-white text-base text-black mt-2 rounded-md shadow-lg z-10 font-medium">
//                 <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
//                   <Link to="/services/ac-repair" onClick={toggleDropdown}>AC Repairing Service</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
//                   <Link to="/services/refrigerator-service" onClick={toggleDropdown}>Refrigerator Service</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
//                   <Link to="/services/washing-machine-service" onClick={toggleDropdown}>Washing Machine Service</Link>
//                 </li>
//                 <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
//                   <Link to="/services/led-service" onClick={toggleDropdown}>LED Service</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact-us">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa6";
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-200 font-bold text-black p-2 rounded-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="relative text-black p-4 text-left font-bold text-xl">
          <Link to="/">ServicePros</Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <XIcon className="h-7 w-7 absolute top-2 right-2" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-7 w-7" aria-hidden="true" />
            )}
          </button>
        </div>
        <ul className={`lg:flex space-x-10 text-xl pr-5 ${isMobileMenuOpen ? 'block absolute top-2 right-2 bg-blue-100' : 'hidden'} lg:block`}>
          <li className="font-bold text-center text-xl">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="relative">
            <button className="flex flex-row gap-1 items-center justify-center" onClick={toggleDropdown}>
              Services
              <FaChevronDown className="-mr-1 h-5 w-5" aria-hidden="true" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-base text-black mt-2 rounded-md shadow-lg z-10 font-medium">
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
                  <Link to="/services/ac-repair" onClick={() => { toggleDropdown(); setIsMobileMenuOpen(false); }}>
                    AC Repairing Service
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
                  <Link to="/services/refrigerator-service" onClick={() => { toggleDropdown(); setIsMobileMenuOpen(false); }}>
                    Refrigerator Service
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
                  <Link to="/services/washing-machine-service" onClick={() => { toggleDropdown(); setIsMobileMenuOpen(false); }}>
                    Washing Machine Service
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-900 text-gray-700">
                  <Link to="/services/led-service" onClick={() => { toggleDropdown(); setIsMobileMenuOpen(false); }}>
                    LED Service
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

