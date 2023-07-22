import React from "react";
import { BiLogoNetlify } from "react-icons/bi";

const Header = () => {
  return (
    <div className='flex gap-2 ml-3 py-3 items-center h-14 bg-white '>
      <BiLogoNetlify size={32} color='#2a9407'/>
      <div className='text-black font-sans text-lg not-italic font-normal	leading-relaxed'>Organization Name</div>
    </div>
  );
};

export default Header;