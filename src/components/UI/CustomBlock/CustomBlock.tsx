import { PropsWithChildren } from 'react'
import SvgIcon, { SvgIconsProps } from '../SvgIcon/SvgIcon'

interface ICustomBlockProps extends SvgIconsProps {
  text?: string
  className?: string
  hideIf?: any
  onClick?: () => void
}

const CustomBlock = (props: PropsWithChildren<ICustomBlockProps>) => {
  const { children, text, className, hideIf = true, icon, ...other } = props

  return (
    <>
      {hideIf ? (
        <div className={className} {...other}>
          <div>{icon && <SvgIcon icon={icon} {...props} />}</div>
          <h4>{text}</h4>
          {children}
        </div>
      ) : null}
    </>
  )
}

export default CustomBlock
