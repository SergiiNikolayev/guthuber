import { takeEvery } from 'redux-saga'
import axios from 'axios';

import * as actionTypes from './../actions/actionTypes'

//1 worker saga, it work when action is dispatched and watcher made call
export function* randomEventAsync() {
  try{
    console.log('at randomEventAsync now')
  } catch (e) {
    console.log('at ' + e + ' now')
  }
}

//2. watcher saga, it watch what action is dispatched
export function* watchSaga() {
  console.log("something");
  //takeEvery takes 2 arguments: 1st is what action is dispatced 2nd is what to call when 1st action is dispatched
  yield takeEvery(actionTypes.RANDOM_EVENT, randomEventAsync);
}

//3. root Saga that combines all sags in one
export default function* rootSaga() {
  yield [
    watchSaga()
  ]
}
