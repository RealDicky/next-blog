import { FC, useState } from 'react'
import MenuItem from './MenuItem'
import { MenuItemType } from './types'
import { MenuContext } from './menuContext'

const Menu: FC<{ menus: MenuItemType[] }> = (props) => {
  const { menus } = props
  const [active, setActive] = useState('')

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
