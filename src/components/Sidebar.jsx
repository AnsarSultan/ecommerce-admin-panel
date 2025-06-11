import { NavLink } from "react-router";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import IconImg from '../../public/Logo.png'

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`hidden h-screen bg-white shadow-xl lg:flex flex-col gap-3 px-5 pt-10 text-md font-semibold
    transition-all duration-300 ease-in-out
    ${isOpen ? "w-52" : "w-25"}`}
    >
      <NavLink
        to="/"
        className="flex items-center gap-2 py-3 px-4"
      >
        <img src={IconImg} alt="" className="w-[20px]"/>
        {isOpen && <span className="hidden lg:flex text-blue-800 font-bold">Falcon</span>}
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <LayoutDashboard size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Dashboard</span>}
      </NavLink>
      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <ShoppingCart size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Orders</span>}
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <Package size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Products</span>}
      </NavLink>
      <NavLink
        to="/customers"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <Users size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Customers</span>}
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <Settings size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Settings</span>}
      </NavLink>
      <NavLink
        to="/sign-in"
        className={({ isActive }) =>
          `flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-stone-200 ${
            isActive ? "bg-stone-200" : " "
          }`
        }
      >
        <LogOut size={20} />{" "}
        {isOpen && <span className="hidden lg:flex">Logout</span>}
      </NavLink>
    </aside>
  );
}
