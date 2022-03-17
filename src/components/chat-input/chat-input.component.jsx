import React,{useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import { collection ,addDoc,serverTimestamp} from '@firebase/firestore';
import { firestoreDatabase  } from '../../firebase/firebase.utils';
import "./chat-input.styles.scss";


const ChatInput = ({chatId,channelName}) => {
    const [message,setMessage] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        if(!chatId) return false;
        
        if(chatId){
            const chatContent = message;
            const chatRef = collection(firestoreDatabase,"chats",`${chatId}`,"messageContent");
            const date = new Date();
            const sentOn = `${date}`;
            const timeSent = serverTimestamp();
            const momentId = date.getTime();

            const messageContent = {
                message:chatContent,
                sentOn,
                momentId,
                timeSent,
                user:"Dev M account on firestore",
            }

            await addDoc(chatRef, messageContent);
            // await setDoc(chatRef,messageContent);
            
            setMessage("");
            // chatRef?.current.scrollIntoView({
            //         behavior:"smooth"
            //     })


        }
        
    }

    return (
    <div className="chat-input">
        <form className="chat-input__form" >
            <input 
            value={message}
            onChange={ (e) => setMessage(e.target.value)}
            className="chat-input__form--input" 
            type="text" placeholder={`Send message to ${channelName ? channelName : "channelName"}`} />
        
            <button type="submit" 
            className="chat-input__form--input__btn" 
            onClick={sendMessage}
            > <h5>Send</h5> <SendIcon/>
            </button>
        </form>
    </div>
  )
}

export default ChatInput;