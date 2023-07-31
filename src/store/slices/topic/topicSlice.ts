import { createSlice } from '@reduxjs/toolkit'
import { TopicState } from './type'
import { ITopic } from '../../../types/topic'
import { topicListReducer, topicPhotosByIdReducer } from './topicExtraReducer'

const initialState: TopicState = {
  topicList: [],
  topicPhotos: [],
  topicAbout: {} as ITopic,
  page: { currPage: 1, limitPerPage: '10' },
  isLoading: false,
  error: null,
}

const topicSlice = createSlice({
  name: 'topic',
  initialState,
  reducers: {
    clearTopicState(state) {
      state.topicPhotos = []
      state.topicAbout = {} as ITopic
    },
  },
  extraReducers: (builder) => {
    topicListReducer(builder)
    topicPhotosByIdReducer(builder)
  },
})

export const { clearTopicState } = topicSlice.actions

export default topicSlice.reducer
