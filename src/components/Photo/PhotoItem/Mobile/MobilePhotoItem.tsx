import cl from './MobilePhotoItem.module.css'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { FC, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { countFormatter } from '../../../../helpers/countFormatter'
import { IPhotoItem } from '../../../../types/photo'
import { CollectionsList } from '../../../CollectionsList/CollectionsList'
import { OptimizedImage } from '../../../OptimizedImage/OptimizedImage'
import { TagList } from '../../../TagList/TagList'
import CustomButton from '../../../UI/Button/CustomButton'
import CustomBlock from '../../../UI/CustomBlock/CustomBlock'
import SvgIcon from '../../../UI/SvgIcon/SvgIcon'
import { LoaderPhotoPage } from '../../../UI/Loaders/Pages/Photo/PhotoPageLoader'
import { Portal } from '../../../Portal/Portal'
dayjs.extend(localizedFormat)

interface IMobilePhotoItemProps {
  currImg: IPhotoItem | null
  closeBtn?: 'hidden'
  closeModalHandler: () => void
  downloadPhotoHandler: () => void
}

const MobilePhotoItem: FC<IMobilePhotoItemProps> = ({
  currImg,
  closeBtn,
  downloadPhotoHandler,
  closeModalHandler,
}) => {
  const [fullWidth, setFullWidth] = useState(false)

  return (
    <>
      {!currImg ? (
        <LoaderPhotoPage type="mobile" />
      ) : (
        <div className={cl.wrapper}>
          <CustomButton
            icon="CLOSE"
            className={cl.close_btn}
            onClick={closeModalHandler}
            hideIf={closeBtn === 'hidden'}
          />

          <div className={cl.modal_top}>
            <div className={cl.user_wrap}>
              <div className={cl.user}>
                <img src={currImg?.user.profile_image.large} alt="" />
                <div className={cl.user_name}>
                  <h4>{currImg?.user?.first_name}</h4>
                  <h3>{currImg?.user?.username}</h3>
                </div>
              </div>
            </div>

            <div className={cl.img_wrap} onClick={() => setFullWidth(true)}>
              <OptimizedImage photo={currImg} scale="off" />
            </div>

            {fullWidth ? (
              <Portal>
                <div className={cl.full_width} onClick={() => setFullWidth(false)}>
                  <OptimizedImage photo={currImg} quality="high" scale="off" />
                </div>
              </Portal>
            ) : null}

            {currImg?.description && <h4 className={cl.photo_descr}>{currImg?.description}</h4>}

            <div className={cl.about_photo}>
              <div className={cl.photo_stats}>
                <div className={cl.stat_item_wrap}>
                  <div className={cl.stat_item}>
                    <h4>Views</h4>
                    <SvgIcon icon="VIEWS" />
                  </div>
                  <div className={cl.stat_count}>
                    {currImg?.views ? countFormatter(currImg?.views) : 0}
                  </div>
                </div>

                <div className={cl.stat_item_wrap}>
                  <div className={cl.stat_item}>
                    <h4>Downloads</h4>
                    <SvgIcon icon="DOWNLOADS" />
                  </div>
                  <div className={cl.stat_count}>
                    {currImg?.downloads ? countFormatter(currImg?.downloads) : 0}
                  </div>
                </div>
              </div>

              <div className={cl.photo_actions}>
                <div className={cl.photo_action_item}>
                  <CopyToClipboard text={currImg.links.html}>
                    <CustomButton
                      text="Unsplash link"
                      icon="LINK"
                      className={cl.link_item}
                      reverse
                    />
                  </CopyToClipboard>

                  <CopyToClipboard text={window.location.href}>
                    <CustomButton text="Copy link" icon="LINK" className={cl.link_item} reverse />
                  </CopyToClipboard>
                </div>

                <div className={cl.photo_action_item}>
                  <button className={cl.link_item} onClick={downloadPhotoHandler}>
                    <SvgIcon icon="DOWNLOAD" />
                    <h4>Download {currImg.size}</h4>
                  </button>
                </div>
                <h4 className={cl.download_soon}>You can download photo soon</h4>
              </div>

              <div className={cl.photo_info}>
                <CustomBlock
                  text={dayjs(`${currImg?.created_at}`).format('LL')}
                  icon="CALENDAR"
                  className={cl.info_item}
                  iconsize={[22, 22]}
                />

                <CustomBlock
                  text={`${currImg?.location.city || ''} ${currImg?.location.country || ''} ${
                    currImg?.location.name || ''
                  }`}
                  icon="LOCATION"
                  hideIf={
                    currImg?.location.city || currImg?.location.country || currImg?.location.name
                  }
                  className={cl.info_item}
                  iconsize={[22, 22]}
                />

                <CustomBlock
                  text={currImg?.exif.name}
                  icon="CAMERA"
                  className={cl.info_item}
                  hideIf={currImg?.exif.name}
                  iconsize={[22, 22]}
                />

                <CustomBlock
                  text="Free to use under the Unsplash License"
                  icon="DONE"
                  className={cl.info_item}
                  iconsize={[22, 22]}
                />
              </div>

              <div className={cl.collection_tags}>
                <TagList tags={currImg.tags} />
              </div>
            </div>
          </div>

          {currImg?.related_collections && (
            <div className={cl.related_collections_wrap}>
              <h4>Related collections</h4>
              <CollectionsList
                collections={currImg.related_collections.results}
                isLoading={false}
              />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default MobilePhotoItem
