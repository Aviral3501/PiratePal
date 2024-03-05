
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from "../../hooks/useGetConversations"
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] =useState("");
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations();

  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(!search){
      toast.error("Search field can't be empty");
      return;
    }
     if(search.length<3){
      toast.error("Search field must be at least  3 characters long");
      return;
    } 

    //srach the username  in all conversations and set it as selected conversation
    const conversation =conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
        await setSelectedConversation(conversation);
     
        // window.scrollTo({ top: document.documentElement.offsetHeight, behavior: "  smooth" });
    } else{
       toast.error('User not found');
    }
    setSearch("");
   
  };


  return (
    <div>
      <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full text-white' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
           <FaSearch  className='w-6 h-6 outline-none'/>
        </button>
      </form>
    </div>
  )
}

export default SearchInput
