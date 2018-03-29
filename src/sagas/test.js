import { delay } from 'redux-saga'
import { put, takeEvery,all,call } from 'redux-saga/effects'
import * as Api from '../api/getIfos'
import actionsType from '../actions/index'





export function* fetchData(action) {
    try {
        const data = yield call(Api.getSometing, action.payload.url);
        yield put({type: actionsType.GET_USERS, data})
    } catch (error) {

    }
}

function* watchFetchData() {
    yield takeEvery(actionsType.GET_USERS, fetchData)
}



export default function* testSaga () {
    yield all([
        watchFetchData()
    ])
}