import React from 'react';

const TimerControls = (props) => {

  const { handleStartStop, handleResetTimer, running } = props

  return (
    <div>
      <button onClick={handleStartStop}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={handleResetTimer}>Reset</button>
    </div>
  );
};

export default TimerControls;