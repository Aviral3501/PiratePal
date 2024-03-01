import { Routes ,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Login from "./pages/login/Login"
import SignUp from './pages/signup/SignUp'
import {Toaster} from  'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { Navigate } from 'react-router-dom'


function App() {
    const {authUser} = useAuthContext();//for authentication , if the user is logged in-->
  return (

    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path="/" element={authUser? <Home/>:<Navigate to={"/login"}/>}></Route>  
          <Route path="/login" element={authUser? <Navigate to="/"/> :<Login/>}></Route>  
          {/* if the user is authenticated then got to home else go to signup page  */}
          <Route path="/signup" element={authUser? <Navigate to="/"/> :<SignUp/>}></Route>  

        </Routes>
        <Toaster/>
      </div>
  
    </>
  )
}

export default App 
