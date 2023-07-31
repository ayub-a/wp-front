import { FC } from 'react'
import { IPhoto } from '../../types/photo'
import cl from './UserList.module.css'
import { OptimizedImage } from '../OptimizedImage/OptimizedImage'

interface IUserPreviewPhotosProps {
  userPhotos: IPhoto[]
}

const UserPreviewPhotos: FC<IUserPreviewPhotosProps> = ({ userPhotos }) => {
  return (
    <>
      {userPhotos.length ? (
        <div className={cl.preview_photos}>
          {userPhotos.length === 3 ? (
            userPhotos.map((photo) => (
              <div key={photo.id} className={cl.preview_img}>
                <OptimizedImage photo={photo} quality="low" />
              </div>
            ))
          ) : (
            <>
              {userPhotos.length === 2 ? (
                <>
                  {userPhotos.map((photo) => (
                    <div key={photo.id} className={cl.preview_img}>
                      <OptimizedImage photo={photo} quality="low" />
                    </div>
                  ))}
                  <div key={'prev_img_1'} className={cl.preview_img}></div>
                </>
              ) : userPhotos.length === 1 ? (
                <>
                  <div key={userPhotos[0].id} className={cl.preview_img}>
                    <OptimizedImage photo={userPhotos[0]} quality="low" />
                  </div>
                  <div key={'prev_img_1'} className={cl.preview_img}></div>
                  <div key={'prev_img_2'} className={cl.preview_img}></div>
                </>
              ) : null}
            </>
          )}
        </div>
      ) : (
        <div className={cl.preview_photos}>
          <div key={'prev_img_1'} className={cl.preview_img}></div>
          <div key={'prev_img_2'} className={cl.preview_img}></div>
          <div key={'prev_img_3'} className={cl.preview_img}></div>
        </div>
      )}
    </>
  )
}

export default UserPreviewPhotos
