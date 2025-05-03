import { useState } from "react";
import { motion } from "framer-motion";

export default function LVADSystem() {
  const [flow1, setFlow1] = useState(true);
  const [flow2, setFlow2] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        LVAD System Diagram
      </h1>
      <svg
        width="600"
        height="500"
        style={{ border: "1px solid #ccc", margin: "0 auto", display: "block" }}
      >
        {/* Ball Tank 1 */}
        <circle cx="100" cy="100" r="30" fill="#86efac" />
        <text x="100" y="100" textAnchor="middle" dy=".3em">
          Tank 1
        </text>

        {/* Ball Tank 2 */}
        <circle cx="500" cy="100" r="30" fill="#fca5a5" />
        <text x="500" y="100" textAnchor="middle" dy=".3em">
          Tank 2
        </text>

        {/* Line connecting tanks */}
        <line
          x1="130"
          y1="100"
          x2="470"
          y2="100"
          stroke="black"
          strokeWidth="2"
        />

        {/* Two-way block valve */}
        <rect x="280" y="140" width="40" height="40" fill="#fcd34d" />
        <text x="300" y="165" textAnchor="middle" fontSize="10">
          Valve
        </text>

        {/* Connections from tanks to valve */}
        <line
          x1="100"
          y1="100"
          x2="300"
          y2="140"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1="500"
          y1="100"
          x2="320"
          y2="140"
          stroke="black"
          strokeWidth="2"
        />

        {/* Fake heart */}
        <rect x="270" y="200" width="60" height="40" fill="#93c5fd" />
        <text x="300" y="225" textAnchor="middle">
          Heart
        </text>
        <line
          x1="300"
          y1="180"
          x2="300"
          y2="200"
          stroke="black"
          strokeWidth="2"
        />

        {/* Assistant pump */}
        <rect x="270" y="260" width="60" height="40" fill="#f9a8d4" />
        <text x="300" y="285" textAnchor="middle">
          Pump
        </text>
        <line
          x1="300"
          y1="240"
          x2="300"
          y2="260"
          stroke="black"
          strokeWidth="2"
        />

        {/* Pump to tank 2 */}
        <line
          x1="300"
          y1="300"
          x2="500"
          y2="130"
          stroke="black"
          strokeWidth="2"
        />

        {/* Flow animation 1 */}
        {flow1 && (
          <motion.circle
            cx="400"
            cy="215"
            r="5"
            fill="blue"
            animate={{ cy: [215, 210, 215] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}

        {/* Flow animation 2 */}
        {flow2 && (
          <motion.circle
            cx="320"
            cy="140"
            r="5"
            fill="blue"
            animate={{ r: [5, 8, 5] }}
            transition={{ repeat: Infinity, duration: 1 }}
          />
        )}

        {/* Flow sensor 1 on pump line */}
        <circle cx="400" cy="215" r="10" fill={flow1 ? "green" : "gray"} />
        <text x="400" y="215" textAnchor="middle" dy="-1.2em" fontSize="10">
          Sensor 5
        </text>

        {/* Flow sensor 2 after join */}
        <circle cx="320" cy="140" r="10" fill={flow2 ? "green" : "gray"} />
        <text x="320" y="140" textAnchor="middle" dy="-1.2em" fontSize="10">
          Sensor 3+5
        </text>
      </svg>

      <div className="flex justify-center gap-8 mt-6">
        <button
          onClick={() => setFlow1(!flow1)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Toggle Sensor 5
        </button>
        <button
          onClick={() => setFlow2(!flow2)}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          Toggle Sensor 3+5
        </button>
      </div>
    </div>
  );
}
