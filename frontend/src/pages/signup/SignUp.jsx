import React from 'react';
import "./signup.css"
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
  return (
    <>
      <div className='login-card'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg'>
            <h1 className=' text-3xl font-bold text-center p-4 text-black'> SignUp
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

                <div>
                  <label className='label p-2'>
                    <span className='text-black label-text px-2'> Confirm Password</span>
                  </label>
                  <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'></input>
                </div>

                <GenderCheckbox></GenderCheckbox>
                <div className="dont-have-acc">
                <a href="/" className='text-sm hover:underline hover:text-black mt-2 mx-2 inline-block' >{"Already have an account?"}</a>
                </div>
               

                <div>
                  <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
                </div>

                
                

              </div>
            </form>


          </div>

        </div>

      </div>


    </>
  )
}

export default SignUp;

