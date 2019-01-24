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

  switch (action.type) {
    case 'SET_HIGH_INTENSITY':
      return action.settings

    case 'SET_LOW_INTENSITY':
      return action.settings

    case 'SET_CUSTOM_SETTINGS':
      return action.settings

    case 'UPDATE_RUNNING':
      return {
        ...state, running: true
      }

     case 'STOP_RUNNING':
      return {
        ...state, running: false
      } 
    
    case 'UPDATE_RUNING_SETS':
      return {
      ...state, running_sets: action.runningSets
    }

    case 'REST_COUNTDOWN':
      return {
        ...state, rest: action.currentSeconds, running_time: action.elapsedTime
      }

    case 'INTERVAL_COUNTDOWN':
      return {
      ...state, interval: action.currentSeconds, running_time: action.elapsedTime
    }

    case 'RELOAD_TIMER':
      return {
        ...state, sets: action.sets - 1, running_sets: action.running_sets + 1, interval: action.interval, rest: action.rest
      }

     case 'SET_CURRENT_SETTINGS':
      return action.settings
    
    default:
    return state
  }
 
}

export default timerReducer;