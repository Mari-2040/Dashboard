import React, { createContext, useState } from 'react';

export const Context = createContext({});

const AppContext = ({children}) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <Context.Provider value={{menuIsOpen, setMenuIsOpen}}>
        {children}
    </Context.Provider>
  )
}

export default AppContext