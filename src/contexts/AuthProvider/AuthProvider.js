import React from 'react';
import { createContext } from 'react';
import {getAuth, signInWithPopup} from 'firebase/auth'
import App from '../../firebase/firebase.config';



export const AuthContext = createContext()

const auth = getAuth(App)

const AuthProvider = ({children}) => {
    const user = {displayName:'Rimon'}

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider)
    }

const authInfo ={user,providerLogin}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;