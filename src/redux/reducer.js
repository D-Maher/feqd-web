import { handleActions } from "redux-actions"

import * as actionTypes from "./actionTypes"

// Initial state for the store
export const initialState = {
  decks: [],
}

// Reducer
const reducer = handleActions(
  {
    [actionTypes.API_GET_DECKS_SUCCESS]: (state, action) => {
      const decks = action.payload.decks

      return {
        ...state,
        decks,
      }
    },
  },
  initialState,
)

export default reducer
