import { createSlice } from '@reduxjs/toolkit'
import { IPhotoItem } from '../../../types/photo'
import { photoItemReducer, photoListReducer } from './photoExtraReducer'
import { IPhotoState } from './type'

const initialState: IPhotoState = {
  photos: [],
  total: '',
  currentPhoto: {} as IPhotoItem,
  page: { currPage: 1, limitPerPage: '10' },
  isLoading: false,
  error: null,
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    clearPhotoState(state) {
      state.currentPhoto = {} as IPhotoItem
      state.photos = []
      state.total = ''
    },
  },
  extraReducers: (builder) => {
    photoListReducer(builder)
    photoItemReducer(builder)
  },
})

export const { clearPhotoState } = photoSlice.actions

export default photoSlice.reducer
