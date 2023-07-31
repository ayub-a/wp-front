import { FC, useEffect } from 'react'
import { PhotoList } from '../../components'
import { useAppDispatch } from '../../hooks/store'
import { fetchPhotosBySearch } from '../../store/thunk/search'
import { IPhoto } from '../../types/photo'
import cl from './SearchPage.module.css'

interface SearchPagePhotosProps {
  photos: IPhoto[]
  searchQuery: string
  newSearchQuery: string
  page: number
  isLoading: boolean
}

const SearchPagePhotos: FC<SearchPagePhotosProps> = ({
  photos,
  searchQuery,
  newSearchQuery,
  isLoading,
  page,
}) => {
  const dispatch = useAppDispatch()
  const getPhotos = (query: string, page: number = 1) => {
    dispatch(fetchPhotosBySearch({ query, page }))
  }

  useEffect(() => {
    if (photos.length === 0 || searchQuery !== newSearchQuery) getPhotos(newSearchQuery, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchQuery])

  const loadMore = () => getPhotos(newSearchQuery, page + 1)

  return (
    <div className={cl.photo_list}>
      <PhotoList photos={photos} isLoading={isLoading} loadMore={loadMore} />
    </div>
  )
}

export default SearchPagePhotos
