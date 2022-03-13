import { createSelector } from "reselect";


const selectChat = (state) => state.chat;


export const selectChatId = createSelector(
    [selectChat],
    (chat) => chat.chatId
)