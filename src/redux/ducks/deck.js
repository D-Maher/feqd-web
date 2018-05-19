// The deck duck is responsible for dealing with decks (both GETting them from the API and POSTing new decks to the API)

import { createAction, handleActions } from "redux-actions"

// Initial deck state in the store
const initialDeckState = {
  decks: [],
}

// Actions
// export const FETCH_DECKS = "FETCH_DECKS"
export const FETCH_DECKS_SUCCESS = "FETCH_DECKS_SUCCESS"
export const FETCH_DECKS_FAILURE = "FETCH_DECKS_FAILURE"

// Action Creators
// export const fetchDecks = () => {
//   return createAction(FETCH_DECKS)({})
// }

export const fetchDecksSuccess = decks => {
  return createAction(FETCH_DECKS_SUCCESS)({
    decks,
  })
}

export const fetchDecksFailure = _error => {
  return createAction(FETCH_DECKS_FAILURE)({})
}

// Reducer
const reducer = handleActions(
  {
    [FETCH_DECKS_SUCCESS]: (state, action) => {
      const decks = action.payload.decks

      return {
        ...state,
        decks: decks,
      }
    },
  },
  initialDeckState,
)

export default reducer
