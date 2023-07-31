import { useEffect } from 'react'
import { PhotoList } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useScrollTo } from '../../hooks/useScrollTo'
import { clearPhotoState } from '../../store/slices/photo/photoSlice'
import { fetchPhotoList } from '../../store/thunk/photo'
import cl from './HomePage.module.css'

const HomePage = () => {
  useScrollTo(0, null)

  const {
    photos,
    isLoading,
    page: { currPage },
  } = useAppSelector((state) => state.photoSlice)

  const dispatch = useAppDispatch()

  const getPhotos = (page: number = currPage) => dispatch(fetchPhotoList({ page }))
  const loadMore = () => getPhotos(currPage + 1)

  useEffect(() => {
    getPhotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage])

  useEffect(() => {
    return () => {
      dispatch(clearPhotoState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cl.home_page}>
      <PhotoList photos={photos} isLoading={isLoading} loadMore={loadMore} />
    </div>
  )
}

export default HomePage
