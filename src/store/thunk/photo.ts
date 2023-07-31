import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IPhotoItem_API, IPhotos_API } from '../../types/api'
import { errorHandler } from './helpers/errorHandler'
import { API_URL } from './api'

export const fetchPhotoList = createAsyncThunk(
  'photos/fetchPhotoList',
  async ({ page = 1 }: { page: number }, { fulfillWithValue }) => {
    const response = await axios.get<IPhotos_API>(`${API_URL}/photos`, { params: { page } })

    errorHandler(response)

    return fulfillWithValue(response.data)
  }
)

export const fetchPhotoItem = createAsyncThunk(
  'photo/fetchPhotoItem',
  async ({ id }: { id: string }, { fulfillWithValue }) => {
    const response = await axios.get<IPhotoItem_API>(`${API_URL}/photos/${id}`)

    errorHandler(response)

    return fulfillWithValue(response.data)
  }
)
