import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PhotoList } from '../../components'
import { LoaderCollectionPage } from '../../components/UI/Loaders/Pages/Collection/CollectionPageLoader'
import { countFormatter } from '../../helpers/countFormatter'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useScrollTo } from '../../hooks/useScrollTo'
import { clearCollectionState } from '../../store/slices/collection/collectionSlice'
import { fetchCollectionPhotosById } from '../../store/thunk/collection'
import cl from './Collection.module.css'

const CollectionPage = () => {
  useScrollTo(0, null)

  const { id } = useParams()
  const dispatch = useAppDispatch()
  const {
    collectionPhotos,
    collectionAbout,
    page: { currPage },
    isLoading,
  } = useAppSelector((state) => state.collectionSlice)

  const getCollectionPhotos = (page: number = 1) =>
    dispatch(fetchCollectionPhotosById({ id, page }))
  const loadMore = () => getCollectionPhotos(currPage + 1)

  useEffect(() => {
    getCollectionPhotos()

    return () => {
      dispatch(clearCollectionState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      {collectionPhotos.length === 0 ? (
        <LoaderCollectionPage />
      ) : (
        <div className={cl.collection}>
          <img
            className={cl.collection_bg}
            src={collectionAbout.preview_photos?.[0].urls.regular}
            alt=""
          />

          <div className={cl.collection_about}>
            <h2>{collectionAbout.title}</h2>
            <div className={cl.collection_user}>
              <img src={collectionAbout.user?.profile_image.medium} alt="" />
              <h4>{collectionAbout.user?.first_name}</h4>
            </div>
          </div>
        </div>
      )}

      <div className={cl.photo_list}>
        <div className={cl.collection_total}>
          {countFormatter(collectionAbout.total_photos)} photos
        </div>

        <PhotoList photos={collectionPhotos} loadMore={loadMore} isLoading={isLoading} />
      </div>
    </>
  )
}

export default CollectionPage
