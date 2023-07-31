import { ICollection } from '../../../types/collection'
import { IPhoto } from '../../../types/photo'

export interface ICollectionState {
  collectionPhotos: IPhoto[]
  collectionAbout: ICollection
  page: {
    currPage: number
    limitPerPage: '10' | '15'
  }
  isLoading: boolean
  error: null | string
}
