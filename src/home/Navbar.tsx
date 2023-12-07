import React from 'react';
import { motion } from 'framer-motion';

import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const hoverEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      y: -3,
      borderBottom: "2px solid #11535c",
    });
  };

  const hoverLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    gsap.to(e.currentTarget, {
      duration: 0.3,
      y: 0,
      borderBottom: "2px solid transparent",
    });
  };

  return (
    <nav className="flex  text-white items-center rounded-full w-full md:w-[600px] lg:w-[800px] justify-between p-4 bg-[#11535c] shadow-md">
      <div className="flex items-center space-x-4">
        {/* Your logo here */}
        <motion.a 
                href="/"
                className="text-xl -mt-1 font-bold"
              >
          Tukay
        </motion.a>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.a 
              key={index}
              href={`#${item.toLowerCase()}`}
              onMouseEnter={hoverEnter}
              onMouseLeave={hoverLeave}
              className="hover:text-green-600 cursor-pointer"
              style={{ borderBottom: "2px solid transparent" }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
      <button className="bg-[#0b2629] rounded-md text-white px-4 py-2  hover:bg-[#051517]">
        Beg Now!
      </button>
    </nav>
  );
};

export default Navbar;
