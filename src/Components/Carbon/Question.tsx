import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Questionnaire from "./Questionnaire";

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className='flex justify-between items-center p-3 bg-white border-b-2 border-[#CCC]'>
        <div className='text-[#101011] font-normal text-lg '>
          Take the questionnaire to determine your ESG Score{" "}
        </div>
        <div className='relative '>
          <button
            className='border-[#CCCCCC] border1 flex font py-2 px-2 rounded focus:outline-none'
            onClick={handleToggleDropdown}
          >
            Socila
            <BiChevronDown
              className='w-6 h-6 mt-0 ml-3'
              color='#0F66CC'
            />
          </button>
          {isOpen && (
            <div className='absolute top-12 right-0 hei bg-white border border-gray-300 rounded shadow-md font-mono'>
              <ul>
                <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                  Option 1
                </li>
                <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                  Option 2
                </li>
                <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                  Option 3
                </li>
                <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer'>
                  Option 4
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Questionnaire />
    </div>
  );
};

export default Question;
