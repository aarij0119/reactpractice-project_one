import React from 'react';
import { FaGoogle, FaAmazon, FaYoutube, FaInstagram } from 'react-icons/fa';


const fonts = () => {
  const icons = [
    { name: 'Google', component: <FaGoogle size={32} /> },
    { name: 'Amazon', component: <FaAmazon size={32} /> },
    { name: 'YouTube', component: <FaYoutube size={32} /> },
    { name: 'Instagram', component: <FaInstagram size={32} /> }
  ];
console.log(icons)
  return (
    <div>
     <h1>Hello</h1>
    </div>
  );
};

export default fonts;
