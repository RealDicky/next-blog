'use client'
import notePath from '../../../notePath.json'
import { MenuItemType } from '../components/menu/types'

export function useNotes (): MenuItemType[] {
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

  return result
}
