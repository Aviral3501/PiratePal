
import { useState } from 'react';
import toast from 'react-hot-toast';

const useSignup = () => {
  
    const [loading,setLoading] =useState(false);

    const signup =async({fullName, username, password, confirmPassword , gender})=>{
       const success= handleInputErrors({fullName,username,password,confirmPassword,gender});
      
       if(!success)return;

       //----->passes all the checks
       setLoading(true);
       try {
        const res = await fetch("/api/auth/signup" , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName, username, password, confirmPassword , gender})
        });

        const data =await res.json();
        console.log(data);

        
       } catch (error) {
        toast.error(error.message);
        console.error(error);
        
       }finally{
        setLoading(false);
       }

    };

    return {loading , signup};


 

}

export default useSignup


function  handleInputErrors({ fullName, username, password, confirmPassword, gender }){
    //if any field is empty
    if(!fullName || !username || !password || !confirmPassword || !gender){
            toast.error('PLease fill all the fields');
            return false;
    }

    if(password !== confirmPassword) {
        toast.error("Passwords don't match");
        return false;
      }

    if(password.length < 6){
        toast.error("Password must be of 6 characters");
        return false;
    }

    return true;



}
