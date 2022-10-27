import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import App from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext()

const auth = getAuth(App)

const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)

   const googleProvider = new GoogleAuthProvider()
   const githubProvider = new GithubAuthProvider()

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect( () =>{
   const unSubscribe =onAuthStateChanged(auth, (currentUser) =>{
            console.log(' inside auth state changed',currentUser);
            setUser(currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])

const authInfo ={user,providerLogin,logOut,createUser,signIn}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;