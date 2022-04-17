import React from 'react';
import { NavLink } from 'react-router-dom';
import { useResultContext } from '../contexts/ResultContextProvider';


const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/news', text: '📰 News' },
    { url: '/image', text: '📸 Images' }
  ];

const Links = () => {
  const {results} = useResultContext();

  return (
    <div className='place-content-center flex sm:justify-around justify-between items-center mt-4'>
        { results.length > 2 &&
            links.map(({url, text})=>(
                <NavLink key={text} to={url} className="m-2 mb-0 " activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2" > 
                {text} </NavLink>
            ))
        }
    </div>
  )
}

export default Links