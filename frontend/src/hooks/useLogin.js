import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";





const useLogin = () => {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const login =async(username,password)=>{
        setLoading(true);
        try {
            const res = await fetch('/api/auth/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json" },
                    body:JSON.stringify({username,password})
            });

            const data = await res.json();//userdata
            if(data.error){
                throw new Error(data.error);
            }

            // update the global state with the logged in user details
            localStorage.setItem("chat-user" ,JSON.stringify(data));
            setAuthUser(data);//logged in or authoruzed
            
        } catch (error) {
            console.error("Error in useLogin hook ,",error);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
    return {loading,login}
}

export default useLogin
