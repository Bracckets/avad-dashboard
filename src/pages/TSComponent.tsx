"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface FlowDataPoint {
  timestamp: string;
  flow: number;
}

interface Props {
  modelName: string;
}

const TSComponent: React.FC<Props> = ({ modelName }) => {
  const [data, setData] = useState<FlowDataPoint[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const generateFlow = (model: string): number => {
    switch (model) {
      case "Linear Regression":
        return parseFloat((3.5 + Math.random() * 1).toFixed(2));
      case "Random Forest":
        return parseFloat((3.8 + Math.random() * 1.5).toFixed(2));
      case "XGBoost":
        return parseFloat((4.0 + Math.sin(Date.now() / 1000) + Math.random()).toFixed(2));
      case "Support Vector Machine":
        return parseFloat((3.9 + Math.random() * 1.1).toFixed(2));
      case "Neural Network":
        return parseFloat((4.2 + Math.random() * 2).toFixed(2));
      default:
        return parseFloat((3.5 + Math.random()).toFixed(2));
    }
  };

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setData((prev) => [
        ...prev.slice(-29),
        {
          timestamp: new Date().toISOString(),
          flow: generateFlow(modelName),
        },
      ]);
    }, 1000);
  };

  // Reset on model change
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setData([]);
    setIsPaused(false);
    startInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [modelName]);

  const handlePause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (!intervalRef.current) {
      setIsPaused(false);
      startInterval();
    }
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <h3 className="text-xl font-semibold">Simulated Run — {modelName}</h3>
        <div className="flex gap-3">
          <button
            onClick={handlePause}
            disabled={isPaused}
            className="px-4 py-2 rounded-md text-white bg-yellow-500 hover:bg-yellow-600 disabled:opacity-50"
          >
            Pause
          </button>
          <button
            onClick={handleResume}
            disabled={!isPaused}
            className="px-4 py-2 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
          >
            Resume
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-2xl shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tickFormatter={(v) => v.slice(11, 19)} />
            <YAxis domain={[0, 7]} unit=" L/min" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="flow"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TSComponent;
