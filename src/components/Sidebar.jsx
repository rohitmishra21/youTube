import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isTrue = useSelector((state) => state.app.isMenuOpen)

  if (!isTrue) {
    return null
  }
  return (
    <div className='  shadow-sm shadow-gray-400 py-3  px-2 w-40'>
      <ul className='capitalize'>
        <li>home</li>
        <li>music</li>
        <li>sports</li>
        <li>movie</li>
      </ul>
    </div>
  )
}

export default Sidebar
