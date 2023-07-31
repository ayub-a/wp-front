import { IPhoto, IPhotoItem } from '../../../types/photo'

export interface IPhotoState {
  photos: IPhoto[]
  total: string
  currentPhoto: IPhotoItem
  page: {
    currPage: number
    limitPerPage: '10' | '15'
  }
  isLoading: boolean
  error: null | string
}
