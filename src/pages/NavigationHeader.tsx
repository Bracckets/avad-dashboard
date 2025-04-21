import React from "react";
import logo from "../assets/logo.svg";

export default function NavigationHeader() {
  return (
    <header className="flex flex-wrap gap-5 justify-between ml-20 max-w-full text-black w-[1600px]">
      <img
        src={logo}
        alt="AVAD website logo"
        className="object-contain shrink-0 my-auto w-50 aspect-square"
      />
      <nav className="flex flex-wrap gap-5 items-center text-3xl font-medium whitespace-nowrap">
        <div className="self-stretch my-auto w-[205px]">
          <button className="px-5 py-10 w-full bg-white rounded-[58px] max-md:px-5 hover:bg-black hover:text-white transition-colors duration-300">
            Overview
          </button>
        </div>
        <div className="self-stretch my-auto w-[205px]">
          <button className="px-5 py-10 w-full bg-zinc-100 rounded-[58px] max-md:px-5 hover:bg-black hover:text-white transition-colors duration-300">
            Analysis
          </button>
        </div>
        <div className="self-stretch my-auto w-[205px]">
          <button className="px-5 py-10 w-full bg-zinc-100 rounded-[58px] max-md:px-5 hover:bg-black hover:text-white transition-colors duration-300">
            Docs
          </button>
        </div>
        <div className="self-stretch my-auto w-[205px]">
          <button className="px-5 py-10 w-full bg-zinc-100 rounded-[58px] max-md:px-5 hover:bg-black hover:text-white transition-colors duration-300">
            Logs
          </button>
        </div>
      </nav>
    </header>
  );
}
