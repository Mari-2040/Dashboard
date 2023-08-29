import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "../Menu/NavMenu";
import { Menu } from "../Menu/Menu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  return (
    <div >
      <Header />
      <div className='flex flex-row wrapper '>
        <NavMenu Menu={Menu} />
        <div className='flex gap-8 sm:gap-2 flex-col w-full min-h-full bg-white m-6 rounded-lg overflow-auto'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wrapper;
