'use client'
import { createContext } from 'react'

export const MenuContext = createContext<{
  activePath: string
  setActive:(activePath: string) => void
    } | null>(null)
