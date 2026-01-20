import { useState } from "react";
import Saidbar from "../Saidbar/Saidbar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Saidbar open={open} setOpen={setOpen} />

      {/* Content */}
      <div className="flex-1 md:ml-72">
        
        {/* Fixed Mobile header */}
        <div className="md:hidden fixed top-0 left-0 right-0 p-4 bg-white shadow-md z-50 flex items-center">
          <button onClick={() => setOpen(true)}>
            <FaBars className="text-3xl text-blue-600" />
          </button>
          {/* Agar xohlasangiz bu yerga logo yoki sarlavha yozish mumkin */}
          <span className="ml-4 font-bold text-indigo-700">Dashboard</span>
        </div>

        {/* Main qismiga pt-20 qo'shdik, chunki header tepada fixed turibdi */}
        <main className="p-6 pt-20 md:pt-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;