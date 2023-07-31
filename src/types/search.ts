import { IImageURLs } from './photo'
import { IUser } from './user'

interface ISearchedCollections {
  id: string
  title: string
  description: null
  published_at: string
  last_collected_at: string
  updated_at: string
  curated: boolean
  featured: boolean
  total_photos: number
  private: boolean
  share_key: number
  tags: ITags[]
  links: ILinks
  user: IUser
  // cover_photo: {}
  preview_photos: IPreviewPhotos[]
}

export interface ITags {
  type: string
  title: string
  // source?: {}
}

interface ILinks {
  self: string
  html: string
  photos: string
  related: string
}

interface IPreviewPhotos {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: IImageURLs
}
