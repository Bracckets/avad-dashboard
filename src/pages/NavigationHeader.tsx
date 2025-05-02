import React, { useState } from "react";
import logo from "../assets/logo.svg";

export default function NavigationHeader() {
  const [activePage, setActivePage] = useState("Overview");

  const navItems = ["Overview", "Analysis", "Docs", "Logs"];

  return (
    <header className="flex items-center justify-between max-w-screen-xl mx-auto">
      <img
        src={logo}
        alt="AVAD website logo"
        className="h-24 w-auto object-contain"
      />

      <nav className="flex space-x-4 text-lg font-medium">
        {navItems.map((label) => (
          <button
            key={label}
            onClick={() => setActivePage(label)}
            className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              activePage === label
                ? "bg-white text-black shadow-md"
                : "bg-zinc-100 text-gray-700"
            } hover:bg-black hover:text-white`}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
