import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from '../../Context/AppContext';
const NavMenu = ({ Menu }) => {
  const navigate = useNavigate();
  const {menuIsOpen} : any = useContext(Context);
  return (
  <ul className={`box-border bg-white my-6 rounded-r-lg overflow-hidden transition-[width] ease-in-out duration-[500ms] ${menuIsOpen ? 'w-48' : 'w-16'}`}>
    {Menu.map((item: any, index: any) => {
    return (
      <li className="pl-4" key={index}>
        <div title={item.title} className='border-b-2 border-indigo-300' >
          <div className='flex font-sans py-3 cursor-pointer'>
            <span className="px-2">{item.icon}</span>
            <span className='text-[#010000] font-medium ml-1' onClick={() => navigate(`${item.path}`)}>
              {item.title}
            </span>
          </div>
        </div>
      </li>
    )
    })}
  </ul>
  );
};

export default NavMenu;
