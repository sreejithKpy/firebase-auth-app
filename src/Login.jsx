import React, { useState } from 'react'
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    async function handleLogin(e){
        e.preventDefault();
        if(!email || !password) return alert("Please fill all fields");
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user)
            alert("Success Login")
            navigate('/dashboard')
        }catch(error){
            console.log(error.message)
            alert("Invalid Email or Password");
        }
    }
  return (
    <div className='auth-page-wrapper'>
        <div className='auth-container'>
            <div className='auth-header'>
                <h2>Welcome Back</h2>
                <p>Enter your credentials to access your account</p>

            </div>

        
            <form className='auth-form' onSubmit={handleLogin}>
                <div className='auth-input-group'>
                    <label>Email Address</label>
                    <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='name@example.com' required/>
                </div>

                <div className='auth-input-group'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='••••••••' required/>

                </div>
                
                <button className='auth-submit-btn' type='submit'>Login</button>
                <div className='auth-footer'>
                    <p>Don't have an account?<button className='auth-toggle-btn' onClick={()=> navigate('/')}>Register here</button></p>

                </div>
                

            </form>
        </div>
    </div>
  )
}

export default Login