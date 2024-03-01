import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })


            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            //if no error remove the token from the local storage
            localStorage.removeItem("chat-user"); //update the auth value  ---> user has logged out i.e not authenticated
            setAuthUser(null);

        } catch (error) {
            toast.error(error.message);
            console.error("Internal server error , in logout hook-->", error);
            return res.status(500).json({ "message": "Internal server error" });

        } finally {
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout ;
