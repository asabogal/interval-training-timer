import React from 'react';

const TimerDisplay = (props) => {

  const {
    name,
    sets, 
    runningSets,
    interval,
    rest,
    runningTime} = props

  const renderTimer = (interval, rest) => {
      if (rest > 0) {
        return renderRest(rest)
      } else if (rest === 0) {
        return renderInterval(interval)
      } else {
        return <h3>--</h3>
      }
    }
    
  const renderRest = (rest) => {
      let minutes = Math.floor(rest / 60)
      let seconds = rest - (minutes * 60)
    
      if (seconds < 10) {
        return <h1>0{minutes}:0{seconds}</h1>
      } else {
        return <h1>0{minutes}:{seconds}</h1>
      }
    }
    
  const renderInterval = (interval) => {
      let minutes = Math.floor(interval / 60)
      let seconds = interval - minutes * 60
    
      if (seconds < 10) {
        return <h1>0{minutes}:0{seconds}</h1>
      } else {
        return <h1>0{minutes}:{seconds}</h1> 
      }
    }
    
   const renderRunningTime = (runningTime) => {
      let minutes = Math.floor(runningTime / 60)
      let seconds = runningTime - minutes * 60
    
        if (seconds < 10) {
          return <h2>Elapsed: 0{minutes}:0{seconds}</h2>
        } else {
          return <h2>Elapsed: 0{minutes}:{seconds}</h2> 
        }
    } 

  return (
    <div>
      <h5>{name}</h5>
      <h4>Set {runningSets + 1}/{sets}</h4>
      {renderTimer(interval, rest)}
      {renderRunningTime(runningTime)}
    </div>
  );
};

export default TimerDisplay;