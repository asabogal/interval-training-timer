
const workoutsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_WORKOUTS':
      return action.workouts

     case 'CREATE_WORKOUT':
      return state.concat(action.workout)

    default:
      return state
  
  }
}

export default workoutsReducer;