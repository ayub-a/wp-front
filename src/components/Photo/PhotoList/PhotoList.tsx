import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IPhoto } from '../../../types/photo'
import { OptimizedImage } from '../../OptimizedImage/OptimizedImage'
import { LoaderPhotoList } from '../../UI/Loaders/PhotoList/PhotoListLoader'
import cl from './PhotoList.module.css'
import { useDisableScroll } from '../../../hooks/useDisableScroll'
interface ImageListProps {
  photos: IPhoto[]
  isLoading?: boolean
  loadMore?: () => void
}

export const PhotoList: FC<ImageListProps> = ({ photos, isLoading, loadMore }) => {
  const location = useLocation()

  useDisableScroll('body', isLoading)

  return (
    <div className={cl.wrapper}>
      <div className={cl.photo_list}>
        {photos.length === 0 ? (
          <LoaderPhotoList />
        ) : (
          <>
            {photos.map((photo) => (
              <Link key={photo.id} to={`/photos/${photo.id}`} state={{ previousLocation: location }}>
                <OptimizedImage photo={photo} />
              </Link>
            ))}
            {isLoading ? <LoaderPhotoList /> : null}
          </>
        )}
      </div>

      {loadMore && (
        <button onClick={loadMore} className={cl.load_more_btn}>
          Load more
        </button>
      )}
    </div>
  )
}
