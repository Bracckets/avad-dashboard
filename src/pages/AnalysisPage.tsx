"use client";
import React, { useState } from "react";
import NavigationHeader from "./NavigationHeader";
import OverviewHeader from "./OverviewHeader";
import SearchSection from "./SearchSection";
import TSComponent from "./TSComponent";

const modelSections = [
  { id: "linear-regression", title: "Linear Regression" },
  { id: "random-forest", title: "Random Forest" },
  { id: "xgboost", title: "XGBoost" },
  { id: "svm", title: "Support Vector Machine" },
  { id: "neural-network", title: "Neural Network" },
];

export default function AnalysisPage() {
  const [activeSection, setActiveSection] = useState("linear-regression");
  const [heartbeat, setHeartbeat] = useState<number>(70);
  const [orientation, setOrientation] = useState("Horizontal");
  const [pumpFlow, setPumpFlow] = useState<number | null>(null);
  const [totalFlow, setTotalFlow] = useState<number | null>(null);

  const handlePredict = () => {
    const orientationFactor =
      orientation === "Horizontal" ? 1.0 : orientation === "Vertical" ? 1.2 : 1.1;
    const calculatedPumpFlow = Math.min(7, heartbeat * orientationFactor * 0.05);
    const calculatedTotalFlow = Math.min(7, calculatedPumpFlow + 1.5);
    setPumpFlow(calculatedPumpFlow);
    setTotalFlow(calculatedTotalFlow);
  };

  const renderModelSection = () => (
    <section>
      <h2 className="text-2xl font-semibold mb-4">
        {modelSections.find((s) => s.id === activeSection)?.title}
      </h2>
      <p className="mb-4">Enter parameters to generate predictions:</p>
      <div className="flex flex-col gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Heartbeat (BPM)</label>
          <input
            type="number"
            value={heartbeat}
            onChange={(e) => setHeartbeat(Number(e.target.value))}
            placeholder="e.g. 72"
            className="px-4 py-2 border rounded-md w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">AVAD Orientation</label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            className="px-4 py-2 border rounded-md w-full"
          >
            <option>Horizontal</option>
            <option>Vertical</option>
            <option>Slant</option>
          </select>
        </div>
      </div>
      <button
        onClick={handlePredict}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Predict
      </button>
      {(pumpFlow !== null || totalFlow !== null) && (
        <div className="mt-6 space-y-2">
          {pumpFlow !== null && (
            <div className="p-4 bg-blue-100 rounded-md text-blue-800 font-medium">
              Pump Flow Prediction: {pumpFlow.toFixed(2)} L/min
            </div>
          )}
          {totalFlow !== null && (
            <div className="p-4 bg-green-100 rounded-md text-green-800 font-medium">
              Total Flow Prediction: {totalFlow.toFixed(2)} L/min
            </div>
          )}
        </div>
      )}
    </section>
  );

  return (
    <main className="bg-stone-50 min-h-screen flex flex-col">
      <section className="px-16 py-10 w-full mx-auto">
        <NavigationHeader />
        <div className="flex justify-between items-center w-full mb-10">
          <OverviewHeader />
          <SearchSection />
        </div>
        <div className="flex gap-10">
          <aside className="w-1/4">
            <div className="bg-white rounded-2xl shadow px-6 py-4 sticky top-10">
              <h3 className="text-lg font-semibold mb-4">Model Navigation</h3>
              <ul className="space-y-2">
                {modelSections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`text-left w-full px-3 py-2 rounded-md transition-colors duration-200 ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-800"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right side content including prediction and chart */}
          <div className="w-3/4 flex flex-col flex-grow">
            <div className="bg-white rounded-2xl shadow px-10 py-8 space-y-10">
              {renderModelSection()}
              <TSComponent
                modelName={
                  modelSections.find((s) => s.id === activeSection)?.title || "Unknown"
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
