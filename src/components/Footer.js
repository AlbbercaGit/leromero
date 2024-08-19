import React from 'react';
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="w-full h-auto text-center  text-sm text-[#48bbca] font-sans py-10 bg-paper-texture bg-repeat-x bg-gradientcarta2">
      <div className="grid grid-cols-3 grid-rows-[1fr,4fr,1fr] gap-1 justify-center items-center">
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center text-center bg-[#d2f2ea] w-4/5 h-[1.3px]'></div>
        </div>
        <div className="col-start-3 row-start-1">
          <div className='flex justify-center items-center'>
            <div className='flex justify-center items-center text-center bg-[#d2f2ea] w-4/5 h-[1.3px]'></div>
          </div>
        </div>
        <div className="col-start-2 row-start-1 text-[#ff9234] font-bold">
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
            <div className='flex justify-center items-center  bg-[#d2f2ea] h-2/5 w-[1.3px] min-h-6'><p></p></div>
          </div>
          </div>
        </div>
        <div className='h-full'>
          <div className='flex flex-col justify-center items-center h-full w-full font-bold'>
          <p className='h-4/5'>Contacto</p>
          </  div>
          </div>
        <div className="col-start-2"> 
          <p className="border-[1.4px] border-[#d2f2ea] font-bold text-[#ff9234]">
          Design by Min.
          </p ></div>
      </div>
    </footer>
  );
};

export default Footer;