import { compose, createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import rootReducer from "./rootReducer"

const initialState = {}

// const middlewares = [
//   logger,
// ]

const store = createStore(rootReducer, initialState, compose(applyMiddleware(logger)))

export default store
