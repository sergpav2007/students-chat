import { all, call } from 'redux-saga/effects';
import chatSaga from './chatSaga';
import quizManagerUserSaga from './quizManagerUserSaga';
import localStorageManagerSaga from './localStorageManager/localStorageManagerSaga';
import firebaseAuthSaga from './firebaseSaga/firebaseAuthSaga';

const sagasList = [
    chatSaga,
    quizManagerUserSaga,
    localStorageManagerSaga,
    firebaseAuthSaga,
];

export default function* watchRootSaga () {
   yield all (sagasList.map ((saga) => call (saga)))
};