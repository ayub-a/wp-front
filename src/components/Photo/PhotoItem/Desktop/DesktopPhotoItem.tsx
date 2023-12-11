import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { FC } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { countFormatter } from '../../../../helpers/countFormatter'
import { IPhotoItem } from '../../../../types/photo'
import { CollectionsList } from '../../../CollectionsList/CollectionsList'
import { OptimizedImage } from '../../../OptimizedImage/OptimizedImage'
import { TagList } from '../../../TagList/TagList'
import CustomButton from '../../../UI/Button/CustomButton'
import CustomBlock from '../../../UI/CustomBlock/CustomBlock'
import { LoaderPhotoPage } from '../../../UI/Loaders/Pages/Photo/PhotoPageLoader'
import SvgIcon from '../../../UI/SvgIcon/SvgIcon'
import cl from './DesktopPhotoItem.module.css'
dayjs.extend(localizedFormat)

interface IDesktopPhotoItemProps {
  currImg: IPhotoItem | null
  closeBtn?: 'hidden'
  downloadPhotoHandler: () => void
  closeModalHandler: () => void
}

const DesktopPhotoItem: FC<IDesktopPhotoItemProps> = ({
  currImg,
  closeBtn,
  downloadPhotoHandler,
  closeModalHandler,
}) => {
  return (
    <>
      {!currImg ? (
        <LoaderPhotoPage type="desktop" />
      ) : (
        <>
          <CustomButton
            icon="CLOSE"
            strokeColor="#c1c1c1"
            className={cl.close_btn}
            onClick={closeModalHandler}
            hideIf={closeBtn === 'hidden'}
          />

          <div className={cl.main_block}>
            <div className={cl.photo_wrap}>
              <div className={cl.photo}>
                <OptimizedImage photo={currImg} scale="off" />
              </div>

              <div className={cl.photo_actions}>
                <div className={cl.photo_action_item}>
                  <CopyToClipboard text={window.location.href}>
                    <CustomButton text="Copy link" icon="LINK" className={cl.link_item} />
                  </CopyToClipboard>

                  <CopyToClipboard text={currImg.links.html}>
                    <CustomButton text="Unsplash link" icon="LINK" className={cl.link_item} />
                  </CopyToClipboard>
                </div>

                <div className={cl.photo_action_item} data-img-size={`${currImg.width} x ${currImg.height}`}>
                  <CustomButton icon="DOWNLOAD" onClick={downloadPhotoHandler} className={cl.link_item}>
                    <h4>Download {currImg.size}</h4>
                  </CustomButton>
                </div>
              </div>
            </div>

            <div className={cl.photo_about}>
              <div className={cl.user_wrap}>
                <img src={currImg?.user.profile_image.medium} alt="" />

                <div className={cl.user_name}>
                  <h4>{currImg?.user?.first_name}</h4>
                  <h3>{currImg?.user?.username}</h3>
                </div>
              </div>

              {currImg?.description && <h4 className={cl.photo_descr}>{currImg?.description}</h4>}

              <div className={cl.photo_stats}>
                <div className={cl.stat_item_wrap}>
                  <div className={cl.stat_item}>
                    <h4>Views</h4> <SvgIcon icon="VIEWS" />
                  </div>
                  <div className={cl.stat_count}>{currImg?.views ? countFormatter(currImg?.views) : 0}</div>
                </div>

                <div className={cl.stat_item_wrap}>
                  <div className={cl.stat_item}>
                    <h4>Downloads</h4> <SvgIcon icon="DOWNLOADS" />
                  </div>
                  <div className={cl.stat_count}>{currImg?.downloads ? countFormatter(currImg?.downloads) : 0}</div>
                </div>
              </div>

              <div className={cl.photo_info}>
                <CustomBlock
                  text={dayjs(`${currImg?.created_at}`).format('LL')}
                  icon="CALENDAR"
                  className={cl.info_item}
                  iconsize={[21, 21]}
                />

                <CustomBlock
                  text={`${currImg?.location.city || ''} ${currImg?.location.country || ''} ${
                    currImg?.location.name || ''
                  }`}
                  icon="LOCATION"
                  hideIf={currImg?.location.city || currImg?.location.country || currImg?.location.name}
                  className={cl.info_item}
                  iconsize={[21, 21]}
                />

                <CustomBlock
                  text={currImg.exif.name}
                  icon="CAMERA"
                  hideIf={currImg?.exif.name}
                  className={cl.info_item}
                  iconsize={[21, 21]}
                />

                <CustomBlock
                  text="Free to use under the Unsplash License"
                  icon="DONE"
                  className={cl.info_item}
                  iconsize={[21, 21]}
                />
              </div>

              <TagList tags={currImg.tags} />
            </div>
          </div>

          {currImg.related_collections && (
            <div className={cl.related_collections_wrap}>
              <h4>Related collections</h4>
              <CollectionsList
                collections={currImg.related_collections.results}
                isLoading={!(currImg.related_collections.total > 1)}
              />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default DesktopPhotoItem
