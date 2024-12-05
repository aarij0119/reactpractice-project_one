import React from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <header className="flex text-black w-full p-4 fixed top-0 left-0 z-10 bg-white">
      <div className='flex justify-between w-full items-center mx-auto max-w-7xl'>
      <div className="">
        <h1 className="text-2xl uppercase font-bold roboto-bold-italic">TechyStar</h1>
      </div>
      <div className="space-x-4 flex">
        <HashLink to={"/#home"} className="text-black" >Home</HashLink>
        <Link to={"/contact"} className="text-black" >Contact</Link>
        <HashLink to={'/#about'} className="text-black">About</HashLink>
        <HashLink to={'/#brands'} className="text-black">Brands</HashLink>
        <Link to={"/services"} className="text-black" >Services</Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
