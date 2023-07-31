import { useEffect, useRef } from 'react'

export const useDisableScroll = (el: 'body' | 'el', param?: any) => {
  const scrollRef = useRef<any>(null)

  useEffect(() => {
    if (param && el === 'body') window.document.body.style.overflow = 'hidden'
    if (scrollRef.current && el === 'el') scrollRef.current.style.overflow = 'hidden'

    return () => {
      if (param && el === 'body') window.document.body.style.overflow = ''

      if (scrollRef.current && el === 'el') {
        scrollRef.current.style.overflow = ''
        scrollRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return scrollRef
}
