import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';

import './front.css';




const Navbar = ( {darkTheme , setDarkTheme}) => {
  

  return (
 
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
    <div className="py-3 flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
            <p className=" front p-1 rounded italic text-zinc-900 font-bold text-2xl "> G👀gle Bhai </p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none  font-medium rounded-full text-sm sm:px-5 sm:py-2.5 px-3 py-1.5 text-center mr-2 mb-2 m-2">
            {darkTheme ? '☀️' : '🌚'}
        </button>
    </div>
    <Search />
</div>
  )
}

export default Navbar