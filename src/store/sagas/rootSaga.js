import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios';

import * as actionTypes from './../actions/actionTypes'

//1 worker saga, it work when action is dispatched and watcher made call
// call method is used for make axios call
export function* randomEventAsync(action) {
  try{
    console.log('at randomEventAsync now');
    //const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts', {items: action.var});
    const response = yield call(axios.get, 'https://api.github.com/search/repositories?q=stars:>=50000');
    console.log(response);
    console.log(action);

    yield put({type: actionTypes.REQUEST_SUCCEDED, responseZ: response.data});

  } catch (e) {
    console.log('at ' + e + ' now');
    yield put({type: actionTypes.REQUEST_FAILED, message: e.message + ' ::something went wrong, bro'});
  }
}

//2. watcher saga, it watch what action is dispatched
export function* watchSaga() {
  console.log("something");
  //takeEvery takes 2 arguments: 1st is what action is dispatced 2nd is what to call when 1st action is dispatched
  yield takeEvery(actionTypes.RANDOM_EVENT, randomEventAsync);
}

//3. root Saga that combines all sagas in one
export default function* rootSaga() {
  yield [
    watchSaga()
  ]
}
