'use client'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

const ModSwitcher = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.body.classList.contains('dark'))
  }, [])
  const handleClick = () => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
  }
  return (
    <div onClick={handleClick} className="shadow-inner shadow-zinc-300 dark:shadow-stone-950 w-16 h-8 bg-white rounded-full px-2 dark:bg-gray-700 dark:text-white relative cursor-pointer">
      {/* <div className='flex absolute left-0 right-0 top-1'>
        <Icon icon="emojione-v1:crescent-moon" className='flex-1 m-0 inline-block text-2xl' />
        <Icon icon="emojione-v1:sun" className='flex-1 m-0 inline-block text-white text-2xl' />
      </div> */}
      <span className="flex w-7 h-7 mt-0.5 rounded-full bg-gray-700 dark:bg-white absolute  transition-all left-1 dark:left-8 top-0">
        <Icon icon={isDark ? 'emojione-v1:sun' : 'emojione-v1:crescent-moon'} className=' text-2xl m-auto' />
      </span>
    </div>
  )
}

export default ModSwitcher
