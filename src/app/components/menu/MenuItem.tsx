import { FC, useContext, useEffect, useState } from 'react'
import { MenuItemType } from './types'
import { MenuContext } from './menuContext'
import Link from 'next/link'
const MenuItem: FC<{menuItem: MenuItemType}> = (props) => {
  const { menuItem } = props
  if (!menuItem.children) return
  const { activePath, setActive } = useContext(MenuContext)!

  const isActive: (menu: MenuItemType) => boolean = menu => {
    if (activePath === menu.path) return true
    return !!menu.children?.find(_subMenu => isActive(_subMenu))
  }

  const [showSub, setShowSub] = useState(false)

  const handleClickMenu = () => {
    setActive(menuItem.path)
  }

  useEffect(() => {
    setActive('.' + location.pathname)
  })

  return (
    <div className='w-32 cursor-pointer flex' onMouseEnter={() => setShowSub(true)} onMouseLeave={() => setShowSub(false)}>
      <div className='justify-center items-center flex-1 relative'>
        <Link href={menuItem.path.slice(1)} className={`p-2 hover:bg-slate-300 text-center ${isActive(menuItem) ? 'border-b-2 border-slate-500' : ''}`} onClick={handleClickMenu}>{menuItem.name}</Link>
        <div
          className='absolute w-auto top-9'
          style={{
            display: showSub ? 'block' : 'none'
          }}>
          {menuItem.children?.map((subMenu) => {
            return (<MenuItem key={subMenu.name} menuItem={subMenu}/>)
          })}
        </div>
      </div>
    </div>
  )
}

export default MenuItem
