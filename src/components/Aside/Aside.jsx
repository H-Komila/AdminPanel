import React from 'react'
import Aa from "./images/1.png"
import Ab from "./images/2.png"
import Ad from "./images/3.png"
import Ac from "./images/4.png"
import Ag from "./images/5.png"
import Ax from "./images/6.png"
import Ah from "./images/7.png"
import Ak from "./images/8.png"
import Al from "./images/9.png"

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
  return (
    <div className='p-6 md:p-10'>
      <h1 className='text-center text-3xl font-bold mb-5 text-gray-800'>Proyectlarim</h1>
      <p className='text-center text-[12px] font-[300] opacity-60 tracking-widest mb-10'>Hali ohrigacham bitmaganlariham bor 😁</p>
      
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center'>
        {projects.map((project, index) => (
          <li key={index} className='bg-white rounded-2xl overflow-hidden shadow-lg group'>
            {/* Rasm qismi */}
            <div className='overflow-hidden'>
              <img 
                src={project.img} 
                alt={project.title} 
                className='w-full h-60 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110'
              />
            </div>
            
            {/* Link va Ma'lumot qismi (Rasm tagida) */}
            <div className='p-4 text-center'>
              <h3 className='font-semibold text-lg mb-2 text-gray-700'>{project.title}</h3>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='inline-block bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-blue-700'
              >
                Saytni ko'rish
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Aside