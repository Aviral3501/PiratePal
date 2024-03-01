import { useLogout } from "../../hooks/useLogout";
import { MdLogout } from "react-icons/md";


const LogoutButton = () => {
  const {loading,logout} =useLogout();

  return (
    <div className='mt-auto'>
    
      {!loading ? (
          <MdLogout className="cursor-pointer " size={22} onClick={logout} />
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton;
