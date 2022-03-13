import ChatsActionTypes from "./chats.types";

const INITIAL_STATE = {
    chatId:null
}


const chatsReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case ChatsActionTypes.OPEN_CHAT:
            return {
                ...state,
                chatId:action.payload
            }
        default:
            return state;
    }
}

export default chatsReducer;