import React from "react";
import { useNavigate } from "react-router-dom";
const NavMenu = ({ isOpen, Menu }) => {
  const navigate = useNavigate();

  return (
  <div className={`mt-3 ml-4 opacity-[0.75]`}>
    {Menu.map((item: any, index: any) => {
    return (
      <div>
        <div title={item.title} key={index} className='border-b-2 border-indigo-300 w-[190px]' >
          <ul className={`flex gap-3 font-sans py-3 cursor-pointer ml-3`}>
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
