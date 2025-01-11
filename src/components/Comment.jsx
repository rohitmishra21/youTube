import React from 'react'

const Comment = ({ data }) => {
  const { textDisplay, authorProfileImageUrl, authorDisplayName } = data?.snippet?.topLevelComment?.snippet || {}
  return (
    <div className='flex m-4 gap-4 items-center w-[68%]'>
      <img className='w-16 object-cover rounded-full h-16' src={authorProfileImageUrl} alt="" />
      <div>
        <h1>{authorDisplayName}</h1>
        <h1>{textDisplay}</h1>
      </div>
    </div>
  )
}

export default Comment
