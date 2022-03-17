import React,{useState} from 'react';
import {motion} from "framer-motion";
import {auth} from "../../firebase/firebase.utils";
import Ren from "../../assets/images/rengoku.jpg";
import Rein from "../../assets/images/sign-in-icon.png";
import "./header.styles.scss";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import AvatarIcon from '@mui/icons-material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import MinimizeIcon from '@mui/icons-material/Minimize';
// import FullscreenIcon from '@mui/icons-material/Fullscreen';
// import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
// import FitScreenIcon from '@mui/icons-material/FitScreen';
// import CloseIcon from '@mui/icons-material/Close';

const Header = ({user}) => {
  // const [userD,SetUserD] = useState({
  //   displayName:"",
  //   url:""
  // })
  // if(user){
  //   SetUserD({displayName:user.displayName,url:user.photoURL})
  // }
  // console.log(user,"[user header]")
  const handleSignOut = ()=>{
    auth.signOut();
    console.log("You done sign Out sha")
  }
  return (
    <div className="header">


      <div className="header__clock">

          <motion.svg className="header__clock--icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <motion.path initial={{
            rotate:0
          }} 
          animate={{
            rotateZ:["25deg","45deg","75deg","90deg","125deg","150deg","175deg","270deg","290deg","360deg"]
          }}
          style={{
            originX:.3,
            originY:0.5
          }}
          transition={{
            type:"tween",
            delay:2,
            duration:1.5,
            repeat:Infinity
          }}
          d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></motion.svg>
      </div>

      <div className="header__left">

        
        
        <div className="header__search">
          <input className="header__search--input" type="search" placeholder="Search workspace"/>

          
          <div className="header__search--btn">
            <SearchIcon className="header__search--icon" />
          </div>
        
        </div>
      </div>


      <div className="header__right">
        <div className="header__helpline">
          <HelpOutlineIcon className="header__helpline--icon"/>
        </div>

      <div className="header__account" 
      onClick={handleSignOut}
      >
        {user ? <img className="header__account--icon" src={`${user?.photoURL}`} alt={`${user?.displayName}`} title="Click to Sign out" /> : 
        
        
        
        <AccountBoxIcon 
        src={Ren}
        className="header__account--icon"/>}

      </div>
      {/* <div className="header__minimize">
        <MinimizeIcon className="header__minimize--icon"/>
      </div>

      <div className="header__helpline">
        <FullscreenExitIcon className="header__helpline-icon"/>
        <FullscreenIcon className="header__helpline-icon"/>
        <FitScreenIcon  className="header__helpline-icon"/>
      </div>

      <div className="header__close">
        <CloseIcon className="header__close--icon"/>
      </div> */}
      </div>

      
    </div>
  )
}

export default Header;