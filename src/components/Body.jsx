import React from 'react'
import Sidebar from './Sidebar'
import MainContaner from './MainContaner'

const Body = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <MainContaner />
        </div>
    )
}

export default Body
