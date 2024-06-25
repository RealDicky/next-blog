import notePath from '../../../../notePath.json'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Head from 'next/head'
import LoadHighlight from './LoadHighlight'
import React from 'react'

const Post = async ({ params }: { params: { postName: string } }) => {
  const post = notePath.find(note => {
    return note.name.includes(params.postName) || note.name.includes(decodeURIComponent(params.postName))
  })
  const isMd = post?.name.endsWith('.md')

  if (!post) {
    // TODO
    return 404
  }
  const postContent = isMd ? (post?.content || '') : (await import(/* webpackMode: "eager" */ `../../../../znote${post?.path.split('note')[1]}`))?.default

  if (isMd) {
    return (
      <div className='pb-4 relative'>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"></link>
        </Head>
        <LoadHighlight />
        <div className='max-w-screen-md'>
          <MDXRemote source={postContent} />
        </div>
      </div>
    )
  }
  return (
    <div className='max-w-screen-md pb-4 relative'>
      <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
    </div>
  )
}

export default Post
