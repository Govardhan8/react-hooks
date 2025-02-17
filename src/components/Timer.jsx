import { useEffect, useState } from 'react';

import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {

    const date = new Date();
    setSeconds(date.getSeconds());
    setMinutes(date.getMinutes());
    setHours(date.getHours());

    // Update the time every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) =>
        prevSeconds + 1
      );
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const getStringTime = s => String(s).padStart(2,0);

  const getTime = () => {
    const secs = seconds;
    const mins = minutes + Math.floor(seconds/60);
    const hour = hours+Math.floor(mins/60);
    const period = hour >= 12 ?"PM":"AM";
    return `${getStringTime(hour%12)}:${getStringTime(mins%60)}:${getStringTime(secs%60)} ${period}`;
  }

  return (
    <div>
      <p className='clock'>{getTime()}</p>
    </div>
  );
}

export default Timer
