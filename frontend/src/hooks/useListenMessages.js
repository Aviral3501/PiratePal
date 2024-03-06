
import { useSocketContext } from '../context/SocketContext'
import useConversation from "../zustand/useConversation"
import { useEffect } from 'react';
import notificationSound from "../assets/sound/frontend_src_assets_sounds_notification.mp3"

const useListenMessages = () => {
    const {socket}= useSocketContext();
    const {messages,setMessages}=useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake =true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages,newMessage]);


        });        

        return () => socket?.off("newMessage"); //unmount -->dont want to listen to an mevent more than once
    },[socket,setMessages,messages])
 
}

export default useListenMessages
