import React, { useState } from 'react'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    async function handleSignup(e){
        e.preventDefault()
        if(!email || !password) return alert("Please fill all fields")
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user)
            alert("Success Signup");
            navigate('/dashboard')
        }catch(error){
            console.log(error.message)
            alert(error.message)
        }

    }
    
  return (
    <div className='auth-page-wrapper'>
        <div className='auth-container'>
            <div className='auth-header'>
                <h2>Create Account</h2>
                <p>Join us and start managing your workspace</p>
            </div>
        
        <form className='auth-form' onSubmit={handleSignup}>

            <div className='auth-input-group'>
                <label>Email Address</label>
                <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='name@example.com' required/>
            </div>

            <div className='auth-input-group'>
                <label>Password</label>
                <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='••••••••' required/>
            </div>
            
            <button className='auth-submit-btn' type='submit'>Sign Up</button>

            <div className='auth-footer'>
                <button className='auth-toggle-btn' type='button' onClick={()=> navigate('/login')}>Login here</button>
            </div>

        </form>
        </div>
    </div>
  )
}

export default Signup