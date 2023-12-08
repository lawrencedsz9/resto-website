import { useContext, useEffect, useState,createContext } from 'react'
import App from '../App'


export const Context = createContext({})

export const ContextProvider = ({ children }) => {
    // State for the user object. This will be used to store any information about a logged in user.
    const [userLoggedin, setUserLoggedIn] = useState(false)
 
    return (
        <Context.Provider value={{ userLoggedin,setUserLoggedIn }}>
            {children}
        </Context.Provider>
    );
}