import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import centreService from './centreService'

const initialState = {
  centres: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getCentres = createAsyncThunk(
  'centres/getAll',
  async (_, thunkAPI) => {
    try {
      return await centreService.getCentres()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const centreSlice = createSlice({
  name: 'centre',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCentres.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCentres.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.centres = action.payload
      })
      .addCase(getCentres.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const { reset } = centreSlice.actions
export default centreSlice.reducer