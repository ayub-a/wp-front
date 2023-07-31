import { combineReducers, configureStore } from '@reduxjs/toolkit'
import collectionSlice from './slices/collection/collectionSlice'
import photoSlice from './slices/photo/photoSlice'
import searchSlice from './slices/search/searchSlice'
import topicSlice from './slices/topic/topicSlice'
import userSlice from './slices/user/userSlice'

const rootReducer = combineReducers({
  photoSlice,
  searchSlice,
  topicSlice,
  collectionSlice,
  userSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
