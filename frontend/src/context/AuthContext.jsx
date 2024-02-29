import { createContext, useState ,useContext} from "react";

// Create a new React context for managing authentication state
export const AuthContext =createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
} 



export const AuthContextProvider = ({children})=>{

    //get the drfault value from local  storage || null  if there is no data in it.
    //but first convert the string into object from the local storage 
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user"))||null);


    //wraaping entrire apllication in AuthContext.Provider , so that whole application can use the data in value
     // Provide the authentication user state and setter to the entire application through the context
     return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}