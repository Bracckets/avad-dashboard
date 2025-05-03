import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function NavigationHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Overview", path: "/", disabled: false },
    { label: "Analysis", path: "/analysis", disabled: true },
    { label: "Docs", path: "/docs", disabled: false },
    { label: "Logs", path: "/logs", disabled: true },
  ];

  return (
    <header className="flex items-center justify-between mx-auto">
      <img
        src={logo}
        alt="AVAD website logo"
        className="h-36 w-auto object-contain"
      />

      <nav className="flex space-x-4 text-lg font-medium">
        {navItems.map(({ label, path, disabled }) => (
          <button
            key={label}
            onClick={() => !disabled && navigate(path)}
            disabled={disabled}
            className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              location.pathname === path
                ? "bg-white text-black shadow-md"
                : "bg-zinc-100 text-gray-700"
            } ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
