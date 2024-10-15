import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const counterSlice = createSlice({
    name:"authorization",
    initialState:{
        token:null,
        isSignup:null,
        signupMessage:"",
        isLogin:""
    },
    reducers:{
        updateToke:(state,action)=>{
            state.token = action.payload
        },
        updateIsSignup : (state,action)=>{
            state.isSignup = action.payload
        },
        updateSignupMessage : (state,action)=>{
            state.signupMessage = action.payload
        },
        updateIsLogin : (state,action)=>{
            state.isLogin = action.payload
        }
    }

})

export const {
    updateToke,
    updateIsSignup,
    updateSignupMessage,
    updateIsLogin
} = counterSlice.actions
export default counterSlice.reducer


export const registerUser = (formData) => async(dispatch) =>{
   try {
     const response = await axios.post('http://localhost:5000/api/books/register',formData)
     dispatch(updateIsSignup(response.data))
     console.log(response.data)
   } catch (error) {
    console.log("Error registerration is failed",error)
   }
}

export const loginUser = (formData)=>async(dispatch)=>{
    try {
        const response = await axios.post("http://localhost:5000/api/books/login",formData)
        dispatch(updateIsLogin(response.data))
        if(!response.status){
            console.log("invalid user")
        }
    } catch (error) {
    console.log("Login in failed")        
    }
}