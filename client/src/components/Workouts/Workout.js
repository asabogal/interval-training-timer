import React from 'react';


const Workout = (props) => {
  
  const { workout, setCustomSettings, toggle } = props

  const handleClick = () => {
    setCustomSettings(workout)
    toggle()
    
  }

  return (
    <div>
      <p onClick={handleClick}>{workout.name}</p>
    </div>
  );
};

export default Workout;