import { IImageURLs } from './photo'
import { IUser } from './user'

export interface ICollection {
  id: string
  title: string
  description: string
  published_at: string
  last_collected_at: string
  updated_at: string
  curated: boolean
  featured: boolean
  total_photos: number
  private: boolean
  share_key: string
  tags: ITags[]
  links: ILinks
  user: IUser
  preview_photos: IPreviewPhotos[]
  // cover_photo: {}
  // meta: {}
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

export interface IPreviewPhotos {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: IImageURLs
}
