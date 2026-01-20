import React, { useState, useRef, useEffect } from 'react'
import Rasm from './images/rasmim.jpg'
import { FaSearch, FaTimes } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AiFillPhone, AiOutlinePhone } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { FaSquareUpwork } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [showPhone, setShowPhone] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const searchRef = useRef(null);
    const phoneRef = useRef(null);
    const videoRef = useRef(null);

    // Animation for "More details" button
    const [isHovered, setIsHovered] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(!searchOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        console.log("Searching for:", e.target.value);
    };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handlePhoneClick = () => {
        setShowPhone(!showPhone);
    };

    const handleVideoClick = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
            if (phoneRef.current && !phoneRef.current.contains(event.target)) {
                setShowPhone(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                setShowVideo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    
    const youtubeVideoId = "LDZYST1FtTU";

    return (
        <>
            <div className='pl-4 md:pl-10 lg:pl-20 pr-4 md:pr-10 lg:pr-20 pt-4 md:pt-8'>
                <div>
                    <div>
                        
                        <div className='flex items-center justify-end gap-4 md:gap-8 mb-10 md:mb-20 relative'>
                            
                            <div ref={searchRef} className='relative flex items-center'>
                                <button 
                                    onClick={handleSearchClick}
                                    className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 ${searchOpen ? 'scale-110' : ''}`}
                                >
                                    {searchOpen ? (
                                        <FaTimes className='text-[24px] md:text-[30px] transition-transform duration-300' />
                                    ) : (
                                        <FaSearch className='text-[24px] md:text-[30px] transition-transform duration-300' />
                                    )}
                                </button>
                                
                                
                                <div className={`absolute right-12 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out ${searchOpen ? 'opacity-100 translate-x-0 w-48 md:w-64' : 'opacity-0 translate-x-10 w-0 pointer-events-none'}`}>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        placeholder="Search..."
                                        className="w-full px-4 py-2 rounded-full bg-white/20 dark:bg-gray-800/70 backdrop-blur-sm border border-white/30 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-white/70"
                                        autoFocus={searchOpen}
                                    />
                                </div>
                            </div>

                            
                            <button 
                                onClick={handleLikeClick}
                                className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 ${isLiked ? 'scale-110' : ''}`}
                            >
                                {isLiked ? (
                                    <AiFillHeart className='text-[28px] md:text-[34px] text-red-500 transition-all duration-300 animate-pulse' />
                                ) : (
                                    <AiOutlineHeart className='text-[28px] md:text-[34px] transition-all duration-300' />
                                )}
                                <span className={`absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${isLiked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                                    ✓
                                </span>
                            </button>

                            
                            <div ref={phoneRef} className='relative'>
                                <button 
                                    onClick={handlePhoneClick}
                                    className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 ${showPhone ? 'scale-110' : ''}`}
                                >
                                    {showPhone ? (
                                        <AiOutlinePhone className='text-[28px] md:text-[34px] transition-transform duration-300' />
                                    ) : (
                                        <AiFillPhone className='text-[28px] md:text-[34px] transition-transform duration-300' />
                                    )}
                                </button>
                                
                                <div className={`absolute right-0 top-12 md:top-14 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 md:p-4 z-50 transition-all duration-300 ease-in-out ${showPhone ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>
                                    <div className='flex items-center gap-2'>
                                        <AiFillPhone className='text-green-500 text-lg' />
                                        <span className='font-bold text-gray-800 dark:text-white text-sm md:text-base'>+998949174048</span>
                                        <button 
                                            onClick={() => setShowPhone(false)}
                                            className='ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                        >
                                            <IoClose />
                                        </button>
                                    </div>
                                    <div className='absolute -top-2 right-4 w-4 h-4 bg-white dark:bg-gray-800 transform rotate-45'></div>
                                </div>
                            </div>
                        </div>

                        
                        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12'>
                            
                            <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                                <div className='relative group'>
                                    <img 
                                        className='rounded-[50px] border-10 border-gray-600 border-double w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover'
                                        src={Rasm} 
                                        alt="Komila Xibziddinova" 
                                    />
                                    <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                                </div>
                            </div>

                            
                            <div className='w-full lg:w-2/3'>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center lg:text-left dark:text-white'>
                                    Xibziddinova Komila Sharofiddinovna
                                </h1>
                                <div className='bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 lg:p-8 border border-white/20 dark:border-gray-700/50'>
                                    <p className="text-sm md:text-base lg:text-lg font-serif text-white opacity-90 dark:opacity-80 leading-relaxed text-justify">

                                        Hello, my name is Komila Xibziddinova. I live in Parkent district, Tashkent region. I was raised in a middle-class family. There are three daughters in my family, and I am the youngest. I was born on July 1, 2003. In 2010, I started first grade and graduated from school on May 25, 2021.
                                        <br /><br />
                                        After that, I tried to enter university, but by fate, I could not. To help my family, I worked in the textile industry for three years. Later, I saw IT Academy on social media, and out of interest, I joined the IT Academy to study Front-end development. When I started studying, I barely knew how to turn on a computer. Thanks to my teacher, I learned a lot. Alhamdulillah, now, Insha'Allah, I will get a good job and make my parents, my family, and of course my teacher proud.
                                        <br /><br />
                                        I have many dreams, such as sending my parents on Umrah, taking good care of my mother's health, and many others. I trust that, with Allah's help, one day I will achieve my dreams and goals, Insha'Allah.
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className='flex justify-center mt-8 md:mt-12'>
                            <button 
                                onClick={handleVideoClick}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`
                                    relative px-6 md:px-8 py-3 md:py-4 
                                    bg-gradient-to-r from-purple-600 to-pink-500 
                                    text-white font-semibold rounded-full 
                                    transition-all duration-300 transform
                                    ${isHovered ? 'scale-105 shadow-xl -translate-y-1' : 'scale-100 shadow-lg'}
                                    hover:from-purple-700 hover:to-pink-600
                                    active:scale-95
                                    flex items-center gap-2
                                    text-base md:text-lg
                                `}
                            >
                                <span>Watch My Video</span>
                                <FaYoutube className={`text-xl transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`} />
                                <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        
                        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 rounded-full mt-12 md:mt-16 lg:mt-24'>
                            {[
                                { 
                                    icon: <FaYoutube />, 
                                    url: "https://www.youtube.com/watch?v=UuIt8bBNdV8",
                                    color: "text-red-600"
                                },
                                { 
                                    icon: <FaSquareUpwork />, 
                                    url: "https://www.upwork.com/nx/signup/please-verify",
                                    color: "text-blue-950"
                                },
                                { 
                                    icon: <AiFillGithub />, 
                                    url: "https://github.com/H-Komila",
                                    color: "text-black dark:text-white"
                                },
                                { 
                                    icon: <FaInstagram />, 
                                    url: "https://www.instagram.com/komi_la571_developer",
                                    color:"text-pink-600"
                                },
                                { 
                                    icon: <FaTelegram />, 
                                    url: "@Komi_la571",
                                    color: "text-blue-500"
                                },
                                { 
                                    icon: <FaLinkedin />, 
                                    url: "https://www.linkedin.com/in/komila-xibziddinova-66b7a4399/",
                                    color: "text-blue-700"
                                },
                            ].map((item, index) => (
                                <a 
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                        ${item.color} 
                                        text-3xl md:text-4xl lg:text-5xl 
                                        rounded-full 
                                        transition-all duration-300 
                                        hover:scale-110 hover:shadow-xl
                                        p-2 md:p-3
                                    `}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            
            {showVideo && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
                    <div 
                        ref={videoRef}
                        className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl animate-scaleIn"
                    >
                        
                        <button
                            onClick={handleCloseVideo}
                            className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all duration-300 hover:scale-110"
                        >
                            <IoClose className="text-2xl" />
                        </button>
                        
                        
                        <div className="relative pt-[56.25%]"> 
                            <iframe
                                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            />
                        </div>
                        
                        
                        <div className="p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm">
                            <h3 className="text-white text-lg md:text-xl font-semibold">
                                Komila Xibziddinova - Portfolio
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Watch my introduction video to learn more about me
                            </p>
                        </div>
                    </div>
                    
                    
                    <div 
                        onClick={handleCloseVideo}
                        className="absolute inset-0 -z-10 cursor-pointer"
                    />
                </div>
            )}

            
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
                
                .line-clamp-5 {
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .line-clamp-6 {
                    display: -webkit-box;
                    -webkit-line-clamp: 6;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                @media (max-width: 640px) {
                    .w-64 {
                        width: 16rem;
                        height: 16rem;
                    }
                }
            `}</style>
        </>
    )
}

export default Header