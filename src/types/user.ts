import { IPhoto } from './photo'

export interface IUser {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: null | string
  twitter_username: null | string
  portfolio_url: null | string
  bio: null | string
  location: null | string
  links: IUserLinks
  profile_image: IUserProfileImage
  instagram_username: null | string
  total_collections: number
  total_likes: number
  total_photos: number
  accepted_tos: boolean
  for_hire: boolean
  social: IUserSocial
  photos: IPhoto[]
}

interface IUserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

interface IUserProfileImage {
  small: string
  medium: string
  large: string
}

interface IUserSocial {
  instagram_username: null | string
  portfolio_url: null | string
  twitter_username: null | string
  paypal_email: null | string
}
