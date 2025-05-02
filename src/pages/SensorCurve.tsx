import React from "react";

interface DistributionBarsProps {
  sensorValue: number; // value between 0 and 14
}

const DistributionBars: React.FC<DistributionBarsProps> = ({ sensorValue }) => {
  const numBars = 15;
  const maxHeight = 155; // in pixels
  const mean = (numBars - 1) / 2;

  const getBarHeight = (i: number): number => {
    const distance = i - mean;
    const gaussian = Math.exp(-0.5 * Math.pow(distance / 3, 2));
    return Math.round(maxHeight * gaussian);
  };

  return (
    <div className="flex items-end gap-1 h-40">
      {Array.from({ length: numBars }, (_, i) => {
        const height = getBarHeight(i);
        const isActive = i === sensorValue;

        return (
          <div
            key={i}
            className={`w-full rounded-sm transition-all duration-200 ${
              isActive ? "bg-blue-500" : "bg-gray-300"
            }`}
            style={{ height: `${height}px` }}
          />
        );
      })}
    </div>
  );
};

export default DistributionBars;
