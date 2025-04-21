import React from "react";

export default function OverviewHeader() {
  return (
    <section className="max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[67%] max-md:ml-0 max-md:w-full">
          <h2 className="text-8xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Overview
          </h2>
          <h3 className="self-stretch my-auto text-8xl font-extralight text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            VAD Health
          </h3>
        </div>
      </div>
    </section>
  );
}
