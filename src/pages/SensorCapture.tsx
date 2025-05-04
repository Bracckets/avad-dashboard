import React, { useEffect, useState } from "react";
import { events } from 'aws-amplify/data';

export default function SensorCapture() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let subscription: any;
    let isMounted = true;

    const connectAndSubscribe = () => {
      events.connect('/default/channel')
        .then(channel => {
          subscription = channel.subscribe({
            next: (_data: any) => {
              if (isMounted) {
                setCount(c => c + 1);
              }
            },
            error: (err: any) => {
              console.error('Subscription error:', err);
              if (isMounted) {
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
  }, []);

  return (
    <div className="w-full h-full">
      <div className="px-6 py-8 bg-white rounded-2xl font-semibold text-black shadow">
        <h3 className="text-2xl md:text-4xl leading-snug">
          Sensor
          <br />
          Capture
        </h3>
        <div className="flex items-end gap-1 mt-10">
          <span className="text-4xl md:text-6xl">{count}</span>
          <span className="text-sm md:text-xl">records</span>
        </div>
      </div>
    </div>
  );
}
