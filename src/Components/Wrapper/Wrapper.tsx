import React from 'react';
import { Outlet } from "react-router-dom";
import NavMenu from "../Menu/NavMenu";
import { Menu } from "../Menu/Menu";

const Wrapper = () => {
  return (
    <div className="flex flex-row wrapper">
      <NavMenu Menu={Menu} />
      <div className="flex gap-8 sm:gap-2 flex-col w-full min-h-full bg-white m-6 rounded-lg overflow-hidden overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  )
}

export default Wrapper