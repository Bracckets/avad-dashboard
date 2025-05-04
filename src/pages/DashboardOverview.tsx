"use client";
import NavigationHeader from "./NavigationHeader";
import OverviewHeader from "./OverviewHeader";
import SearchSection from "./SearchSection";
import StatusCard from "./StatusCard";
import SimulationResults from "./SimulationResults";
import SensorCapture from "./SensorCapture";
import DynamicChart from "./DynamicChart";

import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    Events: {
      endpoint: "https://2at7hn3s5naprbau4t7txpc5eu.appsync-api.me-south-1.amazonaws.com/event",
      region: "me-south-1",
      defaultAuthMode: "apiKey",
      apiKey: import.meta.env.VITE_APPSYNC_API_KEY
    }
  }
});

const flowIcon = "https://cdn.builder.io/api/v1/image/assets/TEMP/eb39b4e98ac18294558802861fc161f25d946a89?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed";

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
          {/* Left: chart */}
          <div className="flex flex-col gap-6 justify-end items-center w-1/2">
            <DynamicChart />
          </div>

          {/* Middle: Pump Flow (sensor 22) */}
          <div className="flex flex-col gap-6 justify-end items-center w-1/3">
            <StatusCard
              sensorId={22}
              title="Pump Flow"
              unit="ML/m"
              sensorName="pump_flow"
              iconSrc={flowIcon}
            />
            <SimulationResults />
          </div>

          {/* Right: Total Flow (sensor 21) */}
          <div className="flex flex-col gap-6 justify-end items-center w-1/3">
            <StatusCard
              sensorId={21}
              title="Total Flow"
              unit="ML/m"
              sensorName="total_flow"
              iconSrc={flowIcon}
            />
            <SensorCapture />
          </div>
        </div>
      </section>
    </main>
  );
}
