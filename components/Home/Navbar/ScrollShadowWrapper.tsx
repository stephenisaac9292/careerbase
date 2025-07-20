'use client'
import { useEffect, useState } from 'react'

const ScrollShadowWrapper = ({ children }: { children: React.ReactNode }) => {
  const [shadow, setShadow] = useState(false)

    useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

return (
  <div className={`fixed top-0 w-full z-[10000] h-[12vh] bg-white transition-all duration-200 ${shadow ? 'shadow-md' : ''}`}>
    {children}
  </div>
)
}

export default ScrollShadowWrapper
