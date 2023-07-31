import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { fetchCollectionPhotosById } from '../../thunk/collection'
import { ICollectionState } from './type'

export function collectionPhotosByIdReducer(builder: ActionReducerMapBuilder<ICollectionState>) {
  builder
    .addCase(fetchCollectionPhotosById.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    .addCase(fetchCollectionPhotosById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message as string
    })

    .addCase(fetchCollectionPhotosById.fulfilled, (state, action) => {
      const {
        collectionAbout,
        collectionPhotos,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false

      state.collectionAbout = collectionAbout
      state.collectionPhotos.push(...collectionPhotos)
    })
}
