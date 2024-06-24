'use client'
import notePath from '../../../notePath.json'
import { MenuItemType } from '../components/menu/types'

function isFile (file: MenuItemType) {
  return !file.children && file.path.includes('.')
}

export function useNotes (filter?: 'DIR' | 'FILE'): MenuItemType[] {
  const activePath = '.' + decodeURIComponent(location.pathname)

  const result = []
  const stack = [...notePath] as MenuItemType[]
  while (!result.length && stack.length) {
    const current = stack.pop()!
    if (current.path === activePath) {
      result.push(...current.children || [])
    } else if (current.children) {
      stack.push(...current.children)
    }
  }
  if (filter === 'FILE') {
    return result.filter(isFile)
  } else if (filter === 'DIR') {
    return result.filter(note => !isFile(note))
  }

  return result
}
