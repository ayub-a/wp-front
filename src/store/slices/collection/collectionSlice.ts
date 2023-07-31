import { createSlice } from '@reduxjs/toolkit'
import { ICollection } from '../../../types/collection'
import { collectionPhotosByIdReducer } from './collectionExtraReducer'
import { ICollectionState } from './type'

const initialState: ICollectionState = {
  collectionPhotos: [],
  collectionAbout: {} as ICollection,
  page: { currPage: 1, limitPerPage: '10' },
  isLoading: false,
  error: null,
}

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    clearCollectionState(state) {
      state.collectionPhotos = []
      state.collectionAbout = {} as ICollection
    },
  },
  extraReducers: (builder) => {
    // collectionListReducer(builder)
    collectionPhotosByIdReducer(builder)
  },
})

export const { clearCollectionState } = collectionSlice.actions

export default collectionSlice.reducer
