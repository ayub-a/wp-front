import { FC, useEffect } from 'react'
import { CollectionsList } from '../../components'
import { useAppDispatch } from '../../hooks/store'
import { fetchCollectionsBySearch } from '../../store/thunk/search'
import { ICollection } from '../../types/collection'
import cl from './SearchPage.module.css'

interface SearchPageCollectionsProps {
  collections: ICollection[]
  searchQuery: string
  newSearchQuery: string
  isLoading: boolean
  params: string
  page: number
}

const SearchPageCollections: FC<SearchPageCollectionsProps> = ({
  collections,
  searchQuery,
  newSearchQuery,
  params,
  isLoading,
  page,
}) => {
  const dispatch = useAppDispatch()

  const getCollections = (query: string, page: number = 1) => {
    dispatch(fetchCollectionsBySearch({ query, page }))
  }

  const loadMore = () => getCollections(newSearchQuery, page + 1)

  useEffect(() => {
    if (collections.length === 0 || searchQuery !== params) getCollections(newSearchQuery, page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <div className={cl.collection_list}>
      <CollectionsList collections={collections} loadMore={loadMore} isLoading={isLoading} />
    </div>
  )
}

export default SearchPageCollections
