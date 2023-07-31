import { PhotoItem } from '../../components'
import cl from './PhotoPage.module.css'

const PhotoPage = () => {
  return (
    <div className={cl.photo_page}>
      <PhotoItem closeBtn="hidden" />
    </div>
  )
}

export default PhotoPage
