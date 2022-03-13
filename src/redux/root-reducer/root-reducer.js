import {combineReducers} from "redux";

import userReducer from "../user/user.reducer";

import chatsReducer from "../chats/chats.reducer";

const rootReducer = combineReducers({
    user:userReducer,
    chat:chatsReducer
}) 

export default rootReducer;