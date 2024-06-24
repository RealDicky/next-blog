import Link from 'next/link'
import notePath from '../../../notePath.json'
import { NotePath } from '../../../types'

interface Tag {
  name: string
  nums: number
  notes: NotePath[]
}

const tags = notePath.reduce<Record<string, Tag>>((result: Record<string, Tag>, note: NotePath) => {
  if (result[note.tags[0]]) {
    const tag = result[note.tags[0]]!
    result[note.tags[0]] = {
      name: note.tags[0],
      nums: tag.nums + 1,
      notes: [...tag.notes, note]
    }
  } else {
    result[note.tags[0]] = {
      name: note.tags[0],
      nums: 1,
      notes: [note]
    }
  }
  return result
}, {})

const Tags = () => {
  console.log({ tags })

  return (
    <div>
      {
        Object.values(tags).map(tag => <Link href={`/tags/${tag.name}`} key={tag.name}>{tag.name}（{tag.nums}）</Link>)
      }
    </div>
  )
}

export default Tags
