import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mushuk from "./images/mushuk.jpg";
import { IoClose } from "react-icons/io5";

const Saidbar = ({ open, setOpen }) => {

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      document.body.classList.remove("lightMode");
    } else {
      document.body.classList.add("lightMode");
      document.body.classList.remove("darkMode");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-60 p-5
          bg-gradient-to-b from-purple-600 via-pink-500 to-red-400
          rounded-r-[30px]
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Close button (mobile) */}
        <div className="flex justify-end md:hidden">
          <button onClick={() => setOpen(false)}>
            <IoClose className="text-3xl text-white" />
          </button>
        </div>

        {/* Profile */}
        <img
          src={Mushuk}
          className="w-28 rounded-full mx-auto mb-6"
          alt=""
        />

        {/* Dark mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-3xl block mx-auto mb-6"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Menu */}
        <ul className="space-y-4">
          <li><Link className="menu" to="/header" onClick={()=>setOpen(false)}>About Myself</Link></li>
          <li><Link className="menu" to="/aside" onClick={()=>setOpen(false)}>My Family</Link></li>
          <li><Link className="menu" to="/article" onClick={()=>setOpen(false)}>My Friends</Link></li>
          <li><Link className="menu" to="/section" onClick={()=>setOpen(false)}>My Teacher</Link></li>
          <li><Link className="menu" to="/favorites" onClick={()=>setOpen(false)}>Favorites</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Saidbar;
