import React, { useState } from 'react';
import "./signup.css"
import GenderCheckbox from './GenderCheckbox';
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignup";



const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const { loading, signup } = useSignUp();


  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender: gender })
  }

  const handleSubmit = async (e) => {
    //tp prevent reloading  of the page after submitting the form
    e.preventDefault();
    console.log(inputs);
    await signup(inputs);

    // Clear the input fields by setting all values to an empty string
    setInputs({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    });

  }

  return (
    <>
      <div className='login-card'>
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
          <div className='w-full p-6 rounded-lg'>
            <h1 className=' text-3xl font-bold text-center p-4 text-black'> SignUp
              <span className='text-red-500 pl-2'> Chat App</span>
            </h1>

            <form onSubmit={handleSubmit}>

              <div>

                <div>
                  <label className='=label p-2'>
                    <span className='text-black label-text p-2 '>Name</span>
                  </label>
                  <input type="text" placeholder='Enter Full name' className='w-full input input-bordered h-10 my-1'
                    value={inputs.fullName}
                    onChange={(e) => { setInputs({ ...inputs, fullName: e.target.value }) }}>
                    {/* updating the fullname whenever there is change in input */}
                  </input>
                </div>


                <div>
                  <label className='=label p-2'>
                    <span className='text-black label-text p-2 '>Username</span>
                  </label>
                  <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10 my-1'
                    value={inputs.username}
                    onChange={(e) => { setInputs({ ...inputs, username: e.target.value }) }}
                    autoComplete='username'>

                    {/* updating the username whenever there is change in input */}
                  </input>
                </div>

                <div>
                  <label className='label p-2'>
                    <span className='text-black label-text px-2'>Password</span>
                  </label>
                  <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'
                    value={inputs.password}
                    onChange={(e) => { setInputs({ ...inputs, password: e.target.value }) }}
                    autoComplete='new-password' //to tell the browser its a new password --> just for user expiriece
                  ></input>
                </div>

                <div>
                  <label className='label p-2'>
                    <span className='text-black label-text px-2'> Confirm Password</span>
                  </label>
                  <input type='password' placeholder='Confirm password' className='w-full input input-bordered h-10'
                    value={inputs.confirmPassword}
                    onChange={(e) => { setInputs({ ...inputs, confirmPassword: e.target.value }) }}
                    autoComplete='new-password' //to tell the browser its a new password --> just for user expiriece
                  ></input>
                </div>

                <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                <div className="dont-have-acc">
                  <Link to="/login" className='text-sm hover:underline hover:text-black mt-2 mx-2 inline-block' >{"Already have an account?"}</Link>
                </div>


                <div>
                  <button className={`btn btn-block btn-sm mt-2`} disabled={loading}>
                    {loading ?<span className='loading loading-spinner'></span> : "Sign Up"}
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

export default SignUp;

