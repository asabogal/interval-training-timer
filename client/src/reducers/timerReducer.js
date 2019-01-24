const initialState = {
  name: '',
  sets: 0,
  running_sets: 0,
  interval: 0,
  rest: 0,
  running: false,
  running_time: 0
}

const timerReducer = (state = initialState, action) => {
  console.log(action.settings)
  switch (action.type) {
    case 'SET_HIGH_INTENSITY':
      return action.settings
    
    default:
    return state
  }
 
}

export default timerReducer;