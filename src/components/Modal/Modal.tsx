import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import cl from './Modal.module.css'
import { useDisableScroll } from '../../hooks/useDisableScroll'
dayjs.extend(localizedFormat)

export const Modal = (props: PropsWithChildren) => {
  const { children } = props

  const navigate = useNavigate()

  useDisableScroll('body', children)

  return (
    <div className={cl.modal_outside} onClick={() => navigate(-1)}>
      <div className={cl.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
