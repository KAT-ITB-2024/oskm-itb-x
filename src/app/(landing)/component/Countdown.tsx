"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";

interface CountdownProps {
  targetDate: string;
  isItbX?: boolean;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, isItbX = false }) => {
  const calculateTimeLeft = useCallback(() => {
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
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className={`mb-8 flex flex-col items-center font-mogula ${isItbX ? "text-blue-800" : "text-[#99E0FF]"} md:text-xl`}>
      <div className="flex gap-x-2">
        {/* Hanya tampilkan jika days > 0 */}
        {timeLeft.days > 0 && (
          <div className="flex flex-col items-center">
            <TimeBubble value={timeLeft.days} delay={1000} />
            <p className="font-mogula">Days</p>
          </div>
        )}
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.hours} delay={700} />
          <p className="font-mogula">Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.minutes} delay={300} />
          <p className="font-mogula">Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <TimeBubble value={timeLeft.seconds} delay={0} />
          <p className="font-mogula">Seconds</p>
        </div>
      </div>
    </div>
  );
};

interface TimeBubbleProps {
  value: number;
  delay?: number;
}

const TimeBubble: React.FC<TimeBubbleProps> = ({ value, delay }) => {
  return (
    <div
      className={`relative flex aspect-square w-20 animate-float flex-col items-center justify-center md:w-24 ${delay ? `delay-${delay}` : ""}`}
    >
      <Image
        src="/landing-page/Bubble.png"
        alt="Bubble"
        width={200}
        height={200}
        draggable={false}
      />
      <div className="absolute text-center">
        <div className="font-mogula text-3xl md:text-[2.4rem]">{value}</div>
      </div>
    </div>
  );
};

export default Countdown;
