import { ActionReducerMapBuilder, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { fetchTopicList, fetchTopicPhotosById } from '../../thunk/topic'
import { TopicState } from './type'

const pendingHandler = (state: TopicState) => {
  state.isLoading = true
  state.error = null
}

const rejectedHandler = (
  state: TopicState,
  action: PayloadAction<
    unknown,
    string,
    {
      arg: {
        id?: string | number | undefined
      } | void
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

export function topicListReducer(builder: ActionReducerMapBuilder<TopicState>) {
  builder
    .addCase(fetchTopicList.pending, pendingHandler)
    .addCase(fetchTopicList.rejected, rejectedHandler)
    .addCase(fetchTopicList.fulfilled, (state, action) => {
      const {
        data,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.topicList = data
    })
}

export function topicPhotosByIdReducer(builder: ActionReducerMapBuilder<TopicState>) {
  builder
    .addCase(fetchTopicPhotosById.pending, pendingHandler)
    .addCase(fetchTopicPhotosById.rejected, rejectedHandler)
    .addCase(fetchTopicPhotosById.fulfilled, (state, action) => {
      const {
        topicAbout,
        topicPhotos,
        // headers: { remaining, limit },
      } = action.payload

      state.isLoading = false
      state.topicAbout = topicAbout
      state.topicPhotos.push(...topicPhotos)
    })
}
