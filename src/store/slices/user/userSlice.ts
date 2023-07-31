import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: { currPage: 1, limitPerPage: '10' },
  remainingRequests: {
    remaining: '',
    limit: '',
  },
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default userSlice.reducer
