import React, { useEffect, useRef, useState } from 'react'
import Ustoz from "./images/ustoz.jpg"
import { FaSearch, FaGraduationCap, FaAward, FaUsers, FaChartLine } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart, AiOutlinePhone } from "react-icons/ai";

const Section = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = "1";
      imageRef.current.style.transform = "scale(1)"; 
    }
    if (contentRef.current) {
      contentRef.current.style.opacity = "1";
      contentRef.current.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 relative ">
      <div className="container mx-auto max-w-6xl">
        
        {/* O'NG TOMON YUQORI QISMDAGI TUGMALAR */}
        <div className='flex items-center justify-end gap-4 md:gap-6 mb-10 relative z-50'>
          <button onClick={() => setIsLiked(!isLiked)} className="text-2xl text-red-500">
            {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <FaSearch className="text-xl text-gray-600 cursor-pointer" />
          <AiOutlinePhone className="text-2xl text-blue-600 cursor-pointer" />
        </div>

        <ul>
          <li className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Rasm qismi - TO'G'RILANDI */}
            <div className="w-full lg:w-2/5">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <img 
                  ref={imageRef}
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl opacity-0 transition-all duration-1000 ease-out group-hover:scale-105 transition-transform"
                  src={Ustoz} 
                  alt="Ustoz Islombek Raximjanov" 
                  // Bu yerdan -rotate-12 va scale-75 klasslari olib tashlandi
                />
              </div>
            </div>

            {/* Kontent qismi */}
            <div 
              ref={contentRef}
              className="w-full lg:w-3/5 transform translate-y-10 opacity-0 transition-all duration-700 delay-300"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                Islombek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Raximjanov</span>
              </h1>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6 shadow-lg">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Namangan viloyati</h2>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/20">
                <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                    Islombek Raximjanov - tajribali o'qituvchi va mentor sifatida 8 yildan ortiq vaqt davomida 
                    yoshlarga zamonaviy texnologiyalarni o'rgatish bilan shug'ullanmoqda. Uning asosiy maqsadi 
                    har bir shogirdini nafaqat nazariy bilimlar, balki amaliy ko'nikmalar bilan ham qurollantirish. 
                    Dasturlashning asosiy konseptlaridan tortib, murakkab loyihalar yaratishgacha bo'lgan yo'lni 
                    o'z shogirdlari bilan birga bosib o'tgan. 
                    <br /><br />
                    Har bir darsni yorqin misollar, haqiqiy loyihalar va o'zaro muloqot asosida tashkil etadi. 
                    Frontend  dasturlash,  sun'iy intellekt asoslari kabi 
                    yo'nalishlarda 500 dan ortiq o'quvchilarga ustozlik qilgan. O'zining innovatsion o'qitish 
                    metodlari va shaxsiy yondashuvi bilan tanilgan.
                  </p>
                </div>

                {/* Statistika */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
                  {[
                    { icon: <FaUsers />, label: "O'quvchilar", value: "500+", color: "from-blue-500 to-cyan-500" },
                    { icon: <FaGraduationCap />, label: "Kurslar", value: "12", color: "from-purple-500 to-pink-500" },
                    { icon: <FaAward />, label: "Yillik tajriba", value: "8+", color: "from-green-500 to-emerald-500" },
                    { icon: <FaChartLine />, label: "Muvaffaqiyat darajasi", value: "100%", color: "from-orange-500 to-red-500" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-2xl bg-white shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="flex justify-center mb-2 text-2xl">
                        <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text`}>
                          {stat.icon}
                        </div>
                      </div>
                      <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tugmalar */}
              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all">
                  Kurslarga yozilish
                </button>
                <button className="px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-all">
                  Bepul darsni ko'rish
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Section;