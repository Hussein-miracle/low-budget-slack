// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";

import { GoogleAuthProvider , getAuth ,signInWithPopup} from "firebase/auth";

import {getFirestore , collection, getDocs ,getDoc,doc ,setDoc ,writeBatch}from  "firebase/firestore";




// low budget slack's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7BHGxLKd8ocvJyhMKvjfTDzsYo6lb9Yc",
  authDomain: "low-budget-slack.firebaseapp.com",
  projectId: "low-budget-slack",
  storageBucket: "low-budget-slack.appspot.com",
  messagingSenderId: "323136424491",
  appId: "1:323136424491:web:21b58b9fe5f122f0e1f86e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);



////GOOGLE AUTHENTICATION

export const auth = getAuth();


const provider = new GoogleAuthProvider();//this is v9's implementation

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters( { "prompt" : "select_account"} );


export const signInWithGoogle =  () => { //ny own function

    try{

        const singInResponse = signInWithPopup(auth , provider);
    
        return singInResponse;

    }catch(error){
         // Handle Errors here.
        const errorCode = error.code;
        
        console.log(errorCode + "errorcode");
        const errorMessage = error.message;
        console.log(errorMessage + "errormessage");
        // The email of the user's account used.
        const emailError = error.email;
        console.log(emailError + "emailError");
        // The AuthCredential type that was used.
        const credentialError = GoogleAuthProvider.credentialFromError(error);
        console.log(credentialError + "credential Error")
    }
}   





export const createUserProfileDocument = async ( userAuth , additionalData) => {

    try{
        if(!userAuth){
        return;
       }

    //TO GET A DOCUMENT 

    const userRef = doc( firestoreDatabase ,"users", `${userAuth.uid}`);

    console.log("[userRef]" , userRef);


    const snapShot = await getDoc( userRef );
    console.log("[snapShot]",snapShot);


    //TO GET A COLLECTION
    const collectionRef = collection( firestoreDatabase , `users`)  ;

    console.log("[collectionRef]",collectionRef)

    


    // const collectionSnapshot = await getDocs(collectionRef);

    // console.log("[collectionSnapshot]",collectionSnapshot);

    // console.log("[collectionSnapshot docs]",collectionSnapshot.docs);

    // console.log("[collections]",{collections:collectionSnapshot.docs.map( doc => doc.data() )})

    

    if (!snapShot.empty) {
        const { displayName , email} = userAuth;

        const date = new Date();

        const creationDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

        const createdAt = `${date}`;

        const momentId = date.getTime();
        
        // console.log({ displayName:displayName ,email:email ,createdAt :createdAt , creationDate,momentId ,...additionalData})

        const snapShotData = { 
            displayName:displayName ,
            email:email ,
            createdAt:createdAt , 
            creationDate,momentId ,
            ...additionalData
        }


        await setDoc(userRef , snapShotData);

        console.log("[setDoc DONE!]")
        
            
    }

    return userRef;
    }catch(err ){
        console.error( "failed to [createUserProfileDocument]" , err)

        console.error(" error creating user  " + err.message)
        
    }
    
    //TO GET A COLLECTION

    // const userRef = await getDocs(collection( getFirestore() , `users/fghsgdhfsg/${userAuth.uid}`) ) ;
    // console.log(userRef)

    // const snapShot = userRef.data();
    // console.log(snapShot)
    
    // console.log( await getDocs(collection( getFirestore() , "users/fghsgdhfsg/rtyk") ) );

}