import { combineReducers } from 'redux'

import deck from './ducks/deck'

// all reducers combined
const rootReducer = combineReducers({
  deck,
})

export default rootReducer
