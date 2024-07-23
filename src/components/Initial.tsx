import { useEffect, useState } from "react";

import { Clocks } from "./Clock";

export const Initial = () => {
  const initial = new Date();
  const [angles, setAngles] = useState({
    minuteAngle: initial.getMinutes() * 6,
    hourAngle: initial.getHours() * 30 + initial.getMinutes() * 0.5,
    secondAngle: initial.getSeconds() * 6,
  });
  const updateAngles = (now = new Date()) => {
    setAngles({
      minuteAngle: now.getMinutes() * 6,
      hourAngle: now.getHours() * 30 + now.getMinutes() * 0.5,
      secondAngle: now.getSeconds() * 6,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateAngles();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className="absolute left-1/4 top-[52dvh]">
        <p className="text-neutral-400 font-montserrat">
          "Nothing really matters..."
        </p>
        <p className="ml-20 font-montserrat text-xs">-Freddie Mercury</p>
      </div>
      <Clocks
        hourAngle={angles.hourAngle}
        minuteAngle={angles.minuteAngle}
        secondAngle={angles.secondAngle}
      />
    </>
  );
};
