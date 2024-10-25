import {configureStore} from '@reduxjs/toolkit'
import authorization from '../Store/authSlice'
import users from '../Store/user'


export const store = configureStore({
    reducer:{
        authorization,
        users
    }
}) 