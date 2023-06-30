import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import authReducer1 from '../features/adminAuth/authSlice'
import centreReducer from '../features/centre/centreSlice'

export const store = configureStore({
  reducer: {    auth: authReducer,auth1: authReducer1,centre: centreReducer, }
})
