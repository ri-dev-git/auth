import React,{useState} from 'react'
import "./login.css"
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from "firebase/auth";
import { app,auth } from "../../firebase"
import {  BrowserRouter as Router,Link,Routes,Route, redirect} from "react-router-dom";
// import {  } from "firebase/auth";


function login() {

      
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const providerFB = new FacebookAuthProvider();

//continue with FaceBook
const facebookLogin=()=>{
    signInWithPopup(auth, providerFB)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    console.log(user)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    console.log(error)
    // ...
  });
}
  //continue with google
  const googleLogin=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // ...
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(error)
  });
  }

  //Email and Password Login
    const LogIn=async (auth,email,password)=>{await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
    })
    
    }

//   console.log(email,"e")
  
  return (

            <div className="body">
                <Link to="/" className='logLink'>
                <div className='back'>
                    &lt; Homepage

                </div>
                </Link>
                
            <div className="loginDiv">
            
                <div className="header">
                    Login
                </div>
                
                <div className="credentials">
                    <div className="inputs3">
                        <button className='Google' onClick={()=>{googleLogin()}}>
                            Continue with Google?
                        </button>
                        <button className='facebook' onClick={()=>{facebookLogin()}}>
                            Continue with Facebook?
                        </button>
                    </div>
                    <div className="inputs1">
                        <div className="Head">
                            Email    
                        </div>           
                        <div className='inputDiv'> 
                            <input placeholder="Email" className="cred" onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="inputs2">
                        <div className="Head">
                            Password    
                        </div>
                        <div className='inputDiv'>
                            <input type="password" placeholder="Password" className="cred" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                
            {/* <div className="Already">
                    Don&apos;t have an account? Sign Up
                </div> */}
            <div className="btnDiv">
                
                <div className='logInButt'>
                    <button className="btn" onClick={()=>{
                        LogIn(auth,email,password)
                    }}> 
                            Log In  
                    </button>
                </div>
                <div className='logInButt'>
                    <Link to="/signUp" className='signUpLink'>
                        <button className="btn" > 
                                Sign Up?
                        </button>
                    </Link>
                </div>
                    
            </div>
            </div>
            </div>

  )
}

export default login