import React from "react";
import DistributionBars from "./SensorCurve";

export default function StatusCard() {
  return (
    <article className="px-5 py-5 w-full bg-white rounded-2xl shadow max-md:mt-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-20 h-20 bg-neutral-100 rounded-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb39b4e98ac18294558802861fc161f25d946a89?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
              alt="Fluid flow icon"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="text-black">
            <h3 className="text-base font-light">Fluid Flow</h3>
            <p className="mt-1 text-3xl font-bold max-md:text-2xl">85%</p>
          </div>
        </div>
        <div className="px-6 py-3 text-base font-light text-black bg-neutral-100 rounded-full">
          Pump v1
        </div>
      </div>

      <div className="mt-8 px-5 py-4 bg-neutral-100 rounded-xl">
          <DistributionBars sensorValue={7} />
          
</div>
    </article>
  );
}
