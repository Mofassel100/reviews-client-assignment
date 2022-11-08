import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../FirebaseConfig/FirebageConfig'
export const AuthContext = createContext()



const AuthProvider = ({children}) => {

const [user,setUser]= useState()
const [loader,setLoader]= useState()
const googleProvidr = new GoogleAuthProvider();

const auth = getAuth(app)
// Register from create 
const NewRegisterUser = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);


}
// ----------------
// login from

const loginUser = (email,password)=>{

    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
}
// ---------------
// log Out from 

const LogOutUser = ()=>{

    setLoader(true)
    return signOut(auth)
}
// -----------
// google sign in

const googleLogIn = ()=>{

    setLoader (true)
    return signInWithPopup(auth,googleProvidr)
}
// -----------
// useEffect 


useEffect(()=>{

const unsubCriber = onAuthStateChanged(auth,current=>{
    
    setLoader(false)
    setUser(current)
})
return ()=>unsubCriber()

},[])
// ------------


const allInfoData = {
    user,
    loader,
    NewRegisterUser,
    loginUser,
    LogOutUser,


}


    return (
        <div>
            <AuthContext.Provider value={allInfoData}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;