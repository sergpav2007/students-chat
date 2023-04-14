import ACTION_TYPES from '../../constants/actionTypes';

const initialState = {
    userId: '',
    userDocId: '', // поле, которое передается при логауте на удаление авторизированного юзера из базы данных collection/users, где docId является ключем к объекту user
};

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_TYPES.SET_AUTH_USER_STORE:
            return {
                ...state,
                userId: payload,
            };
        case ACTION_TYPES.SET_AUTH_USER_DATABASE_ID_STORE:
            return {
                ...state,
                userDocId: payload,
            };
        case ACTION_TYPES.SET_USER_DATA_FROM_LOCAL_STORAGE_STORE:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};