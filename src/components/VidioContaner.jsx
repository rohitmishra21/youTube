import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDIOS_API } from '../utils/contants'
import VidioCard from './VidioCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { vidioUpdate } from '../store/Reducers/vidioData'

const VidioContaner = () => {

  const dispatch = useDispatch()
  const selectedData = useSelector((state) => state.videoData.dataOfVidio)



  useEffect(() => {
    fetchHendler()
  }, [])

  async function fetchHendler() {
    const data = await fetch(YOUTUBE_VIDIOS_API)
    const json = await data.json()
    dispatch(vidioUpdate(json.items));
  }

  return (
    <div className='flex flex-wrap gap-3'>
      {selectedData.map((vidio, i) => (
        <Link to={vidio.id.videoId ? `/watch/${vidio.id.videoId}` : `/watch/${vidio.id}`} state={vidio} key={i}>
          <VidioCard info={vidio} />
        </Link>

      ))}
    </div>
  )
}

export default VidioContaner
