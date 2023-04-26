import { all, call } from 'redux-saga/effects';
import chatSaga from './chatSaga/chatSaga';
import quizManagerUserSaga from './quizSaga/quizManagerUserSaga';
import localStorageManagerSaga from './localStorageManager/saga';
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