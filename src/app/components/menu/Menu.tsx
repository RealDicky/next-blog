'use client'
import { FC, useEffect, useState } from 'react'
import MenuItem from './MenuItem'
import { MenuItemType } from './types'
import { MenuContext } from './menuContext'
import { usePathname } from 'next/navigation'

const Menu: FC<{ menus: MenuItemType[] }> = (props) => {
  const { menus } = props
  const [active, setActive] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      setActive('/')
      return
    }
    setActive(menus.find(menu => {
      if (menu.path === '/') return false
      return pathname.includes(menu.path)
    })?.path || '')
  }, [pathname])

  return (
    <div className='flex justify-center items-center'>
      <MenuContext.Provider value={{ activePath: active, setActive }}>
        {
          menus.map(menu => <MenuItem key={menu.name} menuItem={menu} />)
        }
      </MenuContext.Provider>
    </div>
  )
}

export default Menu
