import React from 'react'

const Comment = ({ data }) => {

  const { textDisplay, authorProfileImageUrl, authorDisplayName } = data?.snippet?.topLevelComment?.snippet || {}


  return (
    <div className='flex m-4 my-7 gap-4 items-center w-[68%]'>
      <img className='w-14 object-cover rounded-full h-14 ' src={authorProfileImageUrl} alt="" />
      <div>
        <h1>{authorDisplayName}</h1>
        <h1>{textDisplay}</h1>
      </div>
    </div>
  )
}

export default Comment
