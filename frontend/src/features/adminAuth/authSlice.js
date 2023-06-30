import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
  admin: admin ? admin : null,
  isError1: false,
  isSuccess1: false,
  isLoading1: false,
  message1: '',
}

export const login1 = createAsyncThunk('auth/login1', async (admin, thunkAPI) => {
  try {
    return await authService.login1(admin)
  } catch (error) {
    const message1 =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message1)
  }
})

export const logout1 = createAsyncThunk('auth/logout', async () => {
  await authService.logout1()
})

export const authSlice = createSlice({
  name: 'auth1',
  initialState,
  reducers: {
    reset1: (state1) => {
      state1.isLoading1 = false
      state1.isSuccess1 = false
      state1.isError1 = false
      state1.message1 = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login1.pending, (state1) => {
        state1.isLoading1 = true
      })
      .addCase(login1.fulfilled, (state1, action) => {
        state1.isLoading1 = false
        state1.isSuccess1 = true
        state1.admin = action.payload
      })
      .addCase(login1.rejected, (state1, action) => {
        state1.isLoading1 = false
        state1.isError1 = true
        state1.message1 = action.payload
        state1.admin = null
      })
      .addCase(logout1.fulfilled, (state1) => {
        state1.admin = null
      })
  },
})

export const { reset1 } = authSlice.actions
export default authSlice.reducer