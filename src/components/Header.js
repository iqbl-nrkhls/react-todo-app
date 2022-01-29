import React from 'react';

import AddTodos from "./AddTodos";

import { useDarkMode } from '../utils/darkMode';

const Header = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
     <>
      <div className="flex justify-between mb-8 md:mb-[46px]">
        <h1 className="font-bold text-2xl tracking-[.55em] text-white md:text-[36px]">
          TODO
        </h1>
        <button
          className="-mt-1 pr-1 w-[20px] md:pr-0 md:w-[30px]"
          onClick={() => toggleTheme()}>
          {(theme === 'dark')
            ? <img src="images/icon-sun.svg" className="ml-auto"/>
            : <img src="images/icon-moon.svg" className="ml-auto"/>
          }
        </button>
      </div>
      <AddTodos />
    </>
  )
}

export default Header;