import ACTION_TYPES from '../../constants/actionTypes';

export const setCorrectAnswerDocIdStore = payload => ({ type: ACTION_TYPES.SET_CORRECT_ANSWER_DOC_ID_STORE, payload });
export const setUserDataFromLocalstorageStore = payload => ({ type: ACTION_TYPES.SET_USER_DATA_FROM_LOCAL_STORAGE_STORE, payload });
export const setQuizDataFromLocalstorageStore = payload => ({ type: ACTION_TYPES.SET_QUIZ_DATA_FROM_LOCAL_STORAGE_STORE, payload });