import { combineReducers } from 'redux'
import timerReducer from './timerReducer'

const rootReducer = combineReducers({
  settings: timerReducer
})

export default rootReducer;