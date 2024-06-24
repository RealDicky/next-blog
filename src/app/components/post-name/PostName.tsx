import Link from 'next/link'
import { FC } from 'react'
import { NotePath } from '../../../../types'

const PostName: FC<{ notePath: NotePath }> = (props) => {
  const { notePath } = props
  const name = notePath.name.replace(/\.(?:md|docx)/g, '')
  return (
    <Link href={`/post/${notePath.name}`}>{name}</Link>
  )
}

export default PostName
