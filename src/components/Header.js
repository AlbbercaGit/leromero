// Header.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="h-[10vh] p-4 bg-transparent text-white font-sans border-b ital border-white relative z-20">
      <div className="container h-full grid grid-cols-3 items-center px-4">
        <div className="flex justify-start"></div>
        <div className="flex justify-center col-span-1">
          <h1 className="text-2xl font-bold">LeRomer</h1>
        </div>
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className={`text-white text-2xl md:hidden transition-transform duration-300 ease-in-out z-20`}
          >
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>
        </div>
        <nav className="hidden md:flex md:items-center col-span-3 justify-center">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">Reservar</a></li>
            <li><a href="#contact" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </div>
      <div className={`fixed inset-0 bg-transparent backdrop-blur-md transition-opacity duration-700 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} flex items-center justify-center`}>
        <div className="relative w-full h-4/5 flex items-center justify-center text-white">
          <nav className="flex flex-col items-center text-center text-2xl">
            <ul className="space-y-4">
              <li><a href="#about" className="text-3xl font-sans py-2 px-4 underline-button" onClick={toggleMenu}>Reservar</a></li>
              <li><a href="#contact" className="text-3xl font-sans py-2 px-4 underline-button" onClick={toggleMenu}>Contacto</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
