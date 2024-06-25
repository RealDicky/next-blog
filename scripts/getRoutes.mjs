import fs from 'fs'
import path from 'path'

const outputFile = 'notePath.json'

function usePostDir (dir) {
  const result = []
  const getPostDir = (path) => {
    const files = fs.readdirSync(path)
    files.forEach(filename => {
      if (filename.startsWith('.')) return
      const stat = fs.statSync(path + '/' + filename)
      if (stat.isDirectory()) {
        getPostDir(path + '/' + filename)
      } else {
        result.push({
          name: filename,
          path: `${path}/${filename}`,
          tags: path.split(dir)[1].split('/').filter(Boolean),
          createAt: stat.ctime,
          updateAt: stat.mtime,
          content: filename.includes('.md') ? fs.readFileSync(path + '/' + filename, 'utf-8') : ''
        })
      }
    })
  }
  getPostDir(dir)
  return result
}

const content = JSON.stringify(usePostDir('./znote'))
fs.writeFileSync(path.resolve('./', outputFile), content)
