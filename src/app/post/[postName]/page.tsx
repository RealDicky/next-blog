'use client'
import { useEffect, useState } from 'react'
import { useNotes } from '../../hooks/useNotes'
import { MenuItemType } from '@/app/components/menu/types'
import Link from 'next/link'
import notePath from '../../../../notePath.json'

const Post = ({ params }: { params: { postName: string } }) => {
  const post = notePath.find(note => note.name === decodeURIComponent(params.postName))
  if (!post) {
    // TODO
    return <div>404</div>
  }
  const [posts, setPosts] = useState<MenuItemType[]>([])
  const [showDir, setShowDir] = useState(true)
  const [note, setNote] = useState('')
  const loadNote = async () => {
    const note = await import(/* webpackMode: "eager" */ `../../../../note${post.path.split('note')[1]}`)

    setNote(note.default)
  }

  useEffect(() => {
    setShowDir(!location.pathname.includes('.'))
  }, [])

  useEffect(() => {
    if (showDir) {
      setPosts(useNotes('FILE'))
    } else {
      loadNote()
    }
  }, [showDir])

  useEffect(() => {
    const container = document.getElementById('note-container')
    if (!container) return
    container!.innerHTML = note
  }, [note])

  if (showDir) {
    return (
      <div>
        {posts.map(note => (
          <div key={note.name} className='mt-2'>
            <Link href={note.path.slice(1)} className='text-xl hover:text-red-500'>{note.name}</Link>
          </div>
        ))}
      </div>
    )
  }

  return <div id="note-container" className='max-w-screen-md'></div>
}

export default Post
