import React, { useState } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
    const [dropdown, setDropDown] = useState(false);
    const toggleDropDown = () => setDropDown(!dropdown);
    return (
        <div className='relative'>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="grid justify-center items-center grid-flow-col gap-2" onClick={toggleDropDown}>
            <BiSolidUser color='#073263' size={20} />
            <h4 className=' text-sky-950 font-normal text-md'>მარიამ დოლუაშვილი</h4>
            <IoMdArrowDropdown color='#073263' size={24}/>
        </button>
        <div id="dropdown" className={`absolute top-8 right-2 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${dropdown ? '' : 'hidden'}`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
          </li>
          <li onClick={() => navigate(`/login`)}>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
    </div>
    </div>
    );
  };
  
  export default User;