import ACTION_TYPES from '../../constants/actionTypes';

export const setAuthUserStore = payload => ({ type: ACTION_TYPES.SET_AUTH_USER_STORE, payload });
export const setDataToLocalStorage = payload => ({ type: ACTION_TYPES.SET_DATA_TO_LOCAL_STORAGE, payload });
export const removeDataFromLocalStorage = payload => ({ type: ACTION_TYPES.REMOVE_DATA_FROM_LOCAL_STORAGE, payload });
export const setAuthUserDatabaseIdStore = payload => ({ type: ACTION_TYPES.SET_AUTH_USER_DATABASE_ID_STORE, payload });