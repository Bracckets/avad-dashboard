"use client";
import React from "react";
import NavigationHeader from "./NavigationHeader";
import OverviewHeader from "./OverviewHeader";
import SearchSection from "./SearchSection";
import StatusCard from "./StatusCard";
import SimulationResults from "./SimulationResults";
import WhatIfAnalysis from "./WhatIfAnalysis";
import SensorCapture from "./SensorCapture";
import DynamicChart from "./DynamicChart";
import LVADSystem from "./LVADSystem";

export default function DashboardOverview() {
  return (
    <main className="bg-stone-50">
      <section className="px-16 py-10 w-full mx-auto">
        <NavigationHeader />

        <div className="flex justify-between items-center w-full">
          <OverviewHeader />
          <SearchSection />
        </div>

        <div className="flex justify-between items-start w-full mt-10 gap-6">
          <div className="flex flex-col gap-6 justify-end items-center w-1/2">
            <DynamicChart />
          </div>
          <div className="flex flex-col gap-6 justify-end items-center w-1/3">
            <StatusCard />
            <SimulationResults />
          </div>
          <div className="flex flex-col gap-6 justify-end items-center w-1/3">
            <StatusCard />
            <SensorCapture />
          </div>
        </div>
      </section>
    </main>
  );
}
