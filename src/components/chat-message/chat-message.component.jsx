import React from 'react';

import "./chat-message.styles.scss";


const ChatMessage = ({timeSent,userName,userImgUrl,message}) => {
  return (
    <div className="chat-message">
          <img src={`${userImgUrl}`} alt={userName} />

        <div className="chat-message__info">
          <h5>
            {userName}
           <span>
            {new Date(timeSent?.toDate()).toUTCString()}
          </span>
          </h5>
          <h6>
          {message}
          </h6>
        </div>
        
    </div>
  )
}

export default ChatMessage;