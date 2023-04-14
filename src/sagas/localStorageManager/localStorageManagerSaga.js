import { all, call, putResolve, select, takeEvery } from 'redux-saga/effects';
import ACTION_TYPES from '../../constants/actionTypes';
import * as selectors from './selectors';
import * as actions from './actions';

export default function* rootLocalStorageSaga() {
    yield all([
        call(getUserDataFromLocalStorage),
        takeEvery(ACTION_TYPES.SET_DATA_TO_LOCAL_STORAGE, setDataToLocalStorage),
        takeEvery(ACTION_TYPES.REMOVE_DATA_FROM_LOCAL_STORAGE, removeDataFromLocalStorage),
        takeEvery(ACTION_TYPES.REMOVE_ITEM_FROM_LOCAL_STORAGE, removeItemFromLocalStorage),
    ]);
};

export function* getItemFromLocalStorageToStore({ payload }) {
    if (!payload) {
        return false;
    }
    const itemFromLocalStorage = yield call([localStorage, 'getItem'], payload);
    if (!itemFromLocalStorage) {
        return;
    }
    const parsedItemFromLocalStorage = yield call([JSON, 'parse'], itemFromLocalStorage);
    yield putResolve(actions.setCorrectAnswerDocIdStore(parsedItemFromLocalStorage));
}

export function* getUserDataFromLocalStorage() {
    const { uid, docId } = yield select(selectors.getUserState);
    if (uid || docId) {
        return false;
    }
    const userLocalStorageData = yield call([localStorage, 'getItem'], 'authData');
    if (!userLocalStorageData) {
        return;
    }
    const parsedUserLocalStorageData = yield call([JSON, 'parse'], userLocalStorageData);
    yield putResolve(actions.setUserDataFromLocalstorageStore({
        userId: parsedUserLocalStorageData.uid,
        userDocId: parsedUserLocalStorageData.docId,
    }));
}

export function* getQuizDataFromLocalStorage() {
    const { uid, docId } = yield select(selectors.getUserState);
    if (uid || docId) {
        return false;
    }
    const quizLocalStorageData = yield call([localStorage, 'getItem'], 'quizData');
    if (!quizLocalStorageData) {
        return;
    }
    const parsedQuizLocalStorageData = yield call([JSON, 'parse'], quizLocalStorageData);
    yield putResolve(actions.setQuizDataFromLocalstorageStore({
        currentUserReadiness: [parsedQuizLocalStorageData.currentUserReadiness],
        isUserReadyToStartQuiz: parsedQuizLocalStorageData.isUserReadyToStartQuiz,
    }));
}

export function* setDataToLocalStorage(action) {
    const { data, fieldType, } = action.payload;
    yield call([localStorage, 'setItem'], fieldType, JSON.stringify(data));
}

export function* removeDataFromLocalStorage() {
    yield call([localStorage, 'clear']);
}

export function* removeItemFromLocalStorage({ payload }) {
    yield call([localStorage, 'removeItem'], payload);
}