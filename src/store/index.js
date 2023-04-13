import createSagaMiddleware from 'redux-saga';
// import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

export const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
  // middleware: [composeWithDevTools(applyMiddleware(sagaMiddleware))],
});

export default store;