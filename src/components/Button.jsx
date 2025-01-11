import React from 'react'

const Button = ({ item }) => {
  return (
    <div className='py-3'>
      <h1 className='capitalize bg-[#232222] hover:bg-[#3F3F3F] cursor-pointer transition-all duration-300 font-bold px-6 py-2 rounded text-white '>{item}</h1>
    </div>
  )
}

export default Button
