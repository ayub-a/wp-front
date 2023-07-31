import { createSlice } from '@reduxjs/toolkit'
import {
  collectionsBySearchReducer,
  photosBySearchReducer,
  usersBySearchReducer,
} from './searchExtraReducers'
import { SearchState } from './type'

const initialState: SearchState = {
  searchQuery: '',
  photos: {
    total: '',
    items: [],
  },
  collections: {
    total: '',
    items: [],
  },
  users: {
    total: '',
    items: [],
  },
  page: { currPage: 1, limitPerPage: '10' },
  isLoading: false,
  error: null,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearchState(state) {
      state.searchQuery = ''
      state.page = { currPage: 1, limitPerPage: '10' }

      state.photos = {
        total: '',
        items: [],
      }

      state.collections = {
        total: '',
        items: [],
      }

      state.users = {
        total: '',
        items: [],
      }
    },
  },
  extraReducers: (builder) => {
    photosBySearchReducer(builder)
    collectionsBySearchReducer(builder)
    usersBySearchReducer(builder)
  },
})

export const { clearSearchState } = searchSlice.actions

export default searchSlice.reducer
