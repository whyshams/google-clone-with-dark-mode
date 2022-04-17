import React,{ useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";
import Front from "./components/Front";
import { useResultContext } from './contexts/ResultContextProvider';



function App() {
  const[darkTheme, setDarkTheme] = useState(true);
  const {results} = useResultContext();
console.log(results);

  
  return (
    <div className={darkTheme ? "dark" : ''}>
        <div className="bg-gray-100 dark:bg-slate-900 dark:text-gray-200 min-h-screen relative">
          {
            results.length < 2 && <Front  darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
          
          {
            results.length > 2 &&  <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
          }
       
          
        
       <Routes/> 
      
        {
          
          results.length > 2 && <Footer />
        }
        </div>
    </div>
  );
}

export default App;
