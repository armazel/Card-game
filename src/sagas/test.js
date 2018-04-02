import { delay } from 'redux-saga'
import { put, takeEvery,all,call } from 'redux-saga/effects'
import * as Api from '../api/getIfos'
import actionsType from '../actions/index'


const toggleOff = false;
const toggleOn = true;


export function* fetchData(action) {
    let toggle = null;
    try {
        toggle = toggleOn;
        yield put({type: actionsType.ACTIVE_LOADER,toggle});

        yield delay(2000);
        const data = yield call(Api.getSometing, action.payload.url);

        yield put({type: actionsType.GET_USERS, data});

        toggle = toggleOff;
        yield put({type: actionsType.ACTIVE_LOADER, toggle});
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