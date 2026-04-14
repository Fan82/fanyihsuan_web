import { useEffect } from 'react'

/**
 * Locks body scroll while `locked` is true.
 * Automatically restores on unmount.
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [locked])
}
