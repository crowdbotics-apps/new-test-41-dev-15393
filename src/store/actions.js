import * as types from "./constants"

export const weatherapi_get__read = new_param => ({
  type: types.WEATHERAPI_GET__READ,
  new_param
})

export const weatherapi_get__readSucceeded = (response, starter) => ({
  type: types.WEATHERAPI_GET__READ_SUCCEEDED,
  response,
  starter
})

export const weatherapi_get__readFailed = (error, starter) => ({
  type: types.WEATHERAPI_GET__READ_FAILED,
  error,
  starter
})
