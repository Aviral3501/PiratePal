import React, { useState } from 'react'
import "./login.css"
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const {loading,login}=useLogin();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(username,password);
    //use a hook for login
  }


  return (
    <>
      <div className='login-card'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg'>
            <h1 className=' text-3xl font-bold text-center p-4 text-black'> Login
              <span className='text-red-500 pl-2'> Chat App</span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label className='label p-2'>
                  <span className='text-black label-text p-2 '>Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 my-1' autoComplete="username" 
                  value={username}
                  onChange={(e)=>{setUsername(e.target.value)}}></input>

                <div>
                  <label className='label p-2'>
                    <span className='text-black label-text px-2' >Password</span>
                  </label>
                  <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10' autoComplete="current-password"
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div className="dont-have-acc">
                  <Link to="/signup" className='text-sm hover:underline hover:text-black mt-2 mx-2 inline-block'>{"Don't have an account?"}</Link>
                </div>
                <div>
                  <button className={`btn btn-block btn-sm mt-2`} disabled={loading}>
                    {loading ?<span className='loading loading-spinner'></span> : "Login"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;


