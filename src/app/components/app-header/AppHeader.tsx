'use client'
import { useEffect } from 'react'
import notePath from '../../../../notePath.json'

import Menu from '@/app/components/menu/Menu'

const AppHeader = () => {
  useEffect(() => {
  })

  return (
    <div className="pt-4 pb-2 border-b">
      <Menu menus={notePath} />
    </div>
  )
}

export default AppHeader
