import React from 'react';
import {Routes,Route} from "react-router-dom";
import SidebarLeft from '../sidebar-left/sidebar-left.component';
import SidebarRight from '../sidebar-right/sidebar-right.component';
import "./content.styles.scss";


const Content = () => {
  return (
    <div className="content">
        <SidebarLeft/>
        <Routes>
          <Route path="/" element={<SidebarRight/>}/>
        </Routes>
    </div>
  )
}

export default Content;