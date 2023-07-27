import React from "react";

const Question1Botn = () => {
  return (
    <div>
      <div className='flex gap-5 mt-5'>
        <button className='text-black font-normal px-3 py-2 rounded border border-slate-300'>
          Previous
        </button>
        <button className='text-white font-normal px-3 py-2 rounded bg-blue-500 hover:bg-blue-500 focus:outline-none'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question1Botn;
