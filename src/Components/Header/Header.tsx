import React from "react";
import User from "../User/User";
import Time from "../Time/Time";
import MenuIcon from "../Menu/MenuIcon";

const Header = () => {
  return (
    <div className='flex gap-2 ml-3 items-center bg-white pr-8 py-[7px] justify-between'>
      <div className="grid justify-center align-baseline items-center grid-flow-col gap-7">
        <MenuIcon />
        <div className="bg-[url('logo.svg')] w-40 h-6 bg-no-repeat bg-contain"></div>
        <div className='text-black font-sans text-base'>Organization Name</div>
      </div>
      <div><Time/></div>
      <User />
    </div>
  );
};

export default Header;