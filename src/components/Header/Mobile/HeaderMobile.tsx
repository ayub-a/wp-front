import { FC } from 'react'
import { Link } from 'react-router-dom'
import { countFormatter } from '../../../helpers/countFormatter'
import { isCurrPathName } from '../../../helpers/isCurrPathName'
import { ICollection } from '../../../types/collection'
import { SearchBar } from '../../Search/SearchBar'
import CustomButton from '../../UI/Button/CustomButton'
import { LoaderHeaderMobile } from '../../UI/Loaders/LoaderHeaderMobile/LoaderHeaderMobile'
import SvgIcon from '../../UI/SvgIcon/SvgIcon'
import HeaderSidebar from '../HeaderSidebar/HeaderSidebar'
import cl from './HeaderMobile.module.css'

interface IHeaderMobileProps {
  collectionAbout: ICollection
  searchQuery: string
}

const HeaderMobile: FC<IHeaderMobileProps> = ({ collectionAbout, searchQuery }) => {
  return (
    <div>
      <div className={cl.header_under_block}></div>

      <div className={cl.mob_top}>
        <h1>
          WIPE <span>SPLASH</span>
        </h1>

        {isCurrPathName('collections') ? (
          <div className={cl.mob_top_short_info}>
            {collectionAbout.total_photos ? (
              <>
                {collectionAbout.title} | <SvgIcon icon="IMAGE" />{' '}
                {countFormatter(collectionAbout.total_photos)}
              </>
            ) : (
              <LoaderHeaderMobile />
            )}
          </div>
        ) : (
          <CustomButton icon="GITHUB" iconsize={[18, 18]}>
            <a className={cl.github_link} href="https://github.com/ayub-a">
              ayub-a
            </a>
          </CustomButton>
        )}
      </div>

      <div className={cl.mob_bottom}>
        <div className={cl.mob_header_top}>
          {isCurrPathName('/') ? null : (
            <Link to={'/'}>
              <CustomButton icon="HOME" />
            </Link>
          )}
          <SearchBar lastSearchQuery={searchQuery} />
        </div>

        <HeaderSidebar className={cl.mob_header_bottom} />
      </div>
    </div>
  )
}

export default HeaderMobile
