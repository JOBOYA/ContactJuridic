import React, { useState, useEffect } from 'react';
import logo from '../assets/SCE.svg';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 py-4 backdrop-filter ${
        isScrolled
          ? 'bg-opacity-1'
          : 'bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
       <img src={logo} alt="logo" id='logo' className="w-80 py-4" />
            
          <span>Des questions?</span>

          <div className="hidden md:flex space-x-4">
            <a href="#accueil" className="relative inline-block px-3 py-2 text-sm font-medium ">
              ACCUEIL
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>

            <a href="#contact" className="relative inline-block px-3 py-2 text-sm font-medium">
              CONTACT
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>

            <a href="#rdv" className="relative inline-block px-3 py-2 text-sm font-medium">
              PRISE DE RDV
              <div className="relative">
                <div className="line absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 transition-transform duration-200"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
