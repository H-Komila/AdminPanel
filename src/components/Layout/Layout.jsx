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

        {/* Mobile header */}
        <div className="md:hidden p-4">
          <button onClick={() => setOpen(true)}>
            <FaBars className="text-3xl" />
          </button>
        </div>

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
