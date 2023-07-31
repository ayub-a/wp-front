import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICollectionPhotosById_API } from '../../types/api'
import { API_URL } from './api'
import { errorHandler } from './helpers/errorHandler'

export const fetchCollectionPhotosById = createAsyncThunk(
  'collection/fetchCollectionPhotosById',
  async ({ id, page }: { id?: number | string; page: number }, { fulfillWithValue }) => {
    const response = await axios.get<ICollectionPhotosById_API>(`${API_URL}/collections/${id}`, {
      params: { page },
    })

    errorHandler(response)

    return fulfillWithValue(response.data)
  }
)
