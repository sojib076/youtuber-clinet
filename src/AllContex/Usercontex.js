import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import app from '../firebase/firebase.init';



const auth = getAuth(app);
export const Authcontex = createContext()

const googelProvider = new GoogleAuthProvider()


// this contain all the data that we want to share with other components


const Usercontex = ({ children }) => {


    const [user, setUser] = useState({})

    const [loading, setLoading] = useState(true)


    function createuser(email, password) {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    

    function login(email, password) {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

/// google login
 
const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googelProvider)
}

    function logout() {
        return signOut(auth)
    }
    

    const updateuser = (name,img) => {
        setLoading(false)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img,
        })
        
     }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, Currentuser => {
            setUser(Currentuser)
            setLoading(false)
        })
        return () => unsubscribed()
    }, [])
    const contexinfo = { createuser, login, user, loading, logout,updateuser,googleSignIn }

    return (
        <Authcontex.Provider value={contexinfo}>
            {
                children
            }
        </Authcontex.Provider>

    );
};

export default Usercontex;