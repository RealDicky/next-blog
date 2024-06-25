import Menu from '@/app/components/menu/Menu'
import { menus } from './const'
import Link from 'next/link'

const AppHeader = () => {
  return (
    <div className="app-header pt-4 pb-2 border-b sticky top-0">
      <div className='flex px-6 max-w-screen-xl mx-auto items-center'>
        <Link href='/'>ZBlog</Link>
        <div className='ml-auto'>
          <Menu menus={menus} />
        </div>
      </div>
    </div>
  )
}

export default AppHeader
