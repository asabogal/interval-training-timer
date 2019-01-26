import React from 'react';
import Workout from './Workout'

class WorkoutList extends React.Component {

  componentDidMount() {
    this.props.fetchWorkouts()
  }

  render() {

    const { workouts, setCustomSettings, toggle } = this.props

    return (
      <div>
        { workouts.map(workout => <Workout key={workout.id} workout={workout} setCustomSettings={setCustomSettings} toggle={toggle}/>)}
      </div>
    );
  }
}

export default WorkoutList;