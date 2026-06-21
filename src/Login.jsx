import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function handleLogin(){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential.user)
            alert("Login Success")
            navigate('/dashboard')
        }catch(error){
            console.log(error.message)
        }
    }
  return (
    <div>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password"/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login