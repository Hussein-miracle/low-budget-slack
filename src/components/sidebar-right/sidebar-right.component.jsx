import React from 'react';

import "./sidebar-right.styles.scss";
import Chat from '../chat/chat.component';

const SidebarRight = () => {
  return (
    <div className="sidebar-right">
      <Chat />
    </div>
  )
}

export default SidebarRight;