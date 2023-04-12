import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [composeWithDevTools(applyMiddleware(sagaMiddleware))]
});

export default store;