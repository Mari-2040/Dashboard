import React from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { IoMdArrowDropdown } from 'react-icons/io';

const User = () => {
    return (
        <div className="grid justify-center items-center grid-flow-col gap-2">
            <BiSolidUser color='#073263' size={20} />
            <h4 className=' text-sky-950 font-normal text-md'>მარიამ დოლუაშვილი</h4>
            <IoMdArrowDropdown color='#073263' size={24}/>
        </div>
    );
  };
  
  export default User;