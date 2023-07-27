import React from "react";

const DropDow = ({ isDropdownOpen }) => {
  return (
    <div className='ml-80 mt-[-10px]'>
      {isDropdownOpen && (
        <div className='w-44 p-4 rounded-md bg-slate-300 text-black focus:outline-none cursor-pointer'>
          <div className='flex gap-3 items-center'>
            <div className='font-normal text-lg '>Wade Cooper</div>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-[#1aff1a]'></span>
            </span>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='font-normal text-lg '>Arlene Mccoy</div>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-[#ff1b1b]'></span>
            </span>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='font-normal text-lg '>Tom Cook</div>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-[#1bf0ff]'></span>
            </span>
          </div>
          <div className='flex gap-3 items-center'>
            <div className='font-normal text-lg '>Jon Cooks</div>
            <span className='relative flex h-3 w-3'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75'></span>
              <span className='relative inline-flex rounded-full h-3 w-3 bg-[#ff1b1b]'></span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDow;
