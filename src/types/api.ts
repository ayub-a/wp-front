import { ICollection } from './collection'
import { IPhoto, IPhotoItem } from './photo'
import { ITopic } from './topic'
import { IUser } from './user'

// MAIN
export interface IPhotos_API {
  data: IPhoto[]
  headers: IHeaders
}

export interface IPhotoItem_API {
  data: IPhotoItem
  headers: IHeaders
}

export interface ITopicPhotosById_API {
  topicAbout: ITopic
  topicPhotos: IPhoto[]
  headers: IHeaders
}

export interface ICollectionPhotosById_API {
  collectionAbout: ICollection
  collectionPhotos: IPhoto[]
  headers: IHeaders
}

// SEARCH
export interface ISearchPhotos_API {
  photos: {
    total: number
    items: IPhoto[]
  }
  collections_amount: number
  users_amount: number
  headers: IHeaders
}

export interface ISearchCollections_API {
  photos_amount: number
  collections: {
    total: number
    items: ICollection[]
  }
  users_amount: number
  headers: IHeaders
}

export interface ISearchUsers_API {
  photos_amount: number
  collections_amount: number
  users: {
    total: number
    items: IUser[]
  }
  headers: IHeaders
}

// LIST
export interface ITopicList_API {
  data: ITopic[]
  headers: IHeaders
}

export interface ICollectionList_API {
  data: ICollection[]
  headers: IHeaders
}

// EXTRA
interface IHeaders {
  limit: string
  remaining: string
}
