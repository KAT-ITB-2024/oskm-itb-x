"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mb-8 flex flex-col items-center font-mogula text-[#99E0FF] md:text-xl">
      <div className="flex gap-x-2">
        {/* Hanya tampilkan jika days > 0 */}
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <TimeBubble value={timeLeft.days} />
            <p>Days</p>
          </div>
        )}
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.hours} />
          <p>Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.minutes} />
          <p>Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.seconds} />
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

interface TimeBubbleProps {
  value: number;
}

const TimeBubble: React.FC<TimeBubbleProps> = ({ value }) => {
  return (
    <div className="relative flex h-20 w-20 flex-col items-center justify-center md:h-32 md:w-32 xl:h-36 xl:w-36">
      <Image
        src="/landing-page/Bubble.svg"
        alt="Bubble"
        width={200}
        height={200}
      />
      <div className="absolute text-center">
        <div className="text-4xl md:text-6xl">{value}</div>
      </div>
    </div>
  );
};

export default Countdown;
