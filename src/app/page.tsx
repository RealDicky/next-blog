import notePath from '../../notePath.json'
import PostName from './components/post-name/PostName'

export default function Home () {
  const sortedNotes = notePath.sort((a, b) => {
    return new Date(b.createAt).getTime() - new Date(a.createAt).getTime()
  })
  return (
    <div>
      {
        sortedNotes.map(note => (
          (
            // TODO post component
            <div key={note.name}>
              <PostName notePath={note}/>
            </div>
          )
        ))
      }
    </div>
  )
}
