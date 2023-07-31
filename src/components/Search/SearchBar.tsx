import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { encodeURL } from '../../helpers/transformURL'
import { useWindowSize } from '../../hooks/useWindowSize'
import CustomButton from '../UI/Button/CustomButton'
import cl from './SearchBar.module.css'

interface SearchBarProps {
  lastSearchQuery: string
}

export const SearchBar: FC<SearchBarProps> = ({ lastSearchQuery }) => {
  const pathname = window.location.pathname
  const navigate = useNavigate()

  const [searchQuery, setSearchQuery] = useState('')

  const navigateTo = () => {
    if (!searchQuery.length) return

    const path = pathname.match(/\w{1,}/g)?.[1] as string
    const normalQuery = encodeURL(searchQuery.trim())

    switch (path) {
      case 'photos':
        navigate(`/s/photos/${normalQuery}`)
        break

      case 'collections':
        navigate(`/s/collections/${normalQuery}`)
        break

      case 'users':
        navigate(`/s/users/${normalQuery}`)
        break

      default:
        navigate(`/s/photos/${normalQuery}`)
    }
  }

  const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') navigateTo()
  }

  useEffect(() => {
    setSearchQuery(lastSearchQuery)
  }, [lastSearchQuery])

  const windowSize = useWindowSize()

  return (
    <div className={cl.search_bar_wrap}>
      <div className={cl.search_bar}>
        <CustomButton icon="SEARCH" iconsize={[20, 20]} />

        <input
          type="text"
          value={searchQuery}
          onKeyDown={searchHandler}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search high-resolution inspiration"
        />

        <CustomButton
          icon="CLEAR"
          onClick={() => setSearchQuery('')}
          hideIf={searchQuery.length === 0}
          iconsize={[20, 20]}
        />
      </div>

      <CustomButton
        text="Search"
        className={cl.search_btn}
        onClick={navigateTo}
        hideIf={windowSize.width > 760}
      />
    </div>
  )
}
