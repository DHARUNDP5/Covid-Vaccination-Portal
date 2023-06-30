import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import authReducer1 from '../features/adminAuth/authSlice'
import applyReducer from '../features/apply/applySlice'

export const store = configureStore({
  reducer: {  apply: applyReducer, auth: authReducer, auth1: authReducer1 }
})