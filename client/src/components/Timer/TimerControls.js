import React from 'react';

const TimerControls = (props) => {

  const { handleStartStop, handleReset, running } = props

  return (
    <div>
      <button onClick={handleStartStop}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TimerControls;