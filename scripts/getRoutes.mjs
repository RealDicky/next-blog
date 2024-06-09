import fs from 'fs'
import path from 'path'

const outputFile = 'notePath.json'

function usePostDir (dir) {
  const getPostDir = (path) => {
    const files = fs.readdirSync(path)
    return files.map(filename => {
      const stat = fs.statSync(path + '/' + filename)
      const children = stat.isDirectory() ? getPostDir(path + '/' + filename) : undefined
      return {
        name: filename,
        path: `${path}/${filename}`,
        url: path,
        children
      }
    }).filter(file => !file.name.startsWith('.'))
  }
  return getPostDir(dir)
}

const content = JSON.stringify(usePostDir('./note'))
fs.writeFileSync(path.resolve('./', outputFile), content)
