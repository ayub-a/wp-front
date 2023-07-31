import { ICollection } from './collection'
import { ITopic } from './topic'
import { IUser } from './user'

export interface IPhoto {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  urls: IImageURLs
  links: ILinks
  likes: number
  liked_by_user: boolean
  current_user_collections: []
  sponsorship: {}
  topic_submissions: {}
  user: IUser
}

export interface IImageURLs {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

interface ILinks {
  self: string
  html: string
  download: string
  download_location: string
}

// PHOTO ITEM
export interface IPhotoItem {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: null | string
  urls: IImageURLs
  links: ILinks
  likes: number
  liked_by_user: boolean
  current_user_collections: ICollection[]
  sponsorship: null
  user: IUser
  exif: IExif
  location: ILocation
  public_domain: boolean
  tags: ITags[]
  views: number
  downloads: number
  topics: ITopic[]
  related_collections: IRelatedCollections
  size: string
  // topic_submissions: {}
  // meta: {}
  // tags_preview: []
}

interface IExif {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

interface ILocation {
  name: string
  city: string
  country: string
}

interface ITags {
  type: string
  title: string
}

interface IRelatedCollections {
  total: 3
  type: string
  results: ICollection[]
}
