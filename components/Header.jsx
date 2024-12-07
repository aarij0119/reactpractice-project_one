import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex text-white sm:text-black w-full p-4 fixed top-0 left-0 z-10 bg-[#121827] sm:bg-white">
      <div className='flex justify-between w-full items-center mx-auto max-w-7xl'>
        <div className="bg-green-500">
          <h1 className="text-2xl uppercase font-bold roboto-bold-italic absolute top-4">TechyStar</h1>
        </div>
        <div className="sm:space-x-4 flex justify-center items-center flex-col sm:flex-row ">
          <button className='block sm:hidden text-white sm:text-[#090c31]' onClick={toggleMenu}>
            <RxCross2 size={28} />
          </button>
          <div className={`flex-col gap-3 sm:gap-5 sm:flex-row ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
            <HashLink to={"/#home"} className="sm:text-black text-lg sm:text-md text-white">Home</HashLink>
            <Link to={"/contact"} className="sm:text-black text-lg sm:text-md text-white">Contact</Link>
            <HashLink to={'/#about'} className="sm:text-black text-lg sm:text-md text-white">About</HashLink>
            <HashLink to={'/#brands'} className="sm:text-black text-lg sm:text-md text-white">Brands</HashLink>
            <Link to={"/services"} className="sm:text-black text-lg sm:text-md text-white">Services</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
