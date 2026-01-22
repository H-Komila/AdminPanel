import React, { useState, useRef, useEffect } from 'react'
import Aa from "./images/1.png"
import Ab from "./images/2.png"
import Ad from "./images/3.png"
import Ac from "./images/4.png"
import Ag from "./images/5.png"
import Ax from "./images/6.png"
import Ah from "./images/7.png"
import Ak from "./images/8.png"
import Al from "./images/9.png"

// Ikonkalar
import { FaSearch, FaTimes } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const projects = [
  { img: Aa, url: "https://gren-shop-azure.vercel.app/", title: "Green Shop" },
  { img: Ab, url: "https://jamoish.vercel.app/", title: "Jamoish" },
  { img: Ad, url: "https://coffeeroasters-subscription-site-dun.vercel.app/", title: "Coffee Roasters" },
  { img: Ac, url: "https://crud-eight-cyan.vercel.app/", title: "CRUD Project 1" },
  { img: Ag, url: "https://crud-eight-cyan.vercel.app/", title: "CRUD Project 2" },
  { img: Ax, url: "https://finsweet-six-alpha.vercel.app/", title: "Finsweet" },
  { img: Ah, url: "https://skilline-sigma.vercel.app/", title: "Skilline" },
  { img: Ak, url: "https://shunchaki-alpha.vercel.app/", title: "Shunchaki" },
  { img: Al, url: "https://robo-school.vercel.app/", title: "Robo School" },
]

const Aside = () => {
  // Holatlar (States)
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const searchRef = useRef(null);
  const phoneRef = useRef(null);

  // Tashqarini bosganda yopilish funksiyasi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setSearchOpen(false);
      if (phoneRef.current && !phoneRef.current.contains(event.target)) setShowPhone(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Loyihalarni qidiruvga qarab filtrlash
  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='p-6 md:p-10 relative'>
      <div className="container mx-auto">
        
        {/* --- YUQORI TUGMALAR --- */}
        <div className='flex items-center justify-end gap-3 mb-8 relative z-1'>
          
          {/* Qidiruv tugmasi */}
          <div ref={searchRef} className='relative flex items-center'>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all border border-gray-100"
            >
              {searchOpen ? <FaTimes className="text-gray-600" /> : <FaSearch className="text-gray-600" />}
            </button>
            <div className={`absolute right-12 transition-all duration-300 ${searchOpen ? 'opacity-100 w-48 md:w-64' : 'opacity-0 w-0 pointer-events-none'}`}>
              <input
                type="text"
                placeholder="Loyiha nomi..."
                className="w-full px-4 py-2 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Like tugmasi */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all border border-gray-100"
          >
            {isLiked ? <AiFillHeart className='text-2xl text-red-500 animate-pulse' /> : <AiOutlineHeart className='text-2xl text-gray-500' />}
          </button>

          {/* Telefon tugmasi */}
          <div ref={phoneRef} className='relative'>
            <button 
              onClick={() => setShowPhone(!showPhone)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all border border-gray-100"
            >
              <AiFillPhone className={`text-2xl ${showPhone ? 'text-blue-600' : 'text-gray-500'}`} />
            </button>
            {showPhone && (
              <div className='absolute right-0 top-12 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 animate-in fade-in zoom-in duration-200'>
                <div className='flex items-center gap-3 whitespace-nowrap'>
                  <div className='bg-blue-100 p-2 rounded-full'><AiFillPhone className='text-blue-600' /></div>
                  <span className='font-bold text-gray-800'>+998 94 917 40 48</span>
                  <IoClose className="cursor-pointer text-gray-400 hover:text-gray-800" onClick={() => setShowPhone(false)} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* --- SARLAVHA --- */}
        <h1 className='text-center text-4xl font-extrabold mb-3 text-gray-800'>Proyectlarim</h1>
        <p className='text-center text-[13px] font-[300] opacity-60 tracking-widest mb-12'>Hali oxirigacha bitmaganlari ham bor 😁</p>
        
        {/* --- LOYIHALAR GRIDI --- */}
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center'>
          {filteredProjects.map((project, index) => (
            <li key={index} className='bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 border border-gray-100'>
              <div className='overflow-hidden relative'>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className='w-full h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105'
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className='p-5 text-center'>
                <h3 className='font-bold text-xl mb-3 text-gray-800'>{project.title}</h3>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='inline-block w-full bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-blue-200'
                >
                  Saytni ko'rish
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Agar natija topilmasa */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">Hech qanday loyiha topilmadi 😕</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Aside