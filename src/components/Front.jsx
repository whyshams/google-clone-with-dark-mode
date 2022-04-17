import React from 'react'


import './front.css';
import Frontsearch from "./Frontsearch";





const Front = ( {darkTheme , setDarkTheme}) => {


  return (
 
    <div className='front'>
          <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="animate-bounce text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none  font-medium rounded-full text-sm sm:px-5 sm:py-2.5 px-3 py-1.5 text-center mr-2 mb-2 m-2">
            {darkTheme ? '🌞' : '🌚'}
        </button>
        
        <Frontsearch darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
     
    </div>
  )
}

export default Front