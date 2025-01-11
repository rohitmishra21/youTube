import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { LOGO_SVG } from '../utils/svg.jsx';
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/Reducers/appSlice.jsx';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/contants.jsx';
const Head = () => {

  const [query, setQuery] = useState("")
  const [searchlist, setSearchlist] = useState([])
  const dispatch = useDispatch()
  function toggleHendler() {
    dispatch(toggleMenu())
  }
  useEffect(() => {
    searchHendler()

  }, [query])

  async function searchHendler() {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + query)
    const json = await data.json()
    setSearchlist(json[1])


  }

  return (
    <>
      <div className='flex items-center shadow-sm px-2 shadow-gray-400 justify-between w-full py-4 '>
        <div className='flex items-center gap-3'>
          <FiMenu size={30} onClick={toggleHendler} className='cursor-pointer' />
          {LOGO_SVG}
        </div>
        <div className='flex items-center w-[70%]'>
          <input type="text" className='border-black px-5 border py-1 rounded-full rounded-r-none w-[80%]'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          {searchlist.length > 0 && <div className='absolute top-[53px] rounded w-[52.5rem] py-4 bg-white'>
            {searchlist.map((s, i) => (<ul key={i} className='px-5'>
              <li className='text-lg shadow-sm py-1 '>{s}</li>
            </ul>))}
          </div>}
          <div className=' py-1 px-2 rounded-full rounded-l-none border-black border'>
            <FiSearch size={24} />
          </div>
        </div>
        <div >
          <img className='w-10' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
        </div>
      </div >
    </>
  )
}

export default Head
