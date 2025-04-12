import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories, YOUTUBE_SEARCH_API } from '../utils/contants';
import { useDispatch } from 'react-redux';
import { vidioUpdate } from '../store/Reducers/vidioData';
const Sidebar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  async function fetchVideos(e) {
    navigate("/")
    const data = await fetch(YOUTUBE_SEARCH_API + e.target.innerText);
    const json = await data.json();
    dispatch(vidioUpdate(json.items));
  }

 return (
    <div className=' md:block hidden shadow-sm shadow-gray-400 mr-2 py-4  px-2 w-[12%]'>
      <ul className='capitalize overflow-y-auto '>
        <div className='flex items-center  py-3 gap-2 text-xl'>
          <Link to="/" className='cursor-pointer'>🏡 Home</ Link>
        </div>
        {categories.map((categorie) => (
          <div key={categorie.id} onClick={(e) => fetchVideos(e)} className='flex items-center  py-3 gap-2 text-xl'>
            {categorie.icon}
            <li className='cursor-pointer'>{categorie.name}</ li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
