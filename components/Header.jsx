import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex text-black w-full p-4">
      <div className="mr-auto">
        <h1 className="text-2xl uppercase font-bold roboto-bold-italic">TechyStar</h1>
      </div>
      <div className="space-x-4 flex">
        <Link className="text-black" to="/">Home</Link>
        <Link className="text-black" to="/contact">Contact</Link>
        <Link className="text-black" to="/about">About</Link>
        <Link className="text-black" to="/brands">Brands</Link>
        <Link className="text-black" to="/services">Services</Link>
      </div>
    </header>
  );
};

export default Header;
