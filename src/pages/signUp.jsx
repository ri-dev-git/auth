
import React,{useState} from 'react'
import "./signUp.css"
import { getAuth, createUserWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from "firebase/auth";
import { app,auth } from "../../firebase"
import {  BrowserRouter as Router,Link,Routes,Route, redirect} from "react-router-dom";


function SignUp() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [firstName,setFName]=useState("")
  const [lastName,setLName]=useState("")

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
  const googleLogin=async()=>{
    await signInWithPopup(auth,provider)
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
    const signUp=async (auth,email,password)=>{await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }

  return (
    <div className="body">
                <Link to="/" className='logLink'>
                <div className='back'>
                    &lt; Homepage

                </div>
                </Link>
                <Link to="/login" className='logLink'>
                <div className='loginBack'>
                    &lt; Login

                </div>
                </Link>
            <div className="SignUpDiv">
            
                <div className="header">
                    Sign Up
                </div>
                
                <div className="signUpChild">
                <div className='sibling'>
                  <div className='profilePicParent'>
                    <div className='profilePicChild1'>
                      <div className='profilePicDiv'>
                        <img src="data:image/png;base64,
                        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" 
                        alt="avatar"
                        accept="image/x-png,image/gif,image/jpeg"
                        className='avatar'/>
                      </div>
                    </div>
                    <div className='profilePicChild1'>
                      <div className='fileDiv'>
                        <input type="file"/>
                      </div>
                      <div className='UploadDiv'>
                        <button>Upload</button>
                      </div>
                    </div>
                    
                  </div>
                  <div className='nameParent'>
                      <div className='nameChild1'>
                        <div className="signUPHead">
                          First Name
                        </div>
                        <div className='signUPinputDiv'>
                          <input type="text" onChange={(e)=>{setFName(e.target.value)}} placeholder='First Name' className="signUPcred"/>
                        </div>
                      </div>
                      <div className='nameChild1'>
                        <div className="signUPHead">
                          lastName
                        </div>
                        <div className='signUPinputDiv'>
                          <input type="text" onChange={(e)=>{setLName(e.target.value)}} placeholder='Last Name' className="signUPcred"/>
                        </div>
                      </div>
                  </div>

                </div>
                  <div className="sUpCredentials">
                    <div className='credSib1'>
                    <div className="signUPinputs3">
                      <button className='signUPGoogle' onClick={()=>{googleLogin(provider)}}>
                              Continue with Google?
                          </button>
                          <button className='signUPfacebook' onClick={()=>{facebookLogin()}}>
                              Continue with Facebook?
                          </button>
                      </div>
                    </div>
                      <div className='credSib1'>
                      <div className="signUPinputs1">
                          <div className="signUPHead">
                              Email    
                          </div>           
                          <div className='signUPinputDiv'> 
                              <input placeholder="Email" className="signUPcred" onChange={(e)=>{setEmail(e.target.value)}}/>
                          </div>
                      </div>
                      <div className="signUPinputs2">
                          <div className="Head">
                              Password    
                          </div>
                          <div className='signUPinputDiv'>
                              <input type="password" placeholder="Password" className="cred" onChange={(e)=>{setPassword(e.target.value)}}/>
                          </div>
                      </div>

                      </div>
                  </div>
                  
                </div>
                
            {/* <div className="Already">
                    Don&apos;t have an account? Sign Up
                </div> */}
            <div className="btnDiv">
              
                <div className='logInButt'>
                    {/* <Link to="/signUp" className='signUpLink'> */}
                        <button className="btn" onClick={()=>{signUp(auth,email,password)}}> 
                                Sign Up
                        </button>
                    {/* </Link> */}
                </div>
                    
            </div>
            </div>
            </div>
  )
}

export default SignUp