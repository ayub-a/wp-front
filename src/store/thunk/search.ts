import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ISearchCollections_API, ISearchPhotos_API, ISearchUsers_API } from '../../types/api'
import { errorHandler } from './helpers/errorHandler'
import { API_URL } from './api'

export const fetchPhotosBySearch = createAsyncThunk(
  'search/fetchPhotosBySearch',
  async ({ query, page }: { query: string; page: number }, { fulfillWithValue }) => {
    const response = await axios.get<ISearchPhotos_API>(`${API_URL}/search/photos`, {
      params: { query, page },
    })

    errorHandler(response)

    return fulfillWithValue({ ...response.data, query, page })
  }
)

export const fetchCollectionsBySearch = createAsyncThunk(
  'search/fetchCollectionsBySearch',
  async ({ query, page = 1 }: { query: string; page: number }, { fulfillWithValue }) => {
    const response = await axios.get<ISearchCollections_API>(`${API_URL}/search/collections`, {
      params: { query, page },
    })

    errorHandler(response)

    return fulfillWithValue({ ...response.data, query })
  }
)

export const fetchUsersBySearch = createAsyncThunk(
  'search/fetchUsersBySearch',
  async ({ query, page = 1 }: { query: string; page: number }, { fulfillWithValue }) => {
    const response = await axios.get<ISearchUsers_API>(`${API_URL}/search/users`, {
      params: { query, page },
    })

    errorHandler(response)

    return fulfillWithValue({ ...response.data, query })
  }
)
