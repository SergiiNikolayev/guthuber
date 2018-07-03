import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './store/reducers/rootReducer'
import rootSaga from './store/sagas/rootSaga'
import './index.css';
import App from './App';

const sagaMiddle = createSagaMiddleware();
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore( rootReducer, devTool, applyMiddleware(sagaMiddle));

sagaMiddle.run(rootSaga);

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
