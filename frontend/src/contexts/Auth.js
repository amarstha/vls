import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';
export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('jwt_token') ? true : false);

    const [loggedInUser, setLoggedInUser ] = useState(null);
    useEffect(() => {
        (async()=>{
            if(isLoggedIn === true){
            	const token = localStorage.getItem("jwt_token");
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/users/profile/`, {
	                headers: {
				      Authorization: `Token ${token}`
				    }
            	})
                setLoggedInUser(res.data);
            }
        })()
    }, [isLoggedIn])

    return (
        <AuthContext.Provider value={{ isLoggedIn,loggedInUser, setLoggedInUser }}>
            {props.children}
        </AuthContext.Provider>
    )

}

 
export default AuthContextProvider;