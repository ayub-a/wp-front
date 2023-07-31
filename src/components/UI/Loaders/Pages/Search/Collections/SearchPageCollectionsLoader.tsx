import { FC } from 'react'
import { LoaderTagList } from '../../../TagList/TagListLoader'
import cl from './LoaderSearchPageCollections.module.css'

interface ILoaderSearchPageCollectionsProps {
  elQty?: number | string
}

export const LoaderSearchPageCollections: FC<ILoaderSearchPageCollectionsProps> = ({
  elQty = 10,
}) => {
  return (
    <>
      {new Array(elQty).fill('Do magic..').map((_, index) => (
        <div key={index}>
          <div className={cl.collection_photos}>
            <div className={cl.collection_photos_wrap}>
              <div className={cl.collection_photo_item}></div>
              <div className={cl.collection_photo_item}></div>
              <div className={cl.collection_photo_item}></div>
            </div>

            <div className={cl.collection_about}>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className={cl.tag_list}>
            <LoaderTagList />
          </div>
        </div>
      ))}
    </>
  )
}
