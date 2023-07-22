import React from "react";
import { MdPortrait } from "react-icons/md";

const Pordfolio = () => {
  return (
    <div className=' ml-20 w-[250px] h-[250px] rounded-xl p-5 bg-zinc-700'>
      <div className="">
        <MdPortrait size={45} color="white"/>
        <div className=" text-white">Pordfolio</div>
      </div>
    </div>
  );
};

export default Pordfolio;
