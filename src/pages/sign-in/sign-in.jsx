import React,{useState} from "react";
import {Link , Navigate} from "react-router-dom";
import {motion} from "framer-motion";

import { auth , signInWithGoogle } from "../../firebase/firebase.utils";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { svgVariant,pathVariantBlue,pathVariantGreen ,pathVariantYellow,pathVariantRed ,textVariant} from "./sign-in.animation-variants";
import Loader from "../../components/loader/loader.component";
import "./sign-in.styles.scss";
import { ReactComponent as World } from "../../assets/icons/global-line.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down-s-line.svg";


const SignIn = () => {
    const [submitted,setSubmitted] = useState(false)
    const [userCredentials ,setUserCredentials ] = useState({
        email : "",
    })

    
    const {email,password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        // signInWithGoogle();
        const {email , password } =  userCredentials ;
        try{
            await createUserWithEmailAndPassword(auth , email , password);

            setUserCredentials({email:"" , password: ""})

        }catch(err){
            alert(err)
            alert(err.message)
            console.log(err)
            console.log(err.message)
        }


        
    }

    const handleChange = (event) =>{
        // console.log(event.target);
        const {name , value} = event.target;
        // console.log(name);
        setUserCredentials( {...userCredentials, [name] : value } )
        
        
    }

    const handleClick = (e) => {
        e.preventDefault();
        // setTimeout(()=>{
        //     setSubmitted(true);
        // },1000)
    }
    
        return (
            
                <div className="sign-in">
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
                    <h2 className="sign-in__title">Sign in to your workspace</h2>
                    <h4 className="sign-in__title--sub">Enter your workspace's Slack URL</h4>

                    <form className="sign-in__form"  onSubmit={handleSubmit}>
                        {/* <input className="sign-in__url-input" type="text" placeholder={`your-work/slack email here`} required/> */}

                        {/* <button className="sign-in__btn"
                        onClick={handleClick}
                        >{submitted ? <Loader/> : "Continue" }</button> */}

                        
                        <button className="sign-in__btn"
                        onClick={signInWithGoogle}
                        >Google Sign-In</button>
                    </form>



                    <div className="sign-in__text">
                        <p>Don't know your workspace URL? <span className="sign-in__link">Find your workspace</span><Link to = "/signup">here</Link></p>
                    <p>Looking to create workspace instead? <a className="sign-in__link underline">Create a new workspace</a></p>
                    </div>


                    <div>
                        <ul className="sign-in__footer">

                            <li className="sign-in__footer--link ">Privacy & Terms</li>
                            <li className="sign-in__footer--link ">Contact Us</li>
                            <li className="sign-in__footer--link ">
                                <World className="icon"/>

                                <span>Change region</span>
                                
                                <Arrow className="icon"/>
                            </li>

                        </ul>
                    </div>
                </div>

            
        )
    
}

export default SignIn;