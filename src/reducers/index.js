import { combineReducers } from 'redux'

import usersReducer from './usersReducer'
import meetingsReducer from './meetingsReducer'
import positionReducer from './positionReducer'

export default combineReducers({
  users: usersReducer,
  meetings: meetingsReducer,
  positions: positionReducer,
})
