import {
  Menu,
  CircleUser,
  Search,
  X,
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Header({
  toggleSidebar,
  navbar,
  NavbarOpen,
  closeNavbar,
}) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/sign-up"); // redirect to sign-up or sign-in
    } catch (error) {
      alert("Error logging out: " + error.message);
    }
  };
  return (
    <header className="lg:p-4 flex justify-between items-center relative p-3">
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleSidebar}
          className="hidden lg:flex cursor-pointer"
        >
          <Menu />
        </button>
        <button onClick={navbar} className="lg:hidden cursor-pointer">
          <Menu />
        </button>

        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1 border-2 border-gray-500 rounded-xl focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <CircleUser />
        Profile
      </div>
      {NavbarOpen && (
        <nav className="absolute top-0 left-0 w-full bg-neutral-100 shadow-md flex flex-col gap-3 items-center  lg:hidden">
          <NavLink
            to="/"
            onClick={closeNavbar}
            className={({ isActive }) =>
              `flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300 ${
                isActive ? "bg-stone-200" : ""
              }`
            }
          >
            {" "}
            <LayoutDashboard size={20} />
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            onClick={closeNavbar}
            className={({ isActive }) =>
              `flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300 ${
                isActive ? "bg-stone-200" : ""
              }`
            }
          >
            {" "}
            <ShoppingCart size={20} />
            Orders
          </NavLink>
          <NavLink
            to="/products"
            onClick={closeNavbar}
            className={({ isActive }) =>
              `flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300 ${
                isActive ? "bg-stone-200" : ""
              }`
            }
          >
            {" "}
            <Package size={20} />
            Products
          </NavLink>
          <NavLink
            to="/customers"
            onClick={closeNavbar}
            className={({ isActive }) =>
              `flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300 ${
                isActive ? "bg-stone-200" : ""
              }`
            }
          >
            {" "}
            <Users size={20} />
            Customers
          </NavLink>
          <NavLink
            to="/settings"
            onClick={closeNavbar}
            className={({ isActive }) =>
              `flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300 ${
                isActive ? "bg-stone-200" : ""
              }`
            }
          >
            {" "}
            <Settings size={20} />
            Settings
          </NavLink>
          <button
            onClick={() => {
              closeNavbar();
              handleLogout();
            }}
            className="flex items-center gap-2 px-30 p-3 w-full text-center hover:bg-stone-300"
          >
            <LogOut size={20} />
            Logout
          </button>
          <X onClick={closeNavbar} className="mb-4" />
        </nav>
      )}
    </header>
  );
}
