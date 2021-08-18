import React, { useEffect, useState } from 'react'
import './feed.css'

import Share from '../Share'
import Post from '../Post'

import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/60e8333c17985231c84cfcf2')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Feed
