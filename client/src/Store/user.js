import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    formData: '',
    userData:[]
  },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload;
    },
    updateUserData : (state,action)=>{
      state.userData = action.payload
    }
  },
  
});

export const { updateFormData,updateUserData } = userSlice.actions;
export default userSlice.reducer;

export const formDetails = (formData) => async (dispatch) => {
  try {
    const { data, status } = await axios.post(
      "http://localhost:5000/api/books/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    if (status === 200) {
      dispatch(updateFormData(data));
      console.log(data)
      
    } else {
      console.log("Error uploading data");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getBooks = ()=>async(dispatch)=>{
  try {
    const{status,data} = await axios.get('http://localhost:5000/api/books/getBooks')
   
    if(status === 200){
      dispatch(updateUserData(data.books))
      console.log(data)
    }
  } catch (error) {
      console.log("errore",error)
  }
}
