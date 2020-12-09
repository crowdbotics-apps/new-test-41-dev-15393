import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* weatherapi_get__readWorker(action) {
  try {
    const result = yield call(apiService.weatherapi_get__read, action)
    yield put(actions.weatherapi_get__readSucceeded(result, action))
  } catch (err) {
    yield put(actions.weatherapi_get__readFailed(err, action))
  }
}
function* weatherapi_get__readWatcher() {
  yield takeEvery(types.WEATHERAPI_GET__READ, weatherapi_get__readWorker)
}
export default function* rootSaga() {
  const sagas = [weatherapi_get__readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
