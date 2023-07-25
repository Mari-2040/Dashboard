import React, { useState, useContext } from 'react';
import { Context } from '../../Context/AppContext';

const MenuIcon = () => {
    const {menuIsOpen, setMenuIsOpen} : any = useContext(Context);
    const toggle = () => {
        setMenuIsOpen(!menuIsOpen);
    }
  return (
    <div id="nav-icon" className={menuIsOpen ? 'open' : ''} onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default MenuIcon