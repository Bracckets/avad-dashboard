import React from "react";

export default function StatusCard() {
  return (
    <article className="px-7 py-9 mx-auto w-full bg-white rounded-[53px] max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
        <div className="flex gap-10">
          <div className="flex flex-col justify-center items-center self-start px-5 bg-neutral-100 h-[100px] rounded-[76px] w-[100px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb39b4e98ac18294558802861fc161f25d946a89?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
              alt="Fluid flow icon"
              className="object-contain w-12 aspect-square"
            />
          </div>
          <div className="flex flex-col text-black">
            <h3 className="self-start text-2xl font-light">Fluid Flow</h3>
            <p className="mt-5 text-6xl font-bold max-md:text-4xl">85%</p>
          </div>
        </div>
        <div className="self-start px-12 py-9 text-3xl font-light text-black bg-neutral-100 rounded-[133px] max-md:px-5">
          Pump v1
        </div>
      </div>
      <div className="flex flex-col justify-center items-start px-11 py-4 mt-16 bg-neutral-100 rounded-[53px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea2993a51b45ab8f6f10bfec972e479f320dad08?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
          alt="Flow chart"
          className="object-contain max-w-full aspect-[4.05] w-[527px]"
        />
      </div>
    </article>
  );
}
