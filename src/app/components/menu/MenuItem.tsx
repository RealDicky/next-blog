import { FC, useContext, useState } from 'react'
import { MenuItemType } from './types'
import { MenuContext } from './menuContext'
import Link from 'next/link'

const MenuItem: FC<{menuItem: MenuItemType}> = (props) => {
  const { menuItem } = props
  const { activePath, setActive } = useContext(MenuContext)!

  const isActive: (menu: MenuItemType) => boolean = menu => {
    if (activePath === menu.path) return true
    return !!menu.children?.find(_subMenu => isActive(_subMenu))
  }

  const [showSub, setShowSub] = useState(false)

  const handleClickMenu = () => {
    setActive(menuItem.path)
  }

  return (
    <div className='w-24  cursor-pointer flex' onMouseEnter={() => setShowSub(true)} onMouseLeave={() => setShowSub(false)}>
      <div className='justify-center items-center flex-1 relative'>
        <Link className={`py-2 px-4 hover:text-blue-500 text-center w-full ${isActive(menuItem) ? 'border-b-2 border-blue-500 text-blue-500' : ''}`} href={menuItem.path} onClick={handleClickMenu}>{menuItem.name}</Link>
        <div
          className='absolute w-auto top-[2.75rem]'
          style={{
            display: showSub ? 'block' : 'none'
          }}>
          {
            menuItem.children?.map((subMenu) => {
              return (<MenuItem key={subMenu.name} menuItem={subMenu}/>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MenuItem
