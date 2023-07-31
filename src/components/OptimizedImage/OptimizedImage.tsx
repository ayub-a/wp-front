import { FC, useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'
import { useInView } from 'react-intersection-observer'
import { IPreviewPhotos } from '../../types/collection'
import { IPhoto, IPhotoItem } from '../../types/photo'
import cl from './OptimizedImage.module.css'

interface OptimizedImageProps {
  photo: IPhoto | IPreviewPhotos | IPhotoItem
  quality?: 'low' | 'high'
  scale?: 'off'
}

export const OptimizedImage: FC<OptimizedImageProps> = ({ photo, quality, scale }) => {
  const [imgLoaded, setImgLoaded] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  })

  const getImageQuality = () => {
    switch (quality) {
      case 'low':
        return photo?.urls.thumb

      case 'high':
        return photo?.urls.full

      default:
        return photo?.urls.regular
    }
  }

  useEffect(() => {
    if (inView && !imgLoaded) {
      const img = new Image()
      img.src = getImageQuality()
      img.onload = () => setImgLoaded(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div ref={ref} className={cl.img_wrap}>
      {imgLoaded ? (
        <img
          src={getImageQuality()}
          className={scale === 'off' ? cl.scale_full : cl.scale_cover}
          alt=""
        />
      ) : (
        photo?.blur_hash && <Blurhash hash={photo.blur_hash} width={'100%'} height={'100%'} />
      )}
    </div>
  )
}
