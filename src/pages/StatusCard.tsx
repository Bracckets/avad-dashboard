import React, { useEffect, useState } from "react";
import { events } from 'aws-amplify/data';
import DistributionBars from "./SensorCurve";

interface StatusCardProps {
  sensorId: number;
  title: string;
  unit: string;
  sensorName: string;
  iconSrc: string;
}

export default function StatusCard({ sensorId, title, unit, sensorName, iconSrc }: StatusCardProps) {
  const [sensorValue, setSensorValue] = useState<number>(0);

  useEffect(() => {
    let subscription: any;
    let isMounted = true;

    const connectAndSubscribe = () => {
      events.connect('/default/channel')
        .then(channel => {
          subscription = channel.subscribe({
            next: (data: any) => {
              if (data.event.sensor_id === sensorId && isMounted) {
                setSensorValue(data.event.device_data.value);
              }
            },
            error: (err: any) => {
              console.error('Subscription error:', err);
              if (isMounted) {
                // retry after delay
                setTimeout(connectAndSubscribe, 1000);
              }
            },
          });
        })
        .catch((err: any) => {
          console.error('Connection error:', err);
          if (isMounted) {
            setTimeout(connectAndSubscribe, 1000);
          }
        });
    };

    connectAndSubscribe();

    return () => {
      isMounted = false;
      if (subscription && typeof subscription.unsubscribe === 'function') {
        subscription.unsubscribe();
      }
    };
  }, [sensorId]);

  return (
    <article className="px-5 py-5 w-full bg-white rounded-2xl shadow max-md:mt-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-20 h-20 bg-neutral-100 rounded-full">
            <img
              src={iconSrc}
              alt={`${title} icon`}
              className="w-10 h-10 object-contain"
            />
          </div>
          <div className="text-black">
            <h3 className="text-base font-light">{title}</h3>
            <p className="mt-1 text-3xl font-bold max-md:text-2xl">
              {sensorValue.toFixed(1)} {unit}
            </p>
          </div>
        </div>
        <div className="px-6 py-3 text-base font-light text-black bg-neutral-100 rounded-full">
          {sensorName}
        </div>
      </div>

      <div className="mt-8 px-5 py-4 bg-neutral-100 rounded-xl">
        <DistributionBars sensorValue={sensorValue} />
      </div>
    </article>
  );
}
