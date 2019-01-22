import React from 'react';

const TimerSettings = (props) => {

  const { setHighIntensity, setLowIntensity } = props

  return (
    <div>
      <button onClick={setHighIntensity}>Low Intensity</button>
      <button onClick={setLowIntensity}>High Intensity</button>
      <button >Customize</button>
      
    </div>
  );
};

export default TimerSettings;