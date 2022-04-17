import React,{useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';

import { useResultContext } from '../contexts/ResultContextProvider';



const Frontsearch = () => {
  const[text,setText] = useState('');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(()=> {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  
  function handlechange(e) {
    e.preventDefault();
    setText(e.target.value);
    
  }

  return (
   
 

    <div className=" flex flex-col h-screen my-auto justify-center items-center  ">
     <div>
         <p className=' font-bold italic tracking-widest sm:text-4xl text-3xl mb-5 sm:mb-10'>G👀gle Bhai</p>
     </div>
      <input
       type="text" 
       value={text}
       placeholder="Ask Google Bhai anything 🔍"
       className="animate-pulse sm:w-96 w-80 h-10 placeholder:italic placeholder:text-gray-500 focus:outline-pink-200 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      onChange={handlechange}
       />
       
     {text !== '' && (
        <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
          x
        </button>
     )}
     <p className='mt-20 text-xs'>Cloned By <a href="https://www.instagram.com/no_rain_shams/?fbclid=IwAR0fTL6Vhbli-ZcpNIV4FFQ5OSS3Ro48GjyFMh7ig2fCQm5qty3DBus0JRs">Nuren Shams</a></p>
    </div>
  )
}

export default Frontsearch;