import React from 'react'
import { FiMenu } from "react-icons/fi";
import { LOGO_SVG } from '../contants/svg.jsx';
import { FiSearch } from "react-icons/fi";
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/Reducers/appSlice.jsx';
const Head = () => {

  const dispatch = useDispatch()
  function toggleHendler() {
    dispatch(toggleMenu())
  }
  return (
    <>
      <div className='flex items-center shadow-sm px-2 shadow-gray-400 justify-between w-full py-4 '>
        <div className='flex items-center gap-3'>
          <FiMenu size={30} onClick={toggleHendler} className='cursor-pointer' />
          {LOGO_SVG}
        </div>
        <div className='flex items-center w-[70%]'>
          <input type="text" className='border-black border py-1 rounded-full rounded-r-none w-[80%]' />
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
