import SvgIcon from '../../SvgIcon/SvgIcon'
import cl from './LoaderHeaderMobile.module.css'

export const LoaderHeaderMobile = () => {
  return (
    <>
      <div className={cl.title}></div> | <SvgIcon icon="IMAGE" /> <SvgIcon icon="SPINNER" />
    </>
  )
}
