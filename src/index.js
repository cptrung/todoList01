import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myReducer from './reducers/index';
import rootSaga from './sagas'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    myReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));


serviceWorker.unregister();
