import React from 'react'
import SearchInput from './SearchInput'

import Logout from './Logout'
import "./sidebar.css"
import Conversations from './Conversations'


const Sidebar = () => {
  return (
    <div className='sidebar-card border-r p-4 flex flex-col border-slate-500'>
       {/* three components */}
       <SearchInput/>
       <div className="divider"></div> 
       <Conversations/>
       <Logout/>
      
    </div>
  )
}

export default Sidebar
