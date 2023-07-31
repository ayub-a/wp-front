import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useScrollTo } from '../../hooks/useScrollTo'
import { clearSearchState } from '../../store/slices/search/searchSlice'
import cl from './SearchPage.module.css'
import SearchPageCollections from './SearchPageCollections'
import SearchPagePhotos from './SearchPagePhotos'
import SearchPageUsers from './searchPageUsers'

const searchSubHeader = {
  PHOTOS: 'PHOTOS',
  COLLECTIONS: 'COLLECTIONS',
  USERS: 'USERS',
}

interface SearchPageProps {
  type: keyof typeof searchSubHeader
}

const SearchPage: FC<SearchPageProps> = ({ type }) => {
  const dispatch = useAppDispatch()
  const {
    photos,
    collections,
    users,
    page: { currPage },
    isLoading,
    searchQuery,
  } = useAppSelector((state) => state.searchSlice)
  const newSearchQuery = useParams().searchQuery as string

  useScrollTo(0, type)

  useEffect(() => {
    return () => {
      dispatch(clearSearchState())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newSearchQuery])

  return (
    <div className={cl.search_page}>
      <div className={cl.search_about}>
        <h2>{newSearchQuery}</h2>
      </div>

      {type === searchSubHeader.PHOTOS ? (
        <SearchPagePhotos
          photos={photos.items}
          searchQuery={searchQuery}
          newSearchQuery={newSearchQuery}
          page={currPage}
          isLoading={isLoading}
        />
      ) : type === searchSubHeader.COLLECTIONS ? (
        <SearchPageCollections
          collections={collections.items}
          searchQuery={searchQuery}
          newSearchQuery={newSearchQuery}
          isLoading={isLoading}
          params={newSearchQuery}
          page={currPage}
        />
      ) : type === searchSubHeader.USERS ? (
        <SearchPageUsers
          users={users.items}
          searchQuery={searchQuery}
          newSearchQuery={newSearchQuery}
          isLoading={isLoading}
          page={currPage}
        />
      ) : null}
    </div>
  )
}

export default SearchPage
