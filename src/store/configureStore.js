/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import logger from 'redux-logger';
import rootEpic from '../config/rootEpic';
import rootReducer from '../config/rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);

let middleware = [epicMiddleware];

if (__DEV__) {
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
    middleware = [...middleware];
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
);

export default store;
