import { useDisableScroll } from '../../../../../../hooks/useDisableScroll'
import CustomButton from '../../../../Button/CustomButton'
import SvgIcon from '../../../../SvgIcon/SvgIcon'
import { LoaderTagList } from '../../../TagList/TagListLoader'
import cl from './LoaderMobilePhotoPage.module.css'

const LoaderMobilePhotoPage = () => {
  const scroll = useDisableScroll('el')

  return (
    <div ref={scroll} className={cl.wrapper}>
      <div className={cl.modal_top}>
        <div className={cl.user_wrap}>
          <div className={cl.user}>
            <div className={cl.profile_photo} />
            <div className={cl.user_name_wrap}>
              <div className={cl.user_name} />
              <div className={cl.user_user_name} />
            </div>
          </div>
        </div>

        <div className={cl.main_photo}></div>

        <div className={cl.photo_descr} />

        <div className={cl.about_photo}>
          <div className={cl.photo_stats}>
            <div className={cl.stat_item_wrap}>
              <div className={cl.stat_item}>
                <div className={cl.stat_item_data} />
                <SvgIcon icon="VIEWS" iconsize={[22, 22]} />
              </div>
              <div className={cl.stat_count} />
            </div>

            <div className={cl.stat_item_wrap}>
              <div className={cl.stat_item}>
                <div className={cl.stat_item_data} />
                <SvgIcon icon="DOWNLOADS" iconsize={[22, 22]} />
              </div>
              <div className={cl.stat_count} />
            </div>
          </div>

          <div className={cl.photo_actions}>
            <div className={cl.photo_action_item}>
              <CustomButton icon="SPINNER" className={cl.link_item} reverse />
              <CustomButton icon="SPINNER" className={cl.link_item} reverse />
            </div>

            <div className={cl.photo_action_item}>
              <button className={cl.link_item}>
                <SvgIcon icon="SPINNER" />
              </button>
            </div>
          </div>

          <div className={cl.photo_info}>
            <div className={cl.info_item}>
              <SvgIcon icon="CALENDAR" iconsize={[22, 22]} />
              <div className={cl.text}></div>
            </div>

            <div className={cl.info_item}>
              <SvgIcon icon="LOCATION" iconsize={[22, 22]} />
              <div className={cl.text}></div>
            </div>

            <div className={cl.info_item}>
              <SvgIcon icon="CAMERA" iconsize={[22, 22]} />
              <div className={cl.text}></div>
            </div>

            <div className={cl.info_item}>
              <SvgIcon icon="DONE" iconsize={[22, 22]} />
              <div className={cl.text}></div>
            </div>
          </div>

          <div className={cl.collection_tags}>
            <LoaderTagList elQty={5} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoaderMobilePhotoPage
