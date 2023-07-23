import React from "react";
import { useNavigate } from "react-router-dom";
const NavMenu = ({ isOpen, Menu }) => {
  const navigate = useNavigate();

  return (
  <div className='box-border bg-white my-6 rounded-r-lg'>
    {Menu.map((item: any, index: any) => {
    return (
      <div className="w-48 px-4" key={index}>
        <div title={item.title} key={index} className='border-b-2 border-indigo-300' >
          <ul className='flex font-sans py-3 cursor-pointer'>
            <li className='text-lg'>{item.icon}</li>
            <button className='text-[#010000] font-medium'onClick={() => navigate(`${item.path}`)}>
              {item.title}
            </button>
          </ul>
        </div>
      </div>
    )
    })}
  </div>
  );
};

export default NavMenu;
