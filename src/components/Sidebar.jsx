import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
const Sidebar = () => {

  const isTrue = useSelector((state) => state.app.isMenuOpen)


  if (!isTrue) {
    return null
  }
  return (
    <div className='  shadow-sm shadow-gray-400 mr-2  px-2 w-[12%]'>
      <ul className='capitalize'>
        <div className='flex items-center py-6 text-2xl'>
          <IoMdHome size={30} />
          <Link to="/">home</Link >

        </div>

      </ul>
    </div>
  )
}

export default Sidebar
