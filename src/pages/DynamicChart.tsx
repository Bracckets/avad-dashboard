import { useEffect, useRef, useState } from "react";
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
import { events } from "aws-amplify/data";

interface FlowDataPoint {
  timestamp: string;
  pump_flow: number | null;
  total_flow: number | null;
}

export default function DynamicChart() {
  const [data, setData] = useState<FlowDataPoint[]>([]);
  const subscriptionRef = useRef<any>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const connectAndSubscribe = () => {
      events.connect('/default/channel')
        .then(channel => {
          subscriptionRef.current = channel.subscribe({
            next: (msg: any) => {
              const { sensor_id, device_data, timestamp } = msg.event;
              const value = device_data.value;
              const ts = new Date(timestamp).toISOString();

              setData(prev => {
                const lastPoints = prev.slice(-29);
                const last = lastPoints[lastPoints.length - 1];

                if (last && last.timestamp === ts) {
                  const updated = { ...last };
                  if (sensor_id === 22) updated.pump_flow = value;
                  if (sensor_id === 21) updated.total_flow = value;
                  return [...lastPoints.slice(0, -1), updated];
                }

                const newPoint: FlowDataPoint = {
                  timestamp: ts,
                  pump_flow: sensor_id === 22 ? value : null,
                  total_flow: sensor_id === 21 ? value : null,
                };
                return [...lastPoints, newPoint];
              });
            },
            error: (err: any) => {
              console.error('Subscription error:', err);
              if (isMountedRef.current) setTimeout(connectAndSubscribe, 1000);
            },
          });
        })
        .catch(err => {
          console.error('Connection error:', err);
          if (isMountedRef.current) setTimeout(connectAndSubscribe, 1000);
        });
    };

    connectAndSubscribe();

    return () => {
      isMountedRef.current = false;
      if (subscriptionRef.current && subscriptionRef.current.unsubscribe) {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, []);

  return (
    <article className="px-5 py-5 w-full bg-white rounded-xl shadow max-md:mt-6">
      <h3 className="text-xl font-semibold mb-4">Real-time Flow</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={v => v.slice(11, 19)} />
          <YAxis domain={[0, 'auto']} unit=" ML/m" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pump_flow"
            stroke="#3b82f6"
            name="Pump Flow"
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="total_flow"
            stroke="#10B981"
            name="Total Flow"
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}
