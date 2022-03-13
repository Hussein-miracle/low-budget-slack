import React,{useEffect,useState,useRef} from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import {connect} from "react-redux";
import {collection,doc,getDoc ,getDocs,orderBy,query,onSnapshot} from "firebase/firestore"
import {createStructuredSelector} from "reselect";


import {selectChatId} from "../../redux/chats/chats.selectors";
import { firestoreDatabase } from '../../firebase/firebase.utils';
import ChatMessage from "../chat-message/chat-message.component";

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatInput from "../chat-input/chat-input.component";

import "./chat.styles.scss";

const Chat = ({chatId}) => {
  const chatRef = useRef(null)
  const[chatName,setChatName] = useState("");
  const[messages,setMessages] = useState(null);

  useEffect( () => {
      if(!chatId) return false;
      const handleGetChat = async () => {
        const chatDocRef = doc(firestoreDatabase,"chats",`${chatId}`);
        const chatDoc = await  getDoc(chatDocRef);
        // console.log("[chatDoc]",chatDoc)
        setChatName(chatDoc.data().chatName)
        // console.log("[chatDoc chatName]",chatDoc.data().chatName)
      }

      handleGetChat();

  },[chatId])

  useEffect( () => {
        if(!chatId) return false;

        const handleMessages = async () => {
          const messagesRef = collection(firestoreDatabase,"chats",`${chatId}`,"messageContent");
          const q = query(messagesRef,orderBy("momentId","asc"));

          // console.log(q)

          // const chatsSent = await getDocs(q);

          // console.log(chatsSent);

          onSnapshot(q, (snapshot) => {
            setMessages(snapshot);
          });

          // setMessages(chatsSent);
        }

        handleMessages();

  },[chatName])



  return (
    <div className="chat">
        <div className="chat__header">
            <div className="chat__header--info">
              #<h4>{chatName ? chatName : "chat-name"}</h4> 
              <StarBorderOutlinedIcon/>
            </div>
            <div className="chat__header--details">
              <InfoOutlinedIcon/> Details
            </div>
        </div>


      <div className="chat__content">
        

        {
          messages?.docs.map(doc => {
            // console.log(doc);
            // console.log(doc.data());
            const {message,timeSent,userName,userImgUrl,momentId} = doc.data();
            return (
              <ScrollIntoView scrollOptions={{block: "end"}} key={`${momentId}${timeSent}`} selector="#scroll-target" >

                      <ChatMessage 
                        message = {message} 
                        key={`${momentId}`}
                        timeSent ={timeSent}
                        userName ={userName}
                        userImgUrl={userImgUrl}
                        />
              </ScrollIntoView>
                      )
          })
        }

        <div id="scroll-target" ref={chatRef}> </div>
        
      </div>

      <ChatInput chatRef={chatRef} chatId={chatId} channelName={chatName}/>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    chatId: selectChatId,
    
})

export default connect(mapStateToProps)(Chat);