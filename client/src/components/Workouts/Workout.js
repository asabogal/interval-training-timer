import React from 'react';

const Workout = (props) => {
  
  const { workout } = props

  return (
    <div>
      <p>{workout.name}</p>
    </div>
  );
};

export default Workout;