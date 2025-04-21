"use client";
import React from "react";
import NavigationHeader from "./NavigationHeader";
import OverviewHeader from "./OverviewHeader";
import SearchSection from "./SearchSection";
import StatusCard from "./StatusCard";
import SimulationResults from "./SimulationResults";
import WhatIfAnalysis from "./WhatIfAnalysis";

export default function DashboardOverview() {
  return (
    <main className="bg-stone-50">
      <section className="px-16 pt-10 pb-5 w-full max-md:px-5 max-md:max-w-full">
        <NavigationHeader />

        <div className="flex flex-wrap gap-10 mt-24 w-full max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <OverviewHeader />
          <SearchSection />
        </div>

        <section className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <article className="w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-end pt-44 pr-9 pl-20 w-full bg-zinc-300 pb-[468px] max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9153ef7cab4f026a899c4d06b58bc35f360c79?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                  alt="Control icon"
                  className="object-contain w-8 aspect-square max-md:mr-2.5"
                />
                <div className="flex flex-col justify-center items-center px-3 mt-6 rounded-full bg-neutral-100 h-[58px] w-[58px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e90b8e8dfbbe7fa1f1bd6f6c0ece350ae6217d?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                    alt="Status icon"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d699e1085dedfae14747c7ba383104f0043dd5e7?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
                  alt="Settings icon"
                  className="object-contain mt-6 w-8 aspect-square max-md:mr-2.5"
                />
                <h2 className="self-center mt-24 text-6xl font-light text-center text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                  VAD Graphical Model
                  <br />
                  To be here
                </h2>
              </div>
            </article>

            <article className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="w-[68%] max-md:w-full">
                    <StatusCard />
                  </div>
                  <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start px-11 py-12 w-full font-semibold text-black bg-white rounded-[53px] max-md:px-5 max-md:mt-10">
                      <h3 className="text-4xl">
                        Sensor
                        <br />
                        Capture
                      </h3>
                      <div className="flex gap-1 mt-36 max-md:mt-10">
                        <span className="grow text-6xl max-md:text-4xl">
                          1246{" "}
                        </span>
                        <span className="self-start text-xl">records/s</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-6/12 max-md:w-full">
                      <SimulationResults />
                    </div>
                    <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <WhatIfAnalysis />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}
