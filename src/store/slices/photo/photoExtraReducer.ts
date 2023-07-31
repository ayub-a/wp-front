import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { fetchPhotoItem, fetchPhotoList } from '../../thunk/photo'
import { IPhotoState } from './type'

export function photoListReducer(builder: ActionReducerMapBuilder<IPhotoState>) {
  builder
    .addCase(fetchPhotoList.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(fetchPhotoList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message as string
    })

    .addCase(fetchPhotoList.fulfilled, (state, action) => {
      const {
        data,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.photos.push(...data)
    })
}

export function photoItemReducer(builder: ActionReducerMapBuilder<IPhotoState>) {
  builder
    .addCase(fetchPhotoItem.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(fetchPhotoItem.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message as string
    })

    .addCase(fetchPhotoItem.fulfilled, (state, action) => {
      const {
        data,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.currentPhoto = data
    })
}
