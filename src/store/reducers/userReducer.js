import actionTypes from '../../constants/actionTypes';

const initialState = {
    userId: '',
    userDocId: '',
};

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actionTypes.SET_AUTH_USER_STORE:
            return {
                ...state,
                userId: payload,
            };
        case actionTypes.SET_AUTH_USER_DATABASE_ID_STORE:
            return {
                ...state,
                userDocId: payload,
            };
        case actionTypes.SET_USER_DATA_FROM_LOCAL_STORAGE_STORE:
            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};