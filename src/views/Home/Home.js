import React, { useEffect, useState } from 'react'
import { getPost } from '../../services/PlaceholderServices'
import './Home.css'

export const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost()
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <h1 className='mt-5 mb-3'>Post Page</h1>
      <div className='Post'>
        {posts.map( post => {
          return (
              <div className='Post-block' key={post.id}>
                <h4>{post.title}</h4>
              </div>
          )
        })
        }
      </div>
    </div>
  )
}
