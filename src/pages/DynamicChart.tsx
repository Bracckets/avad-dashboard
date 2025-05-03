import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

// Dummy chart options with different data and labels
const chartOptions = [
  {
    name: "Fluid Flow",
    value: "fluid",
    percentage: "85%",
    data: [
      { name: "Page A", uv: 4000, pv: 2400 },
      { name: "Page B", uv: 3000, pv: 1398 },
      { name: "Page C", uv: 2000, pv: 9800 },
      { name: "Page D", uv: 2780, pv: 3908 },
      { name: "Page E", uv: 1890, pv: 4800 },
      { name: "Page F", uv: 2390, pv: 3800 },
      { name: "Page G", uv: 3490, pv: 4300 },
    ],
  },
  {
    name: "Pressure",
    value: "pressure",
    percentage: "72%",
    data: [
      { name: "Page A", uv: 3200, pv: 2200 },
      { name: "Page B", uv: 2500, pv: 1600 },
      { name: "Page C", uv: 1900, pv: 7800 },
      { name: "Page D", uv: 2600, pv: 3500 },
      { name: "Page E", uv: 1700, pv: 4400 },
      { name: "Page F", uv: 2100, pv: 3600 },
      { name: "Page G", uv: 3000, pv: 3900 },
    ],
  },
  {
    name: "Velocity",
    value: "velocity",
    percentage: "64%",
    data: [
      { name: "Page A", uv: 2800, pv: 1800 },
      { name: "Page B", uv: 2200, pv: 1400 },
      { name: "Page C", uv: 1600, pv: 7000 },
      { name: "Page D", uv: 2400, pv: 3100 },
      { name: "Page E", uv: 1500, pv: 4200 },
      { name: "Page F", uv: 2000, pv: 3300 },
      { name: "Page G", uv: 2700, pv: 3700 },
    ],
  },
];

export default function DynamicChart() {
  const [selectedChart, setSelectedChart] = useState(chartOptions[0]);

  return (
    <article className="px-5 py-5 w-full bg-white rounded-xl shadow max-md:mt-6">
      {/* Header with icon, title, and dropdown */}
      <div className="flex justify-between items-center pb-5">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-20 h-20 bg-neutral-100 rounded-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb39b4e98ac18294558802861fc161f25d946a89?placeholderIfAbsent=true&apiKey=06583fef677b467aaaac25278e1414ed"
              alt={`${selectedChart.name} icon`}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="text-black">
            <h3 className="text-base font-light">{selectedChart.name}</h3>
            <p className="mt-1 text-3xl font-bold max-md:text-2xl">
              {selectedChart.percentage}
            </p>
          </div>
        </div>

        {/* Dropdown */}
        <div className="relative">
          <select
            className="appearance-none text-sm bg-neutral-100 text-black font-medium py-2 px-4 pr-8 rounded-full shadow focus:outline-none cursor-pointer"
            value={selectedChart.value}
            onChange={(e) =>
              setSelectedChart(
                chartOptions.find((opt) => opt.value === e.target.value) ||
                  chartOptions[0]
              )
            }
          >
            {chartOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute top-2.5 right-3 w-4 h-4 text-black pointer-events-none" />
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={selectedChart.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}
