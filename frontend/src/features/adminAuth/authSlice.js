import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const login1 = createAsyncThunk('auth/login1', async (admin, thunkAPI) => {
  try {
    return await authService.login1(admin)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

export const logout1 = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth1',
  initialState,
  reducers: {
    reset1: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login1.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login1.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admin = action.payload
      })
      .addCase(login1.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.admin = null
      })
      .addCase(logout1.fulfilled, (state) => {
        state.admin = null
      })
  },
})

export const { reset1 } = authSlice.actions
export default authSlice.reducer