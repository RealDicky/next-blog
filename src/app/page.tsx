import Link from 'next/link'
import notePath from '../../notePath.json'
import PostName from './components/post-name/PostName'

const PAGE_SIZE = 20

export default function Home ({ searchParams }: {searchParams: {page: string}}) {
  const sortedNotes = notePath.sort((a, b) => {
    return new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  })
  const pages = new Array(Math.ceil(sortedNotes.length / PAGE_SIZE)).fill('').map((_, index) => index + 1)
  const page = Number(searchParams.page) || 1

  return (
    <div className='pb-4'>

      <div className='pb-4'>
        {
        sortedNotes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(note => (
          (
            <div className='mb-4' key={note.name}>
              <PostName notePath={note}/>
            </div>
          )
        ))
      }

      </div>
      {
        pages.length > 1 && (
          <div className='flex max-w-screen-md justify-end'>
            {
              pages.map(_page => (
                <Link
                  key={_page}
                  href={`/?page=${_page}`}
                  className='mx-2 text-gray-400 hover:text-black'
                  style={page === _page ? { color: 'black' } : {}}
                >
                  {_page}
                </Link>
              ))
            }
          </div>
        )
      }
    </div>
  )
}
