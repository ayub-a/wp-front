import { ActionReducerMapBuilder, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { SearchState } from './type'
import {
  fetchCollectionsBySearch,
  fetchPhotosBySearch,
  fetchUsersBySearch,
} from '../../thunk/search'
import { countFormatter } from '../../../helpers/countFormatter'

const pendingHandler = (state: SearchState) => {
  state.isLoading = true
  state.error = null
}

const rejectedHandler = (
  state: SearchState,
  action: PayloadAction<
    unknown,
    string,
    {
      arg: {
        query: string
        page: number
      }
      requestId: string
      requestStatus: 'rejected'
      aborted: boolean
      condition: boolean
    } & (
      | {
          rejectedWithValue: true
        }
      | ({
          rejectedWithValue: false
        } & {})
    ),
    SerializedError
  >
) => {
  state.isLoading = false
  state.error = action.error.message as string
}

export function photosBySearchReducer(builder: ActionReducerMapBuilder<SearchState>) {
  builder
    .addCase(fetchPhotosBySearch.pending, pendingHandler)
    .addCase(fetchPhotosBySearch.rejected, rejectedHandler)
    .addCase(fetchPhotosBySearch.fulfilled, (state, action) => {
      const {
        photos,
        collections_amount,
        users_amount,
        query,
        page,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.searchQuery = query

      state.photos.total = countFormatter(photos.total)
      state.collections.total = countFormatter(collections_amount)
      state.users.total = countFormatter(users_amount)

      if (page > 1) {
        state.page.currPage = page
        state.photos.items.push(...photos.items)
      } else {
        state.photos.items = photos.items
      }
    })
}

export function collectionsBySearchReducer(builder: ActionReducerMapBuilder<SearchState>) {
  builder
    .addCase(fetchCollectionsBySearch.pending, pendingHandler)
    .addCase(fetchCollectionsBySearch.rejected, rejectedHandler)
    .addCase(fetchCollectionsBySearch.fulfilled, (state, action) => {
      const {
        collections,
        photos_amount,
        users_amount,
        query,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.searchQuery = query

      state.collections.total = countFormatter(collections.total)
      state.photos.total = countFormatter(photos_amount)
      state.users.total = countFormatter(users_amount)

      state.collections.items.push(...collections.items)
    })
}

export function usersBySearchReducer(builder: ActionReducerMapBuilder<SearchState>) {
  builder
    .addCase(fetchUsersBySearch.pending, pendingHandler)
    .addCase(fetchUsersBySearch.rejected, rejectedHandler)
    .addCase(fetchUsersBySearch.fulfilled, (state, action) => {
      const {
        users,
        photos_amount,
        collections_amount,
        query,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.searchQuery = query

      state.users.total = countFormatter(users.total)
      state.collections.total = countFormatter(collections_amount)
      state.photos.total = countFormatter(photos_amount)

      state.users.items.push(...users.items)
    })
}
