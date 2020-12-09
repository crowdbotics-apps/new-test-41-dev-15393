import * as types from "./constants"

const initialState = { weatherAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.WEATHERAPI_GET__READ:
    case types.WEATHERAPI_GET__READ_SUCCEEDED:
    case types.WEATHERAPI_GET__READ_FAILED:
      return Object.assign({}, state, {
        weatherAPI: [...state.weatherAPI, action.response]
      })
    default:
      return state
  }
}
