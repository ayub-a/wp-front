import { useDisableScroll } from '../../../../../../hooks/useDisableScroll'
import SvgIcon from '../../../../SvgIcon/SvgIcon'
import { LoaderTagList } from '../../../TagList/TagListLoader'
import { LoaderSearchPageCollections } from '../../Search/Collections/SearchPageCollectionsLoader'
import cl from './LoaderDesktopPhotoPage.module.css'

const LoaderDesktopPhotoPage = () => {
  const scroll = useDisableScroll('el')

  return (
    <div ref={scroll}>
      <div className={cl.modal_top}>
        <div className={cl.img_wrap}>
          <div className={cl.image}></div>

          <div className={cl.photo_actions}>
            <div className={cl.photo_action_item}>
              <SvgIcon icon="LINK" />
              <div className={cl.action_text}></div>
            </div>
            <div className={cl.photo_action_item}>
              <SvgIcon icon="DOWNLOAD" />
              <div className={cl.action_text}></div>
            </div>
          </div>
        </div>

        <div className={cl.about_photo}>
          <div className={cl.user}>
            <div className={cl.user_img}></div>
            <div className={cl.user_name_wrap}>
              <div className={cl.user_name}></div>
              <div className={cl.user_username}></div>
            </div>
          </div>

          <div className={cl.photo_descr}></div>

          <div className={cl.photo_stats}>
            <div className={cl.stat_item_wrap}>
              <div className={cl.stat_item}>
                <h4>Views</h4> <SvgIcon icon="VIEWS" />
              </div>
              <div className={cl.stat_count}></div>
            </div>
            <div className={cl.stat_item_wrap}>
              <div className={cl.stat_item}>
                <h4>Downloads</h4> <SvgIcon icon="DOWNLOADS" />
              </div>
              <div className={cl.stat_count}></div>
            </div>
          </div>

          <div className={cl.photo_info}>
            <div className={cl.info_item}>
              <div className={cl.info_item_icon}>
                <SvgIcon icon="CALENDAR" />
              </div>
              <div className={cl.info_item_text}></div>
            </div>

            <div className={cl.info_item}>
              <div className={cl.info_item_icon}>
                <SvgIcon icon="LOCATION" />
              </div>
              <div className={cl.info_item_text}></div>
            </div>

            <div className={cl.info_item}>
              <div className={cl.info_item_icon}>
                <SvgIcon icon="CAMERA" />
              </div>
              <div className={cl.info_item_text}></div>
            </div>

            <div className={cl.info_item}>
              <div className={cl.info_item_icon}>
                <SvgIcon icon="DONE" />
              </div>
              <div className={cl.info_item_text}></div>
            </div>
          </div>

          <div className={cl.collection_tags}>
            <LoaderTagList elQty={8} />
          </div>
        </div>
      </div>

      <div className={cl.related_collections_wrap}>
        <div className={cl.related_collections_title}></div>
        <LoaderSearchPageCollections elQty={3} />
      </div>
    </div>
  )
}

export default LoaderDesktopPhotoPage
