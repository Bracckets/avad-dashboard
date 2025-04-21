import React from "react";

export default function WhatIfAnalysis() {
  return (
    <article className="flex relative flex-col py-6 pr-2.5 pl-8 w-full min-h-[608px] rounded-[53px] max-md:pl-5 max-md:mt-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9360d16444fc59da45e61095b9848824fa7b317a?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
        alt="Analysis background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap gap-10 max-md:max-w-full">
        <div className="flex-1">
          <button className="flex flex-col justify-center items-center px-6 bg-neutral-400 bg-opacity-80 h-[108px] rounded-[78px] w-[108px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2748e53d3a567f68d885cbf795a80278cd4186f7?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
              alt="Analysis action 1"
              className="object-contain w-12 aspect-square"
            />
          </button>
          <button className="flex flex-col justify-center items-center px-6 mt-4 bg-neutral-400 bg-opacity-80 h-[108px] rounded-[78px] w-[108px] max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2508fff71167db258b4ac852fa3f4cbc02fe41c?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
              alt="Analysis action 2"
              className="object-contain w-12 aspect-square"
            />
          </button>
        </div>
        <button className="flex flex-col justify-center items-center self-start px-6 bg-neutral-400 bg-opacity-80 h-[108px] rounded-[78px] w-[108px] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a16440e01cbb0f1f6a8b38615f2e3ca321588b5?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
            alt="Analysis action 3"
            className="object-contain w-12 aspect-square"
          />
        </button>
      </div>
      <div className="relative mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col text-white max-md:mt-10 max-md:max-w-full">
              <span className="self-start px-4 py-3 text-2xl font-extralight bg-zinc-600 bg-opacity-70 rounded-[78px] max-md:pr-5">
                What-if Analysis
              </span>
              <h3 className="mt-1.5 text-6xl font-light max-md:text-4xl">
                Start a virtual simulation
              </h3>
            </div>
          </div>
          <div className="ml-5 w-1/5 max-md:ml-0 max-md:w-full">
            <div className="flex relative shrink-0 mx-auto mt-40 bg-white h-[108px] rounded-[78px] w-[108px] max-md:mt-10" />
          </div>
        </div>
      </div>
    </article>
  );
}
