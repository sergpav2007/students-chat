import userReducer from "./userReducer";
import chatReducer from "./chatReducer";
import quizReducer from "./quizReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    userState: userReducer,
    chatState: chatReducer,
    quizState: quizReducer,
});

export default rootReducer;