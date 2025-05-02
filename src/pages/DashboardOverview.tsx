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
      <section className="px-16 pt-10 w-full mx-auto">
        <NavigationHeader />

        <div className="flex justify-between items-center w-full">
          <OverviewHeader />
          <SearchSection />
        </div>

        <div className="flex justify-end items-center w-full mt-10">
          <div className="flex flex-col gap-6 justify-end items-center w-1/3">
            <StatusCard />
            <SimulationResults />
          </div>
        </div>

      </section>
    </main>
  );
}
