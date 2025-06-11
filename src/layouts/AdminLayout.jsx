import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

export default function AdminLayout(){
    const [isSideBarOpen , setSideBarOpen] = useState(true);
    const [isNavbarOpen , setIsNavbarOpen] = useState(false);
    const toggleSidebar = () => setSideBarOpen(prev => !prev)
    const toggleNavbar = ()=> setIsNavbarOpen(prev => !prev)
    return(
      <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar isOpen={isSideBarOpen} />
      <div className="flex flex-col w-full h-full">
        <Header
          toggleSidebar={toggleSidebar}
          closeNavbar={toggleNavbar}
          navbar={toggleNavbar}
          NavbarOpen={isNavbarOpen}
        />
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </div>
      </div>
    </div>
    )
}