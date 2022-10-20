import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPage from './landingPage';
import {  BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import Login from "./pages/login.jsx";
import SignUp from "./pages/signUp.jsx"
// import { app,auth } from "../firebase"
// import { signInWithEmailAndPassword } from "firebase/auth"

function App() {

    // const [count, setCount] = useState(0)



  return (
    <div className='App'>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>
                }/>
                    <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                </Routes>
        
        </Router>
    </div>
  )
}

export default App
