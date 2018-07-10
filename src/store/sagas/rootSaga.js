import {takeEvery} from 'redux-saga'
import {call, put, takeLatest, take} from 'redux-saga/effects'
import axios from 'axios';

import * as actionTypes from './../actions/actionTypes'

//1 worker saga, it work when action is dispatched and watcher made call
// call method is used for make axios call
export function* randomEventAsync(action) {
  try {
    console.log('at randomEventAsync now');
    //const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', {items: action.var});
    //by default it show 30 per page but with per_page=100  it show 100
    const response = yield call(axios.get, 'https://api.github.com/search/repositories?per_page=100&q=stars:>=10000');
    console.log(response);
    console.log(action);

    yield put({type: actionTypes.REQUEST_SUCCEDED, responseZ: response.data});

  } catch (e) {
    console.log('at ' + e + ' now');
    yield put({type: actionTypes.REQUEST_FAILED, message: e.message + ' ::something went wrong, bro'});
  }
}

export function* searchAsync(action) {
  try {
    console.log('at searchAsync now');
    const searchResponse = yield call(axios.get, 'https://api.github.com/search/repositories?per_page=100&q='+action.whatWeSearch+'in:name&type=Repositories');
    console.log(searchResponse);
    yield put({type: actionTypes.REQUEST_SUCCEDED, responseZ: searchResponse.data});
  } catch (e) {
    console.log('at ' + e + ' now');
    yield put({type: actionTypes.REQUEST_FAILED, message: []});
  }
}

//2. watcher saga, it watch what action is dispatched
export function* watchSaga() {
  console.log("something");
  //takeEvery takes 2 arguments: 1st is what action is dispatced 2nd is what to call when 1st action is dispatched
  yield takeEvery(actionTypes.GET_INFO, randomEventAsync);
  yield takeLatest(actionTypes.SEARCH, searchAsync);
}

//3. root Saga that combines all sagas in one
export default function* rootSaga() {
  yield [
    watchSaga()
  ]
}
