import { auth } from './firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    async function handleSignup(){
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user)
            alert("Signup Success")
        }catch(err){
            console.log(err.message)
        }
    }
    
  return (
    <div>
        <h2>Signup</h2>
        
            <input type='email' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' />
            <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' />
            <button onClick={handleSignup}>Signup</button>
       
        
    </div>
  )
}

export default Signup