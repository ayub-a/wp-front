import { IPhoto } from '../../../types/photo'
import { ITopic } from '../../../types/topic'

export interface TopicState {
  topicList: ITopic[]
  topicPhotos: IPhoto[]
  topicAbout: ITopic
  page: {
    currPage: number
    limitPerPage: '10' | '15'
  }
  isLoading: boolean
  error: null | string
}
