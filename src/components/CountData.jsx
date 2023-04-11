import React, { useState, useEffect } from 'react';
import './countData.css';

export const CounterItem = ({ label, targetValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < targetValue) {
        setValue((prevValue) => prevValue + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [value, targetValue]);

  return (
    <div className="counter-item">
      <div className="counter-value">{value}</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

export const Counter = () => {
  return (
    <div className="counter">
      <CounterItem label="Total Launches" targetValue={222} />
      <CounterItem label="Total Landings" targetValue={184} />
      <CounterItem label="Total Reloads" targetValue={156} />
    </div>
  );
};

