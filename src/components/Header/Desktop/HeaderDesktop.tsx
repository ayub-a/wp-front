import { FC } from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../../Search/SearchBar'
import CustomButton from '../../UI/Button/CustomButton'
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar'
import cl from './HeaderDesktop.module.css'

interface IHeaderDesktopProps {
  searchQuery: string
}

const HeaderDesktop: FC<IHeaderDesktopProps> = ({ searchQuery }) => {
  return (
    <>
      <div className={cl.header_under_block}></div>
      <div className={cl.header_wrap}>
        <div className={cl.header_top}>
          <Link to="/">
            <button>WIPE SPLASH</button>
          </Link>

          <SearchBar lastSearchQuery={searchQuery} />

          <HeaderSidebar />

          <div className={cl.settings}>
            <CustomButton icon="SETTINGS" strokeColor="#c2c2c2" cursor="not-allowed" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderDesktop
