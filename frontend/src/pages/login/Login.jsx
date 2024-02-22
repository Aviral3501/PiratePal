import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <>
      <div className='login-card'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg'>
            <h1 className=' text-3xl font-bold text-center p-4 text-black'> Login
              <span className='text-red-500 pl-2'> Chat App</span>
            </h1>

            <form>
              <div>
                <label className='=label p-2'>
                  <span className='text-black label-text p-2 '>Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 my-1'></input>

                <div>
                  <label className='label p-2'>
                    <span className='text-black label-text px-2'>Password</span>
                  </label>
                  <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'></input>
                </div>
                <div className="dont-have-acc">
                <a href="/" className='text-sm hover:underline hover:text-black mt-2 mx-2 inline-block'>{"Don't have an account?"}</a>
                </div>
               

                <div>
                  <button className='btn btn-block btn-sm mt-2'>Login</button>
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
