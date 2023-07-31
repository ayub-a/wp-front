import { FC } from 'react'
import LoaderDesktopPhotoPage from './Desktop/DesktopPhotoPageLoader'
import LoaderMobilePhotoPage from './Mobile/MobilePhotoPageLoader'
interface ILoaderPhotoPageProps {
  type: 'desktop' | 'mobile'
}

export const LoaderPhotoPage: FC<ILoaderPhotoPageProps> = ({ type }) => {
  if (type === 'desktop') return <LoaderDesktopPhotoPage />
  if (type === 'mobile') return <LoaderMobilePhotoPage />
  return null
}
