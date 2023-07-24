import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function getCurrentTime() {
    const date = new Date();
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");

    return `${hh}:${mm}:${ss}`;
  }

  return (
    <div>
      <div className=" text-ml items-center font-semibold text-blue-850">{currentTime}</div>
    </div>
  );
};

export default Time;
