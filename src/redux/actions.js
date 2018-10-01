import { createAction } from "redux-actions"

import * as actionTypes from "./actionTypes"

export const getDecksRequest = () => {
  return createAction(actionTypes.API_GET_DECKS_REQUEST)({})
}

export const getDecksSuccess = decks => {
  return createAction(actionTypes.API_GET_DECKS_SUCCESS)({
    decks,
  })
}

export const getDecksFailure = _error => {
  return createAction(actionTypes.API_GET_DECKS_FAILURE)({})
}
