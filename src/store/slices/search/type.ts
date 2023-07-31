import { ICollection } from '../../../types/collection'
import { IPhoto } from '../../../types/photo'
import { IUser } from '../../../types/user'

export interface SearchState {
  searchQuery: string
  photos: {
    total: string
    items: IPhoto[]
  }
  collections: {
    total: string
    items: ICollection[]
  }
  users: {
    total: string
    items: IUser[]
  }
  page: {
    currPage: number
    limitPerPage: '10' | '15'
  }
  isLoading: boolean
  error: null | string
}
