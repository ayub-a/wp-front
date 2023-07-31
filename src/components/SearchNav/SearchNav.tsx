import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { encodeURL } from '../../helpers/transformURL'
import { useAppSelector } from '../../hooks/store'
import CustomButton from '../UI/Button/CustomButton'
import cl from './SearchNav.module.css'

export const SearchNav = () => {
  const { photos, collections, users, searchQuery } = useAppSelector((state) => state.searchSlice)
  const normalQuery = encodeURL(searchQuery)

  const path = window.location.pathname.match(/\w{1,}/g)![1]
  const [currentToggle, setCurrentToggle] = useState(path)

  useEffect(() => {
    setCurrentToggle(path)
  }, [path])

  return (
    <div className={cl.sub_header}>
      <div className={cl.topics_wrap}>
        <div className={cl.topics}>
          <Link to={`/s/photos/${normalQuery}`}>
            <CustomButton
              text={`Photos ${photos.total}`}
              onClick={() => setCurrentToggle('photos')}
              isLoading={!photos.total}
              className={`${cl.topic_item} ${currentToggle === 'photos' ? cl.active_topic : ''}`}
            />
          </Link>

          <Link to={`/s/collections/${normalQuery}`}>
            <CustomButton
              text={`Collections ${collections.total}`}
              onClick={() => setCurrentToggle('collections')}
              isLoading={!collections.total}
              className={`${cl.topic_item} ${
                currentToggle === 'collections' ? cl.active_topic : ''
              }`}
            />
          </Link>

          <Link to={`/s/users/${normalQuery}`}>
            <CustomButton
              text={`Users ${users.total}`}
              onClick={() => setCurrentToggle('users')}
              isLoading={!users.total}
              className={`${cl.topic_item} ${currentToggle === 'users' ? cl.active_topic : ''}`}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
