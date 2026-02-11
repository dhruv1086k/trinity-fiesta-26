"use client";

import { useEffect, useState } from "react";

const EVENT_START_DAYS = 17;

function getTargetDate() {
  const now = new Date();
  return new Date(now.getTime() + EVENT_START_DAYS * 24 * 60 * 60 * 1000);
}

export default function EventCountdown() {
  const [targetDate] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(targetDate);

      if (remaining.total <= 0) {
        setIsLive(true);
        clearInterval(timer);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isLive) {
    return (
      <div
        style={{ fontFamily: "var(--font-ethno)" }}
        className="flex items-center justify-center gap-3 text-6xl font-medium text-green-400"
      >
        <span className="h-10 w-10 animate-pulse rounded-full bg-green-400" />
        Event is Live
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-10 text-white">
      <TimeBox value={timeLeft.days} label="days" />
      <TimeBox value={timeLeft.hours} label="hours" />
      <TimeBox value={timeLeft.minutes} label="mins" />
      <TimeBox value={timeLeft.seconds} label="secs" />
    </div>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="text-center" style={{ fontFamily: "var(--font-ethno)" }}>
      <div className="text-7xl font-bold tracking-wider">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 text-sm tracking-widest text-gray-400 uppercase">
        {label}
      </div>
    </div>
  );
}

function getTimeRemaining(target) {
  const total = target.getTime() - new Date().getTime();

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days: Math.max(days, 0),
    hours: Math.max(hours, 0),
    minutes: Math.max(minutes, 0),
    seconds: Math.max(seconds, 0),
  };
}
