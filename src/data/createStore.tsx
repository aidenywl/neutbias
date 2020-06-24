import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Translation from './translation';
import rootSaga from './sagaRegistry';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export default function (initialState?: Object) {
  const reducer = combineReducers({ Translation });

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = {
    ...createStore(reducer, initialState, composeEnhancers(applyMiddleware(...middlewares))),
    runSaga: sagaMiddleware.run(rootSaga),
  };

  return store;
}
