'use client'

import { useEffect } from 'react'
import hljs from 'highlight.js'

const LoadHighlight = () => {
  useEffect(() => {
    hljs?.highlightAll()
  }, [])
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css" />
    </div>
  )
}

export default LoadHighlight
