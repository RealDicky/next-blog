import fs from 'fs'
import path from 'path'

const outputFile = 'notePath.json'

function usePostDir (dir) {
  const result = []
  const { password: commonPassword, private: privateNotes } = JSON.parse(fs.readFileSync(`${dir}/.secret`, 'utf-8'))
  const getPostDir = (path) => {
    const files = fs.readdirSync(path)
    files.forEach(filename => {
      if (filename.startsWith('.')) return
      const stat = fs.statSync(path + '/' + filename)
      if (stat.isDirectory()) {
        getPostDir(path + '/' + filename)
      } else {
        const tags = path.split(dir)[1].split('/').filter(Boolean)
        const _path = `${path}/${filename}`
        const currentPrivateNote = privateNotes.find(note => _path.includes(note.path))
        result.push({
          name: filename,
          path: _path,
          tags,
          createAt: stat.ctime,
          updateAt: stat.mtime,
          content: filename.includes('.md') ? fs.readFileSync(path + '/' + filename, 'utf-8') : '',
          password: currentPrivateNote ? (currentPrivateNote.password || commonPassword) : ''
        })
      }
    })
  }
  getPostDir(dir)
  return result
}

const content = JSON.stringify(usePostDir('./znote'))
fs.writeFileSync(path.resolve('./', outputFile), content)
