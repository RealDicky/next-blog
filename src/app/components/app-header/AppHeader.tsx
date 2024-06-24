import Menu from '@/app/components/menu/Menu'
import { menus } from './const'
import Link from 'next/link'

const AppHeader = () => {
  return (
    <div className="pt-4 border-b">
      <div className='flex px-6 max-w-screen-xl mx-auto items-center'>
        <Link href='/'>ZBlog</Link>
        <div className='ml-auto'>
          <Menu menus={menus} />
        </div>
        <div className='border px-12 py-1 rounded-full'>
          {/* TODO */}
          search
        </div>
      </div>
    </div>
  )
}

export default AppHeader
