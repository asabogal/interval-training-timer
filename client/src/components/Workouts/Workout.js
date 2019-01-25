import React from 'react';


const Workout = (props) => {
  
  const { workout } = props

  const handleClick = () => {
    props.setCustomSettings(workout)
    
  }

  return (
    <div>
      <p onClick={handleClick}>{workout.name}</p>
    </div>
  );
};

export default Workout;