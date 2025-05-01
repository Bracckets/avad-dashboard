import React from "react";

export default function SimulationResults() {
  return (
    <article className="flex flex-col px-7 py-6 mx-auto w-full bg-white rounded-[53px] max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex gap-4 self-start py-1 bg-neutral-100 rounded-[250px] w-70">
        <div className="flex flex-col items-center px-3.5 pt-2.5 pb-5 bg-blue-600 h-[84px] rounded-[90px] w-[90px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/097e94dd5ed7c86d4879f40529be07dcd6183bb0?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
            alt="User avatar"
            className="object-contain aspect-[1.04] w-[57px]"
          />
        </div>
        <span className="my-auto text-3xl font-semibold text-black basis-auto justify-end">
          Ahmed
        </span>
      </div>
      <div className="self-end mt-6 max-w-full w-[528px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[78%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10">
              <section className="w-full">
                <h4 className="text-2xl font-semibold text-neutral-400">
                  Simulation Result
                </h4>
                <p className="text-6xl font-light text-black max-md:text-4xl">
                  Success
                </p>
              </section>
              <section className="mt-8 w-full">
                <h4 className="text-2xl font-semibold text-neutral-400">
                  Running Time
                </h4>
                <p className="text-6xl font-light text-black max-md:text-4xl">
                  3m31s
                </p>
              </section>
              <section className="mt-8 w-full">
                <h4 className="text-2xl font-semibold text-neutral-400">
                  Warnings
                </h4>
                <p className="text-5xl font-light text-red-600 max-md:text-4xl">
                  Error Code 242
                </p>
              </section>
            </div>
          </div>
          <div className="ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <div className="flex shrink-0 mx-auto mt-96 bg-blue-600 h-[108px] rounded-[78px] w-[108px] max-md:mt-10">
              <img src=""/>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
