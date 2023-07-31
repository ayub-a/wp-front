import { FC } from 'react'
import { Link } from 'react-router-dom'
import { countFormatter } from '../../helpers/countFormatter'
import { encodeURL } from '../../helpers/transformURL'
import { useDisableScroll } from '../../hooks/useDisableScroll'
import { ICollection } from '../../types/collection'
import { OptimizedImage } from '../OptimizedImage/OptimizedImage'
import { TagList } from '../TagList/TagList'
import { LoaderSearchPageCollections } from '../UI/Loaders/Pages/Search/Collections/SearchPageCollectionsLoader'
import cl from './CollectionList.module.css'

interface CollectionsListProps {
  collections: ICollection[]
  isLoading: boolean
  loadMore?: () => void
}

export const CollectionsList: FC<CollectionsListProps> = ({ collections, loadMore, isLoading }) => {
  useDisableScroll('body', isLoading)

  return (
    <div className={cl.wrapper}>
      <div className={cl.collection_list}>
        {collections.length === 0 ? (
          <LoaderSearchPageCollections />
        ) : (
          <>
            {collections.map((collection) => (
              <div className={cl.collection_item}>
                <Link
                  key={collection.id}
                  to={`/collections/${collection.id}/${encodeURL(collection.title)}`}
                >
                  <div className={cl.collection_photos}>
                    <div className={cl.collection_photos_wrap}>
                      <div className={cl.collection_photo_item} key={`${collection.id}-img-1`}>
                        <OptimizedImage photo={collection.preview_photos?.[2]} quality="low" />
                      </div>

                      <div className={cl.collection_photo_item} key={`${collection.id}-img-2`}>
                        <OptimizedImage photo={collection.preview_photos?.[1]} quality="low" />
                      </div>

                      <div className={cl.collection_photo_item} key={`${collection.id}-img-3`}>
                        <OptimizedImage photo={collection.preview_photos?.[0]} />
                      </div>
                    </div>

                    <div className={cl.collection_about}>
                      <h4>{collection.title}</h4>
                      <div>
                        {countFormatter(collection.total_photos)} photos | Curated by{' '}
                        {collection.user.name}
                      </div>
                    </div>
                  </div>
                </Link>

                <div className={cl.tag_list_wrap}>
                  <TagList tags={collection.tags} />
                </div>
              </div>
            ))}

            {isLoading ? <LoaderSearchPageCollections /> : null}
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
