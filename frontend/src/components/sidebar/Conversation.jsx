import React from 'react'

const Conversation = () => {
  return (
    <>
    <div className='flex gap-2 items-center hover-bg-sky-500 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online '>
        <div className='w-12 rounded-full'>
          <img src="https://www.bing.com/th?id=OIP.Ii15573m21uyos5SZQTdrAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2" alt="user avatar"></img>
        </div>
      </div>

      <div className='flex flex-col flex-1 '>
        <div className='flex gap-3 justify-between '>
          <p className='font-bold text-black-200'>Aviral Singh</p>
          <span className='text-xl'>😊</span>
        </div>
      </div>



    </div>
    <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
