import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading,setLoading] = useState(false);
    const [conversations,setConversations]=useState([]);

    useEffect( ()=>{
        const getConversations = async() =>{
            setLoading(true);
            try {
                const res =await fetch("/api/users");//get req
                const  data=await res.json();
                if(data.error){
                    throw new  Error(data.error);
                }

                setConversations(data);
                
            } catch (error) {
                toast.error(error.message);
                console.error("Error in useGetConversations ",error);
                
            }finally{
                setLoading(false);
            }
        }

        getConversations();

    },[]);//willl run only once -->empty dependency
    return {loading , conversations};
}

export default useGetConversations
