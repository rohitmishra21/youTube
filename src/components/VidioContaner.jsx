import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDIOS_API } from '../utils/contants'
import VidioCard from './VidioCard'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Details } from '../store/Reducers/appSlice'

const VidioContaner = () => {

  const [vidios, setVidios] = useState([])

  useEffect(() => {
    fetchHendler()
  }, [])

  async function fetchHendler() {
    const data = await fetch(YOUTUBE_VIDIOS_API)
    const json = await data.json()
    setVidios(json.items);

  }


  const dispatch = useDispatch()
  dispatch(Details(vidios))
  const selectedData = useSelector((state) => state)
  console.log(selectedData);

  return (
    <div className='flex flex-wrap gap-3'>
      {vidios.map((vidio) => (
        <Link to={`/watch/${vidio.id}`} key={vidio.id}>
          <VidioCard info={vidio} />
        </Link>


      ))}
    </div>
  )
}

export default VidioContaner
