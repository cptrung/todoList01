import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import myReducer from './reducers/index';
import rootSaga from './sagas'

import createSagaMiddleware from 'redux-saga'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    myReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
    )
);

sagaMiddleware.run(rootSaga)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
