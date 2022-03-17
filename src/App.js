import React,{useState,useEffect} from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {onSnapshot} from "firebase/firestore"
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {auth , createUserProfileDocument} from "./firebase/firebase.utils";

import SignIn from "./pages/sign-in/sign-in";
import SignUp from "./pages/sign-up/sign-up";
import Homepage from "./pages/homepage/homepage";
import Home from "./pages/home/home";
import './App.css';

function App(props) {
  let[unsubscribeFromAuth,setUnsubscribeFromAuth]= useState(null)
  

  useEffect( () => {

        const {setCurrentUser} = props;

        unsubscribeFromAuth = auth.onAuthStateChanged( async ( userAuth )=> {
          
          if(userAuth){

            const userRef = await createUserProfileDocument(userAuth);

            // console.log(userRef);

            onSnapshot( userRef , (snapShot) => {
              // console.log(snapShot);
              // console.log(snapShot.data());
              setCurrentUser({
                id : snapShot.id,
                ...snapShot.data()
              })

            })

          }

          setCurrentUser(userAuth)

        })
        



            return () => {
              setUnsubscribeFromAuth(null);
            }
    } 
  ,[unsubscribeFromAuth])
  
  
  return (
    <>
      <Routes>
        
        <Route path="/" element = {props.currentUser ? (<Navigate to ="/homepage" />)  :<SignIn/>} />

        <Route path="/homepage" element = {<Homepage user={props.currentUser}/>}/>

        
          
          <Route   path ="/signup"   element = {props.currentUser ? (<Navigate to ="/homepage" />)  : (<SignUp/>)} /> 

      </Routes>
    </>
  );
}


const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser
}) ;



const mapDispatchToProps = ( dispatch ) => ({
  setCurrentUser:(user) => dispatch( setCurrentUser(user) )
})

export default connect( mapStateToProps , mapDispatchToProps)(App);

