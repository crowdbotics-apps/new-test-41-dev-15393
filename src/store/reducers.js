import * as types from "./constants"

const initialState = { weatherAPI: [], newPluginXXXX: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.WEATHERAPI_GET__READ:
    case types.WEATHERAPI_GET__READ_SUCCEEDED:
    case types.WEATHERAPI_GET__READ_FAILED:
      return Object.assign({}, state, {
        weatherAPI: [...state.weatherAPI, action.response]
      })
    case types.NEWPLUGINXXXX_GET__READ:
    case types.NEWPLUGINXXXX_GET__READ_SUCCEEDED:
    case types.NEWPLUGINXXXX_GET__READ_FAILED:
      return Object.assign({}, state, {
        newPluginXXXX: [...state.newPluginXXXX, action.response]
      })
    default:
      return state
  }
}
