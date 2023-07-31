import { useEffect } from 'react'

export const useScrollTo = (top = 0, loading: any, smooth?: boolean) => {
  useEffect(() => {
    window.scrollTo({
      top: top,
      behavior: (smooth && 'smooth') || 'auto',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
}
