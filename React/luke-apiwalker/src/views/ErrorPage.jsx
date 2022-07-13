import React from 'react'
import photo from '../assets/obi-wan-judging-you-meme.jpeg'

const ErrorPage = () => {
  return (
    <div>
      <h1>These aren't the droids you're looking for</h1>
      <h3>Try again with a different id</h3>
      <img src={photo} alt='' style={{ width: '700px' }} />
    </div>
  )
}

export default ErrorPage