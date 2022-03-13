import React,{useState} from 'react';
import {connect} from "react-redux";
import {openChat} from "../../redux/chats/chats.actions";

import Channel from "../channel/channel.component";

import {addDoc,collection} from "firebase/firestore";

import {signInWithGoogle,firestoreDatabase} from "../../firebase/firebase.utils";

import "./sidebar-left-item.styles.scss";

const SidebarLeftItem = ({ Icon , id ,text ,addChat, handleOpenChat}) => {
  // const [loading,setLoading] = useState(false);

  const handleCreateChat = async() =>{
    const chatName = prompt("Enter Workspace name");
    if(chatName){
      let chatRef = collection(firestoreDatabase,`chats`) ;
      const chatDoc = {
        chatName:chatName,
      }
      await addDoc(chatRef,chatDoc);
      alert(`${chatName} chat created`);
    }
  }
  

  
  
  return (
    <div className="sidebar-left-item" 

        onClick={addChat ? handleCreateChat : () => handleOpenChat(id) }>


        {Icon ? 
        <div className="sidebar-left-item__text"><Icon/>{text}</div> 
        : 
        <Channel name={text}/> }
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenChat: (id) => dispatch(openChat(id))
  }
}

export default connect(null,mapDispatchToProps)(SidebarLeftItem);