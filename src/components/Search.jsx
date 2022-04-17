import React,{useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';
import { useResultContext } from '../contexts/ResultContextProvider';



import Links from './Links';


const Search = () => {
  const[text,setText] = useState('');
  const {setSearchTerm} = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);
  useEffect(()=> {
    if(debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  
  return (

 

    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
       type="text" 
       value={text}
       placeholder="Ask Google Bhai anything 🔍"
       className="animate-pulse sm:w-96 w-80 h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
      onChange={(e)=> setText(e.target.value)}
       />
       
    
    <Links/>
    </div>
  )
}

export default Search;