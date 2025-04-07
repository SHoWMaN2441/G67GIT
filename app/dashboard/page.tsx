"use client";

import { FaRegListAlt, FaUsers, FaBox, FaClipboardList } from "react-icons/fa";
import { useState } from "react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const cards = [
    {
      title: "Total Categories",
      value: "4x",
      change: "+20.1% from last month",
      icon: <FaRegListAlt size={20} />,
    },
    {
      title: "Products",
      value: "6x",
      change: "+18.1% from last month",
      icon: <FaBox size={20} />,
    },
    {
      title: "Users",
      value: "4x",
      change: "+19% from last month",
      icon: <FaUsers size={20} />,
    },
    {
      title: "Orders",
      value: "8x",
      change: "+201 since last hour",
      icon: <FaClipboardList size={20} />,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">Hi, Admin 👋</h1>

      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "overview"
              ? "bg-blue-100 text-blue-800"
              : "bg-transparent text-gray-400"
          } font-medium`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "analytics"
              ? "bg-blue-100 text-blue-800"
              : "bg-transparent text-gray-400"
          } font-medium`}
        >
          Analytics
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h3 className="text-2xl font-semibold">{card.value}</h3>
              <p className="text-xs text-gray-400">{card.change}</p>
            </div>
            <div className="text-gray-400">{card.icon}</div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-1">Recent Sales</h2>
        <p className="text-sm text-gray-500">You made 15 sales this month.</p>
      </div>
    </div>
  );
};

export default Dashboard;
