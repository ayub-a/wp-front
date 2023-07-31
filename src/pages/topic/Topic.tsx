import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { OptimizedImage, PhotoList } from '../../components'
import { LoaderTopicPage } from '../../components/UI/Loaders/Pages/Topic/TopicPageLoader'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useScrollTo } from '../../hooks/useScrollTo'
import { clearTopicState } from '../../store/slices/topic/topicSlice'
import { fetchTopicPhotosById } from '../../store/thunk/topic'
import cl from './Topic.module.css'

const TopicPage = () => {
  const slug = useParams().slug as string
  const navigate = useNavigate()
  const location = useLocation()

  useScrollTo(0, slug)

  const dispatch = useAppDispatch()
  const {
    topicList,
    topicPhotos,
    topicAbout,
    page: { currPage },
    isLoading,
  } = useAppSelector((state) => state.topicSlice)

  const getPhotos = (id: string, page: number = currPage) => {
    dispatch(fetchTopicPhotosById({ id, page }))
  }

  const loadMore = () => getPhotos(slug, currPage + 1)

  useEffect(() => {
    if (topicList.length) {
      const topicIsInclude = topicList.find((t) => t.slug === slug)

      if (topicIsInclude) {
        getPhotos(slug, currPage)
      } else {
        navigate('/')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, topicList])

  useEffect(() => {
    return () => {
      dispatch(clearTopicState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  return (
    <div className={cl.topic_page}>
      {isLoading ? (
        <LoaderTopicPage />
      ) : (
        <div className={cl.topic_main}>
          <OptimizedImage photo={topicPhotos[0]} />

          <div className={cl.topic_about}>
            <h2>{topicAbout.title}</h2>
            <p>{topicAbout.description}</p>
          </div>

          <div className={cl.topic_about_bottom}>
            <span>
              <Link to={`/photos/${topicPhotos[0]?.id}`} state={{ previousLocation: location }}>
                Photo
              </Link>{' '}
              by{' '}
              <a href={topicAbout?.cover_photo?.user?.links.html}>
                {topicAbout?.cover_photo?.user.first_name}
              </a>
            </span>
            <span>
              Read more about the <a href="https://unsplash.com/license">Unsplash License</a>
            </span>
            <span>
              This app use <a href="https://unsplash.com/developers">Unsplash API</a>
            </span>
          </div>
        </div>
      )}
      <div className={cl.photo_list}>
        <PhotoList photos={topicPhotos} loadMore={loadMore} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default TopicPage
