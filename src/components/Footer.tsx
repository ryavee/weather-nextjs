import React from 'react';
import { FaHeart } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

type Props = {}

function Footer({}: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="container-fluid p-3 flex justify-between items-center text-white bg-[rgba(65,105,225,0.836)]">
      <div className="flex items-center">
        <h4 className="mr-2">Weather App</h4>
        <p className='my-1'>&copy; Made with <FaHeart aria-label="love" className="inline-block text-red-500" /> by Ravi Raj</p>
      </div>
      <button 
        onClick={scrollToTop} 
        className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <MdArrowUpward className="mr-1" /> Top
      </button>
    </div>
  );
}

export default Footer;
