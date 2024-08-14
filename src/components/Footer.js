import React from 'react';
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="w-full h-auto text-center  text-sm text-[#5ea3a3] font-sans py-10 bg-paper-texture bg-repeat-x bg-gradientcarta2">
      <div className="grid grid-cols-3 grid-rows-[1fr,4fr,1fr] gap-1 justify-center items-center">
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-center bg-[#add2c9] w-4/5 h-[1px]'></div>
        </div>
        <div className="col-start-3 row-start-1">
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center text-center bg-[#add2c9] w-4/5 h-[1px]'></div>
          </div>
        </div>
        <div className="col-start-2 row-start-1 font-bold">
          <p>LeRomer</p>
        </div>
        <div className='h-full'>
          <div className='flex flex-col justify-center items-center h-full w-full font-bold'>
          <p className='h-4/5'>About</p>
          </  div>
          </div>        <div className='h-full'>
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <div className='flex justify-center items-center h-2/5 w-full'>
            <a href='https://www.instagram.com/leromergastrobar/'><FaInstagram className='' /> </a>
           </div>
            <div className='flex justify-center items-center h-3/5 w-full'>
            <div className='flex justify-center items-center  bg-[#add2c9] h-2/5 w-[1px] min-h-6'><p></p></div>
          </div>
          </div>
        </div>
        <div className='h-full'>
          <div className='flex flex-col justify-center items-center h-full w-full font-bold'>
          <p className='h-4/5'>Contacto</p>
          </  div>
          </div>
        <div className="col-start-2"> 
          <p className="border border-[#add2c9] font-bold">
          Design by Min.
          </p ></div>
      </div>
    </footer>
  );
};

export default Footer;