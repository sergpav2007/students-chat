import { all, call } from 'redux-saga/effects';
import chatSaga from './chatSaga';
import quizManagerUserSaga from './quizManagerUserSaga';
import localStorageManagerSaga from './localStorageManagerSaga';
import firebaseAuthSagaWatcher from './firebaseAuthSagaWatcher';

const sagasList = [
    chatSaga,
    quizManagerUserSaga,
    localStorageManagerSaga,
    firebaseAuthSagaWatcher,
];

export default function* watchRootSaga () {
   yield all (sagasList.map ((saga) => call (saga)))
}