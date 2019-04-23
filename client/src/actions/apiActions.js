const apiURL = 'https:interval-training-timer.herokuapp.com/'

export const fetchWorkouts = () => {
  let data = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  }

  return dispatch => {
    fetch(`${apiURL}/workouts`, data)
      .then(response => response.json())
      .then(workouts => dispatch({
          type: 'FETCH_WORKOUTS',
          workouts
      }))
      .catch(errors => errors)
  }
}

export const createWorkout = (workout) => { 
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({workout})
  }

  return dispatch => {
    fetch(`${apiURL}/workouts`, data)
      .then(response => response.json())
      .then(workout => dispatch({
        type: 'CREATE_WORKOUT',
        workout
      }))
      .catch(errors => errors)
  }
}