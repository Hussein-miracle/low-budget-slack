import ChatsActionTypes from "./chats.types";

export const openChat = (chatId) => {
    return {
        type:ChatsActionTypes.OPEN_CHAT,
        payload:chatId
    }
}
