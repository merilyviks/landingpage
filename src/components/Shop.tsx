"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export default function Shop() {
  const [email, setEmail] = useState("");

  const endDate = new Date("August 1, 2023 13:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countdownIntervalRef = useRef<number | null>(null);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = endDate - new Date().getTime();
    let timeLeft: TimeLeft = {
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

  useEffect(() => {
    countdownIntervalRef.current = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(countdownIntervalRef.current as number);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  const subscribeEmail = () => {
    alert("Tänan liitumast! (Ei saadetud päriselt emaili)");
  };
  return (
    <div className="shop" id="pood">
      <div className="left"></div>
      <div className="right">
        <h2>
          Poe avamine <br /> 1. august 2023 kell 10
        </h2>
        {endDate > new Date().getTime() ? (
          <p>
            <span>{days} päeva </span>

            <span>{hours} tundi </span>

            <span>{minutes} minutit </span>

            <span>{seconds} sekundit</span>
          </p>
        ) : (
          <span>Past due</span>
        )}

        <div className="subcribe-toshop">
          <form>
            {/*  <input
              value={"Sinu email"}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input> */}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" onClick={subscribeEmail}>
              Liitu uudiskirjaga!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
