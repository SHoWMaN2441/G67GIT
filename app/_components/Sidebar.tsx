"use client"; // faqat clientda ishlaydi

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { BiSolidCategory } from "react-icons/bi";
import { FaProductHunt, FaFirstOrder } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { IoSettingsOutline, IoHome } from "react-icons/io5";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="sider-bar w-[300px] h-screen bg-slate-900">
        <div className="logo text-white text-2xl font-bold p-4">Logo</div>
        <div className="search-bar p-4"></div>
        <div className="menu p-4">
          <ul className="text-white">
            <Link className="text-white" href="/dashboard">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/dashboard" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <RxDashboard />
                Dashboard
              </li>
            </Link>
            <Link className="text-white" href="/categories">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/categories" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <BiSolidCategory />
                Categories
              </li>
            </Link>
            <Link className="text-white" href="/products">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/products" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <FaProductHunt />
                Products
              </li>
            </Link>
            <Link className="text-white" href="/users">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/users" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <LuUsersRound />
                Users
              </li>
            </Link>
            <Link className="text-white " href="/orders">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/orders" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <FaFirstOrder />
                Orders
              </li>
            </Link>
            <Link className="text-white" href="/settings">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/settings" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <IoSettingsOutline />
                Settings
              </li>
            </Link>
            <Link className="text-white no-underline" href="/home">
              <li
                className={`p-1 flex items-center gap-2 ${
                  pathname === "/home" ? "bg-slate-700" : ""
                } hover:bg-slate-700 text-lg w-full h-14 rounded-md cursor-pointer`}
              >
                <IoHome />
                Home
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
