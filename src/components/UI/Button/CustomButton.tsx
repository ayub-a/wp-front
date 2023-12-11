import { PropsWithChildren } from 'react'
import SvgIcon, { SvgIconsProps } from '../SvgIcon/SvgIcon'
import cl from './CustomButton.module.css'

interface ICustomButtonProps extends SvgIconsProps {
  text?: string
  hideIf?: any
  className?: string
  disabled?: boolean
  onClick?: () => void
  reverse?: boolean
  cursor?: 'not-allowed'
  isLoading?: boolean
}

const CustomButton = (props: PropsWithChildren<ICustomButtonProps>) => {
  const { children, text, icon, hideIf, className, onClick, reverse, cursor, isLoading } = props
  console.log(onClick)
  return (
    <>
      {hideIf ? null : (
        <button className={[cl.btn, className].join(' ')} onClick={onClick} style={{ cursor: cursor }}>
          {reverse ? (
            <>
              {icon && <SvgIcon icon={icon} />}
              <h4 className={cl.text}>{text}</h4>
            </>
          ) : (
            <>
              <h4 className={cl.text}>
                {text} {isLoading ? <SvgIcon icon="SPINNER" /> : null}
              </h4>
              {icon && <SvgIcon icon={icon} {...props} />}
            </>
          )}
          {children}
        </button>
      )}
    </>
  )
}

export default CustomButton
