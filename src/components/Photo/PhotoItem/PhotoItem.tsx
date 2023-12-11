import axios from 'axios'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { FC, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { API_URL } from '../../../store/thunk/api'
import { IPhotoItem_API } from '../../../types/api'
import { IPhotoItem } from '../../../types/photo'
import DesktopPhotoItem from './Desktop/DesktopPhotoItem'
import MobilePhotoItem from './Mobile/MobilePhotoItem'
dayjs.extend(localizedFormat)

interface IPhotoItemProps {
  closeBtn?: 'hidden'
}

export const PhotoItem: FC<IPhotoItemProps> = ({ closeBtn }) => {
  const id = useParams().id as string
  const navigate = useNavigate()
  const location = useLocation()

  const [currImg, setCurrImg] = useState<IPhotoItem | null>(null)
  const windowSize = useWindowSize()
  const abortController = useRef<AbortController | null>(null)

  const getPhotoAbout = async () => {
    try {
      abortController.current = new AbortController()

      await axios
        .get<IPhotoItem_API>(`${API_URL}/photos/${id}`, { signal: abortController.current?.signal })
        .then((data) => setCurrImg(data.data.data))
    } catch (error) {
      return
    }
  }

  useEffect(() => {
    getPhotoAbout()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    return () => {
      if (abortController.current) cancelRequest()
    }
  }, [])

  // Work only on "localhost"
  // eslint-disable-next-line
  const downloadPhotoHandler = async () => {
    if (currImg) {
      try {
        abortController.current = new AbortController()
        setTimeout(cancelRequest, 7000)

        const imageName = `${currImg?.user.username}-${currImg?.id}`
        const response = await fetch(`${API_URL}/photos/${currImg.id}/download/${imageName}`, {
          signal: abortController.current?.signal,
        })

        if (response.status === 200) {
          const blob = await response.blob()
          const downloadUrl = window.URL.createObjectURL(blob)
          const link = document.createElement('a')

          link.href = downloadUrl
          link.download = imageName
          document.body.appendChild(link)
          link.click()
          link.remove()
          URL.revokeObjectURL(downloadUrl)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const cancelRequest = () => abortController.current && abortController.current.abort()

  const closeModalHandler = () => {
    location.state ? navigate(-1) : navigate('/')
  }

  return (
    <>
      {windowSize.width > 760 ? (
        <DesktopPhotoItem
          currImg={currImg}
          closeBtn={closeBtn}
          closeModalHandler={closeModalHandler}
          // downloadPhotoHandler={() => {}}
          downloadPhotoHandler={downloadPhotoHandler}
        />
      ) : (
        <MobilePhotoItem
          currImg={currImg}
          closeBtn={closeBtn}
          closeModalHandler={closeModalHandler}
          downloadPhotoHandler={() => {}}
          // downloadPhotoHandler={downloadPhotoHandler}
        />
      )}
    </>
  )
}
