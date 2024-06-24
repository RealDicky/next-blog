import notePath from '../../../../notePath.json'
import PostName from '@/app/components/post-name/PostName'
const TagPage = ({ params }: { params: { tag: string } }) => {
  const notes = notePath.filter(note => note.tags[0] === params.tag)

  return (
    <div>
      {
        notes.map(note => (
          <div key={note.path}>
            <PostName notePath={note} />
          </div>
        ))
      }
    </div>
  )
}

export default TagPage
