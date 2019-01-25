const apiURL = 'http://localhost:3001'

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