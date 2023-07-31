import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ITopicList_API, ITopicPhotosById_API } from '../../types/api'
import { errorHandler } from './helpers/errorHandler'
import { API_URL } from './api'

export const fetchTopicList = createAsyncThunk(
  'topic/fetchTopicList',
  async (_, { fulfillWithValue }) => {
    const response = await axios.get<ITopicList_API>(`${API_URL}/topics`)

    errorHandler(response)

    return fulfillWithValue(response.data)
  }
)

export const fetchTopicPhotosById = createAsyncThunk(
  'topic/fetchTopicPhotosById',
  async ({ id, page }: { id: string; page: number | string }, { fulfillWithValue }) => {
    const response = await axios.get<ITopicPhotosById_API>(`${API_URL}/topics/${id}`, {
      params: { page },
    })

    errorHandler(response)

    return fulfillWithValue(response.data)
  }
)
