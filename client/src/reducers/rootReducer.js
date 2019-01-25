import { combineReducers } from 'redux'
import timerReducer from './timerReducer'
import workoutsReducer from './workoutsReducer'

const rootReducer = combineReducers({
  settings: timerReducer,
  workouts: workoutsReducer
})

export default rootReducer;