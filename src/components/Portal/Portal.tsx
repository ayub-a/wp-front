import { PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }: PropsWithChildren) => {
  const mount = document.getElementById('portal-root')
  const el = document.createElement('div')

  useEffect(() => {
    mount?.appendChild(el)

    return () => {
      mount?.removeChild(el)
    }
  }, [el, mount])

  return createPortal(children, el)
}
