import React, { useEffect, useState } from 'react'
import { getComment } from '../../services/PlaceholderServices'
import './Details.css'

export const Detail = () => {

  const [comments, setComments] = useState(null)

  useEffect(() => { 
    getComment()
      .then(response => {
        setComments(response)
  
      })
  }, [])

  return (
    <div>
      <div className='Detail'>
        <h1 className='mt-5 mb-3'>Comments</h1>
        { comments.map( comment => {
            return (
              <div className='Detail-block'>
                <h4>{comment.name}</h4>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
