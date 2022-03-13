import React,{useState} from "react";
import {Link} from "react-router-dom";
import{motion} from "framer-motion";
import "./sign-up.styles.scss";
import Loader from "../../components/loader/loader.component";
import { svgVariant,pathVariantBlue,pathVariantGreen ,pathVariantYellow,pathVariantRed ,textVariant} from "./sign-up.animation-variants";
import { ReactComponent as World } from "../../assets/icons/global-line.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down-s-line.svg";

import { auth ,createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";



const SignUp = () => {
    const [labelClicked,setLabelClicked] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const [userDetails,setUserDetails] = useState({
        displayName: "",
                email:"",
                password:"",
                passwordConfirm:""
    })
    

    const  {displayName ,email, password ,passwordConfirm } = setUserDetails;
    const handleChange = (e) => {
        e.preventDefault();
        const {name , value} = e.target;

        console.log(name)
        // console.log(value)

        setUserDetails({...userDetails, [`${name}`]:value  })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const  {displayName ,email,password ,passwordConfirm } = userDetails;

        if(password !== passwordConfirm && !password.includes(passwordConfirm)){
            alert("passwords don't match");

            return;
        }

        try{

            const { user } = await createUserWithEmailAndPassword( auth , email , password);

            console.log( user )

            await createUserProfileDocument(user , { displayName });

        }catch(err){
            alert(err);

            console.log(err)
        }

        setUserDetails({
            displayName: "",
            email:"",
            password:"",
            passwordConfirm:""
            
        })
    }


    
        
        return (
            <div className="center">
                
                    <div className="sign-up">
                    <header className="sign-in__header">
                        <motion.svg 
                        variants={svgVariant}
                        initial="begin"
                        animate="end"
                        className="sign-in__header--logo" width="2452.5px" height="2452.5px" viewBox="-2.45 0 2452.5 2452.5" enableBackground="new 0 0 2447.6 2452.5" xmlns="http://www.w3.org/2000/svg"><g clipRule="evenodd" fillRule="evenodd">
                        <motion.path 
                        variants={pathVariantBlue}
                        d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="none"/><motion.path 
                        variants={pathVariantGreen}
                        d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="none"/><motion.path 
                        variants={pathVariantYellow}
                        d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="none"/><motion.path 
                        variants={pathVariantRed}
                        d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="none"/></g></motion.svg>

                        <motion.h2 variants={textVariant} initial="begin" animate="end">slack</motion.h2>

                    </header>
                    <h2 className="sign-up__title">First, enter your email</h2>
                    <div className="sign-up__title--sub">We suggest using the <strong>email address you use at work.</strong></div>

                    <form className="sign-up__form"  onSubmit={handleSubmit}>
                        <input className="sign-up__url-input" type="email" placeholder="name@work-email.com" required/>

                        <input className="sign-up__url-input" type="password" placeholder="password" required/>
                        
                        <input className="sign-up__url-input" type="password" placeholder="confirm password" required/>

                        <button className="sign-up__btn"
                        onClick={()=> setSubmitted(!submitted)}
                        >{submitted ? <Loader/> : "Shall We?" }</button>
                       
                        <div className="sign-up__checkbox--container">
            
                                    
                            <input 
                            type="checkbox" 
                            className="sign-up__checkbox" 
                            id="home__checkbox" />
                            
                            <motion.svg 
                            className="sign-up__checkbox--mark" 
                            onClick={()=> setLabelClicked(!labelClicked)}
                            fill="none" 
                            stroke="#fff" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg">
                                <motion.path
                            animate={{
                                    fill: labelClicked ? "#611f69" : "none",
                                    opacity:labelClicked ? 1 : 0,
                                    pathLength:labelClicked ? 1 : 0,
                            }}
                            

                            initial={{
                                fill:"none",
                                    opacity:0,
                                    pathLength:0
                            }}

                            transition={{
                                type:"tween",
                                duration:.5
                            }}
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </motion.svg>


                            <motion.svg className="sign-up__checkbox--icon" width="25" height="25" viewBox="0 0 56 48" fill="none" 
                                style={{
                                    borderRadius:"4px",
                                    padding:0,
                                    marginRight:"10px",
                                }}
                            initial={{
                                    fill:"none",
                                    stroke:"none",
                                    opacity:0
                            }}
                            onClick={()=> setLabelClicked(!labelClicked)}
                            animate={{
                                    fill: labelClicked ? "#611f69" : "none",
                                    opacity:1
                            }}
                                xmlns="http://www.w3.org/2000/svg">
                            <rect width="56" height="48" rx="8" fill="none"/>
                            <rect width="56" height="48" rx="8" stroke="#611f69" />

                            </motion.svg>

                            <label
                            onClick={()=> setLabelClicked(!labelClicked)} 
                            htmlFor="home__checkbox"  className="sign-up__checkbox--label">
                            It’s okay to send me emails about Slack.
                            </label>


                            
                        </div>
                        
                    </form>

                    <div className="sign-up__text">
                        <p>By continuing, you’re agreeing to our Customer Terms of Service, Privacy Policy, and Cookie Policy.</p>
                    </div>



                    <div>
                        <ul className="sign-up__footer">

                            <li className="sign-up__footer--link ">Privacy & Terms</li>
                            <li className="sign-up__footer--link ">Contact Us</li>
                            <li className="sign-up__footer--link ">
                                <World className="icon"/>

                                <span>Change region</span>
                                
                                <Arrow className="icon"/>
                            </li>

                        </ul>
                    </div>
                </div>
        
                
            </div>
            
        )
    
}


export default SignUp;