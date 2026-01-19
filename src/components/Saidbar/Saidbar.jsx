import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Mushuk from "./images/mushuk.jpg"


const Saidbar = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem("darkMode") === "true"
      );
    
      useEffect(() => {
  if(darkMode){
    document.body.classList.add("darkMode");
    document.body.classList.remove("lightMode");
  } else {
    document.body.classList.add("lightMode");
    document.body.classList.remove("darkMode");
  }
}, [darkMode]);

    
  return (
    <>
    
    <div className='bg-gradient-to-b from-purple-600 via-pink-500 to-red-400 w-100 p-5 h-screen rounded-[30px] fixed '>
        <div className=''>
            <div className=''>
                <div className='flex items-center justify-between '>
                    <a href="#"><img className='w-28  rounded-[50%] mb-10' src={Mushuk} alt="" /></a>
                <button
          className="dark-toggle text-[34px] mb-10"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
          </button> 
                </div>
                <hr className='mb-5 text-black font-bold shadow-2xl shadow-black' />
                <ul className=''>
                    <li><Link className='text-2xl text-blue-50 font-bold leading-20' to="/header">About Myself</Link></li>
                    <li><Link className='text-2xl text-blue-50 font-bold leading-20' to="/Aside">My family</Link></li>
                    <li><Link className='text-2xl text-blue-50 font-bold leading-20' to="/article">My Friends</Link></li>
                    <li><Link className='text-2xl text-blue-50 font-bold leading-20' to="/section">My Teacher</Link></li>
                    <li><Link className='text-2xl text-blue-50 font-bold leading-20' to="/favorites">Favorites</Link></li>
                </ul>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Saidbar