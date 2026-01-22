import React, { useEffect, useRef, useState } from 'react'
import Yorqinbek from "./images/yorqinbek.jpg"
import Farzona from "./images/farzona.jpg"
import Mirjalol from "./images/mirjalol.jpg"
import Sevara from "./images/sevara.jpg"
import Abdurahmon from "./images/abdurahmon.jpg"
import Xafiz from "./images/xafiz.jpg"
import Nurdavlet from "./images/nurdavlet.jpg"
import Johongir from "./images/johongir.jpg"
// Ikonkalar
import { TiHeartFullOutline } from "react-icons/ti"
import { FaSearch, FaTimes } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Article = () => {
  const cardRefs = useRef([])
  
  // Header funksiyalari uchun holatlar (States)
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const searchRef = useRef(null);
  const phoneRef = useRef(null);

  const students = [
    { id: 1, name: "Yorqinbek", img: Yorqinbek, location: "Chorsu Qora Tosh", year: "2011-yil", school: "324-maktab", academy: "IT Time Academy" },
    { id: 2, name: " Xikmatov Johongir", img: Johongir, location: "Toshkent viloyati Yangiyo'l shahri", year: "2010-yil", school: "6-maktab", academy: "IT Time Academy" },
    { id: 3, name: "Farzona Xatamova", img: Farzona, location: "Toshkent viloyati Bo'ka tumani", year: "2009-yil",  academy: "IT Time Academy" },
    { id: 4, name: "Mirjalol", img: Mirjalol, location: "Toshkent viloyati Parkent tuamani", year: "2009-yil", school: "31-maktab", academy: "IT Time Academy" },
    { id: 5, name: "Sevara Yo'ldoshova", img: Sevara, location: "Toshkent viloyatoi Chirchiq", year: "2005-yil", academy: "IT Time Academy" },
    { id: 6, name: "Abdurahmon", img: Abdurahmon, location: "Nurafshon shahar", year: "2007-yil", academy: "IT Time Academy" },
    { id: 7, name: "Nurdavlet", img: Nurdavlet, location: "Sergeli", year: "2004-yil", academy: "IT Time Academy" },
    { id: 8, name: "Xafiz", img: Xafiz, location: "Sergeli", year: "null",  academy: "IT Time Academy" }
  ]

  // Intersection Observer animatsiya uchun
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-10')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  // Tashqarini bosganda yopilish funksiyasi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setSearchOpen(false);
      if (phoneRef.current && !phoneRef.current.contains(event.target)) setShowPhone(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-6 relative">
      <div className="container mx-auto">
        
        {/* --- YUQORI TUGMALAR BLOKI --- */}
        <div className='flex items-center justify-end gap-3 md:gap-5 mb-6 relative z-1'>
          
          {/* Qidiruv */}
          <div ref={searchRef} className='relative flex items-center'>
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all"
            >
              {searchOpen ? <FaTimes className="text-gray-700" /> : <FaSearch className="text-gray-700" />}
            </button>
            <div className={`absolute right-12 transition-all duration-500 ${searchOpen ? 'opacity-100 w-40 md:w-60' : 'opacity-0 w-0 pointer-events-none'}`}>
              <input
                type="text"
                placeholder="Ism qidirish..."
                className="w-full px-4 py-2 rounded-full border border-gray-200 shadow-inner focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Like */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all"
          >
            {isLiked ? <AiFillHeart className='text-2xl text-red-500 animate-bounce' /> : <AiOutlineHeart className='text-2xl text-gray-600' />}
          </button>

          {/* Telefon */}
          <div ref={phoneRef} className='relative'>
            <button 
              onClick={() => setShowPhone(!showPhone)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 transition-all"
            >
              {showPhone ? <AiOutlinePhone className="text-2xl text-blue-600" /> : <AiFillPhone className="text-2xl text-blue-600" />}
            </button>
            <div className={`absolute right-0 top-12 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-300 ${showPhone ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
               <div className='flex items-center gap-3 whitespace-nowrap'>
                  <div className='bg-green-100 p-2 rounded-full'><AiFillPhone className='text-green-600' /></div>
                  <span className='font-bold text-gray-800 text-sm'>+998949174048</span>
                  <IoClose className="cursor-pointer text-gray-400 hover:text-gray-600" onClick={() => setShowPhone(false)} />
               </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Bizning O'quvchilar
        </h1>
        
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
          {students
            .filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((student, index) => (
            <li 
              key={student.id}
              ref={el => cardRefs.current[index] = el}
              className='bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 translate-y-10'
            >
              <div className='p-4 md:p-5'>
                <div className='relative overflow-hidden rounded-2xl mb-4 md:mb-6 group'>
                  <img 
                    className='w-full h-48 md:h-56 lg:h-64 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700' 
                    src={student.img} 
                    alt={student.name}
                    loading="lazy"
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
                
                <h1 className='text-2xl md:text-3xl mb-2 md:mb-3 text-gray-800 font-bold truncate'>
                  {student.name}
                </h1>
                <div className='space-y-1 md:space-y-2 mb-4 md:mb-6'>
                  <p className='text-gray-600 text-sm md:text-base flex items-center'>
                    <span className='mr-2'>📍</span> {student.location}
                  </p>
                  <p className='text-gray-600 text-sm md:text-base flex items-center'>
                    <span className='mr-2'>📅</span> {student.year}
                  </p>
                  {student.school && (
                    <p className='text-gray-600 text-sm md:text-base flex items-center'>
                      <span className='mr-2'>🏫</span> {student.school}
                    </p>
                  )}
                </div>
                
                <div className='flex items-center justify-between'>
                  <p className='text-lg md:text-xl text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full'>
                    {student.academy}
                  </p>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <TiHeartFullOutline 
                        key={i}
                        className='text-xl md:text-2xl text-red-400 hover:text-red-600 cursor-pointer transform hover:scale-125 transition-transform duration-300'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Article