import React, { useState } from "react";
import { registerUser } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {toast,ToastContainer,toastContainer} from 'react-toastify'

export default function Signup() {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[errors,setErrors] = useState({})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () =>{
    let errors = {}

    if(!formData.name){
      errors.name = "Name is required"
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if(!formData.email){
      errors.email = "Email is required"

    }else if(!emailRegex.test(formData.email)){
      errors.email = "Email is not valid"
    }

    if(!formData.password){
      errors.password = "Password is required"
    }else if(formData.password.length < 6) {
      errors.password = "Password must be atleast 6 characters"
    }
    return errors
  }
 

  const handleRegister = (event) => {
    event.preventDefault();
    const validateError = validate()
    setErrors(validateError)

    if(Object.keys(validateError).length === 0){
     const result =  dispatch(registerUser(formData));

     if(result.meta.requestStatus === "fullfiled"){

      toast.success("Registration successfull!",{
      position: toast.POSITION.TOP_CENTER,
      autoClose:2000
     });
      navigate('/login')
    }else{
      toast.error("Registration failed,try agian",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:2000
      })
    }
  }
  
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="bg-white px-6 py-6 border-2 border-gary-100 rounded-3xl">
        <h1 className="text-4xl font-semibold">Welcome back!!</h1>
        <p className=" text-lg flex justify-center font-bold mt-4">
          SIGNUP
        </p>
        <div>
          <div className="relative" >
            <label className="text-lg font-medium">Full Name</label>
            <input
              onChange={handleChange}
              className="w-full border-2 border-gary-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your email"
              name="name"
            />
            {errors.name && <span className="text-red-500 absolute block text-sm mt-1">{errors.name}</span>}
          </div>
          <div className="relative mt-5">
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gary-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500 absolute block text-sm mt-1">{errors.email}</span>}
          </div>
          <div className="relative mt-5">
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gary-100 rounded-xl p-3 mt-1 bg-transparent"
              placeholder="Enter your Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            {errors.password && <span className="text-red-500 absolute block text-sm mt-1">{errors.password}</span>}
          </div>
          <div>
            <div className="mt-6 flex justify-between items-center">
              {/* <input type="checkbox" id="remember" />
              <label className="mr-12 font-medium text-base" htmlFor="remember">
                Remember 30 days
              </label> */}
              <button className="font-medium text-base text-blue-500">
                Forgot password
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-y-4">
            <button className="active:scale-[.98] active:duartion-75 transition-all hover:scale-[1.01] ease-in-out bg-violet-500 text-white text-lg font-bold py-2 rounded-xl">
              Signup
            </button>
            {/* <button className="flex border-2 border-gray-100 py-2 rounded-xl items-center justify-center active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
              <svg
                viewBox="-3 0 262 262"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  ></path>
                </g>
              </svg>
              Sign in with google
            </button> */}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <p className="font-medium text-base">Already have an account?</p>
            <Link to="/login" className="ml-2 font-medium text-base text-blue-400">
              Login
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </form>
  );
}
