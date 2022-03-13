import React,{useState,useEffect} from 'react';
import {motion} from "framer-motion";
import {collection,query,onSnapshot,getDocs} from "firebase/firestore";
import {firestoreDatabase} from "../../firebase/firebase.utils";
import "./sidebar-left.styles.scss";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CreateIcon from '@mui/icons-material/Create';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SidebarLeftItem from '../sidebar-left-item/sidebar-left-item';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import AddIcon from '@mui/icons-material/Add';
// import FileCopyIcon from '@mui/icons-material/FileCopy';


const SidebarLeft = () => {
    const [data,setData] = useState(null)
    

    useEffect( () => {

        const handleChats = async () => {
            const chatRef = collection(firestoreDatabase,"chats") ;
            const chats = await getDocs(chatRef) ;
            setData(chats.docs);
        }

        handleChats();
    },[])

    


    return (
        <div className="sidebar-left">
            <div className="sidebar-left__header">
                <div className="sidebar-left__header--info">
                    <h3>Badaass Startup  <KeyboardArrowDownIcon/></h3>
                    <h4> <FiberManualRecordIcon/> Abdullahi </h4>
              </div>
                <div className="sidebar-left__header--create">
                {/* <CheckBoxOutlineBlankIcon/> */}
                

<motion.svg  drag  dragConstraints={{
    left:0,
    top:0,
    right:0,
    bottom:0
}}> 
  <motion.path
    initial={{
        rotate:0,
        x:0,
        y:0
    }}
    animate={{
        rotate:[0,25,0,-25,0],
        x:[0,-2,3,-3,2,0],
        y:[0,-2,-3,3,2,0]
    }}
    transition={{
        type:"tween",
        repeat:4,
        duration:3
    }}
    whileTap={{
        rotate:[0,15,0,-15,0],
        x:4,
        y:[-4,4]
    }}
    whileHover={{
        rotate:[0,15,0,-15,0],
        x:4,
        y:[-4,4]
    }}
   d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#340444"/>

   <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#340444"></path>
</motion.svg>
                </div>
            </div>



            <div className="sidebar-left__content">
                
            <SidebarLeftItem Icon={AlternateEmailIcon} text='Mentions and Reactions' />
                
            <SidebarLeftItem Icon={ArrowDropDownIcon} text='Slack Connect' />
            <SidebarLeftItem Icon={MoreVertIcon} text='More' />
            <SidebarLeftItem Icon={ArrowRightIcon} text='Channels' />
            {data?.map( (doc) =>  <SidebarLeftItem key={doc.id} id={doc.id} text={doc.data().chatName}/> )}

            <SidebarLeftItem addChat={true} Icon={AddIcon} text='Add channel' />
                
            <SidebarLeftItem Icon={ArrowRightIcon} text='Direct messages' />
            <SidebarLeftItem Icon={ArrowRightIcon} text='Apps' />

                
                
            </div>
        </div>
    )
}

export default SidebarLeft;