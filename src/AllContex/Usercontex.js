import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import app from '../firebase/firebase.init';


const auth = getAuth(app);
export const Authcontex = createContext()




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
    function logout() {
        return signOut(auth)
    }
 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, Currentuser => {
                setUser(Currentuser)
                setLoading(false)
        })
        return () => unsubscribed()
    }, [])
    const contexinfo = { createuser, login,user,loading,logout }

    return (
        <Authcontex.Provider value={contexinfo}>
            {
                children
            }
        </Authcontex.Provider>

    );
};

export default Usercontex;