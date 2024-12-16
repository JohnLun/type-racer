import React, { useState, useEffect } from 'react';
import "../styles/Timer.css";

function Timer({ isTimerActive, onExpiration }) {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let timerId;
    
    // Start the timer when isTimerActive is true
    if (isTimerActive && seconds > 0) {
      timerId = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    // Clean up when the timer expires or when the component is unmounted
    return () => {
      clearInterval(timerId);
    };
  }, [isTimerActive, seconds]);

  // When seconds reach 0, call onExpiration
  useEffect(() => {
    if (seconds === 0) {
      onExpiration(); // Trigger onExpiration when timer hits 0
    }
  }, [seconds, onExpiration]);

  return (
    <div className="timer-color position-absolute top-0 start-0">
      <h2 className="timer-text">{seconds}</h2>
    </div>
  );
}

export default Timer;
