import React from 'react';

import "./sidebar-right.styles.scss";
import Chat from '../chat/chat.component';

const SidebarRight = ({user}) => {
  return (
    <div className="sidebar-right">
      <Chat user={user} />
    </div>
  )
}

export default SidebarRight;