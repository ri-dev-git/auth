import React from 'react'
import {  BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";

import './App.css'
function LandingPage() {
  return (
    <div className="App">
         
         <div className='nav'> 
                 <div className='empty'>

                 </div>
                 <div className='logo'>
                     logo
                 </div>
                 <div className='loginDiv1'>
                 
                     <Link to="/login" className='loginLink'>
                    
                     <button className='loginButton'>Login?</button>
                     
                 </Link>
                 
                 </div>
             </div>
             <div className='homepage'>
                     Homepage Content
             </div> 
         
         
         </div>
  )
}

export default LandingPage