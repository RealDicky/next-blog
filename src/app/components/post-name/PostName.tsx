'use client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { NotePath } from '../../../../types'
import BaseModal from '../base-modal/BaseModal'

const CACHE_KEY = 'notePassword'

function cacheNotePassword (notePath: NotePath) {
  const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]')
  if (!cache.find((noteName: string) => noteName === notePath.name)) {
    cache.push(notePath.name)
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  }
}

const PostName: FC<{ notePath: NotePath }> = (props) => {
  const { notePath } = props
  const name = notePath.name.replace(/\.(?:md|docx)/g, '')
  const [passwordModalVisible, setPasswordModalVisible] = useState(false)
  const [lock, setLock] = useState(true)
  const [password, setPassword] = useState('')
  const [err, setErr] = useState(false)

  useEffect(() => {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '[]')
    setLock(!cache.find((noteName: string) => noteName === notePath.name))
  }, [])

  const handleConfirm = () => {
    if (password === notePath.password) {
      setLock(false)
      setPasswordModalVisible(false)
      cacheNotePassword(notePath)
    } else {
      setErr(true)
    }
  }

  const handleCancel = () => {
    setPasswordModalVisible(false)
    setErr(false)
    setPassword('')
  }
  return (
    <>
      {
        (notePath.password && lock)
          ? (
            <div className='hover:text-blue-500 flex items-center has-[.lock-icon]:text-gray-400'>
              <Icon className="lock-icon mr-2 cursor-pointer hover:text-blue-500" icon="mdi:lock" onClick={() => setPasswordModalVisible(true)} />
              {name}
            </div>
            )
          : (
            <Link href={`/post/${notePath.name}`} className='hover:text-blue-500 flex items-center has-[.lock-icon]:text-gray-400'>
              {name}
            </Link>
            )
      }
      <BaseModal visible={passwordModalVisible}>
        <div className='group'>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="w-full rounded-md py-1 px-3 border focus:outline-none" placeholder="请输入密码" />
          {
            err
              ? <p className="text-red-500">error password!</p>
              : null
          }
          <div className='flex'>
            <button className="mt-4 w-full rounded-md py-1 px-3 text-white bg-red-500 mr-5" onClick={handleCancel}>取消</button>
            <button className="mt-4 w-full rounded-md py-1 px-3 text-white bg-blue-500 group-has-[:placeholder-shown]:bg-gray-300" onClick={handleConfirm}>确认</button>
          </div>
        </div>
      </BaseModal>
    </>
  )
}

export default PostName
