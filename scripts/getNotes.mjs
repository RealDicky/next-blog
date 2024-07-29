import 'dotenv/config'
import { exec } from 'child_process'

async function getNotes () {
  await exec('rm -rf znote')

  const gitAddress = `https://${process.env.TOKEN_NAME}:${process.env.ACCESS_TOKEN}@${process.env.GIT_ADDRESS?.split('//')[1]}`

  await exec(`git clone ${gitAddress} znote`)
}

getNotes()
