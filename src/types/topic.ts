import { IPhoto, IImageURLs } from './photo'
import { IUser } from './user'

export interface ITopic {
  id: string
  slug: string
  title: string
  description: string
  published_at: string
  updated_at: string
  starts_at: string
  ends_at: null
  only_submissions_after: null
  visibility: string
  featured: boolean
  total_photos: number
  current_user_contributions: []
  total_current_user_submissions: null
  links: ILinks
  status: string
  owners: IUser[]
  top_contributors: IUser[]
  cover_photo: IPhoto
  preview_photos: IPreviewPhotos[]
}

interface ILinks {
  self: string
  html: string
  photos: string
}

interface IPreviewPhotos {
  id: string
  slug: string
  created_at: string
  updated_at: string
  blur_hash: string
  urls: IImageURLs
}
