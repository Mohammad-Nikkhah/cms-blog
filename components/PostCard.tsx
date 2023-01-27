import React from 'react'


function PostCard({ post } :any) {
  return (
    <div>
        {post.title}
        {post.export}
    </div>
  )
}

export default PostCard