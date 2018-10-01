import { compose, createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import reducer, { initialState } from "./reducer"

// const middlewares = [
//   logger,
// ]

const store = createStore(reducer, initialState, compose(applyMiddleware(logger)))

export default store
