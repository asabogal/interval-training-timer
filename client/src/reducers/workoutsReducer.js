
const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WORKOUTS':
      return action.workouts

    default:
      return state
  
  }
}

export default workoutsReducer;