import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                alt="Tailwinf chat bubble component "
                src = {"https://www.bing.com/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"}
                />
            </div>
        </div>

        <div className='chat-bubble text-white bg-blue-500'>Hi whats up</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:24</div>
    </div>
  )
}

export default Message
