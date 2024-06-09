'use client'
import { useEffect, useState } from 'react'
import { useNotes } from '../../hooks/useNotes'
import { MenuItemType } from '@/app/components/menu/types'
import Link from 'next/link'
// Using ES6 import syntax
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

// Then register the languages you need
hljs.registerLanguage('javascript', javascript)

function isFile (file: MenuItemType) {
  return !file.children && file.path.includes('.')
}

const Post = () => {
  const [notes, setNotes] = useState<MenuItemType[]>([])
  const [showDir, setShowDir] = useState(true)
  const [note, setNote] = useState('')
  const loadNote = async () => {
    const note = await import(/* webpackMode: "eager" */ `../../../../note${decodeURIComponent(location.pathname).split('note')[1]}`)

    setNote(note.default)
  }

  useEffect(() => {
    setShowDir(!location.pathname.includes('.'))
  }, [])

  useEffect(() => {
    if (showDir) {
      setNotes(useNotes().filter(isFile))
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
      <div className='max-w-screen-xl mx-auto pt-6'>
        {notes.map(note => (
          <div key={note.name} className='mt-2'>
            <Link href={note.path.slice(1)} className='text-xl hover:text-red-500'>{note.name}</Link>
          </div>
        ))}
      </div>
    )
  }

  return <div className='px-20 pt-6' id="note-container"></div>
}

export default Post
