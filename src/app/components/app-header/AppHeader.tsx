import Menu from '@/app/components/menu/Menu'
import { menus } from './const'
import Link from 'next/link'
import ModSwitcher from './mode-switcher/ModeSwitcher'

const AppHeader = () => {
  return (
    <div className="app-header pt-4 border-b pb-1 sticky top-0">
      <div className='flex px-6 max-w-screen-xl mx-auto items-center'>
        <Link href='/'>ZBlog</Link>
        <div className='ml-auto'>
          <Menu menus={menus} />
        </div>
        <ModSwitcher />
      </div>
    </div>
  )
}

export default AppHeader
