import React from 'react';

const TimerSettings = (props) => {

  const { setHighIntensity, setLowIntensity } = props

  return (
    <div>
      <button onClick={setHighIntensity}>High Intensity</button>
      <button onClick={setLowIntensity}>Low Intensity</button>
      <button >Customize</button>
      {/* // add customizations! */}
    </div>
  );
};

export default TimerSettings;