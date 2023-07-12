import React from 'react'
import {auth, googleProvider} from './../config/firebase'
import {signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup} from 'firebase/auth'
import { useState, useEffect } from 'react'



export default function Auth() {
    const [email, setEmail] = useState("")
    const [password,setPassword] = useState("")

    console.log(auth?.currentUser?.email)



    const signIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth,email, password);
        }catch(err){
            console.error(err)
        }
    }

    const signInWithGoogle = async () =>{
        try{
        await signInWithPopup(auth,googleProvider);
        }catch(err){
            console.error(err)
        }
    };

    const logout = async () => {
        try{
            await signOut(auth);

        }catch(err){
            console.error(err)
        }
    };



    return (
    <div>auth
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input placeholder='Password' type='password' onChange={(e)=> setPassword(e.target.value)}/>

        <button onClick={signIn}>Sign In</button>

        <button onClick={signInWithGoogle}>Google Login</button> 
        

        <button onClick={logout}> Logout</button>
    </div>
    )
}
