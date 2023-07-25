import React, { useState } from "react";
import NavMenu from "../Menu/NavMenu";
import { Menu } from "../Menu/Menu";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [isOpen] = useState(false);
  return (
    <div className="flex flex-row wrapper">
      <NavMenu Menu={Menu} />
      <div className="w-full flex flex-col overflow-auto">
        <div className="flex gap-8 sm:gap-2 flex-col">
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export default Home;
