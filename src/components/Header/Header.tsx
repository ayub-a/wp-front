import { useAppSelector } from '../../hooks/store'
import { useWindowSize } from '../../hooks/useWindowSize'
import HeaderDesktop from './Desktop/HeaderDesktop'
import HeaderMobile from './Mobile/HeaderMobile'

export const Header = () => {
  const { searchQuery } = useAppSelector((state) => state.searchSlice)
  const { collectionAbout } = useAppSelector((state) => state.collectionSlice)
  const windowSize = useWindowSize()

  return (
    <>
      {windowSize.width > 760 ? (
        <HeaderDesktop searchQuery={searchQuery} />
      ) : (
        <HeaderMobile collectionAbout={collectionAbout} searchQuery={searchQuery} />
      )}
    </>
  )
}
