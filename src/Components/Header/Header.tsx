import React from "react";
import User from "../User/User";

const Header = () => {
  return (
    <div className='flex gap-2 ml-3 items-center bg-white px-8 py-7 justify-between'>
      <div className="grid justify-center align-baseline grid-flow-col gap-7">
        <div className="bg-[url('logo.svg')] w-40 h-7 bg-no-repeat bg-contain"></div>
        <div className='text-black font-sans text-lg not-italic font-normal	leading-relaxed'>Organization Name</div>
      </div>
      <User />
    </div>
  );
};

export default Header;