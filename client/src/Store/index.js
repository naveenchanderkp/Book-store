import {configureStore} from '@reduxjs/toolkit'
import authorization from '../Store/authSlice'


export const store = configureStore({
    reducer:{
        authorization
    }
}) 