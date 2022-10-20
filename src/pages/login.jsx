import React,{useState} from 'react'
import "./login.css"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app,auth } from "../../firebase"
import {  BrowserRouter as Router,Link,Routes,Route, redirect} from "react-router-dom";

function login() {

      
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const auth = getAuth();
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
                        <div className='Google'>
                            SignIn with Google?
                        </div>
                        <div className='facebook'>
                            SignIn with Facebook?
                        </div>
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