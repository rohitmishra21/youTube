import React from 'react'
import Button from './Button'

const ButtonLists = () => {
    const list = ["gameing", "cricket", "song", "movie", "news"]
    return (
        <div className='flex gap-2'>
            {list.map((item, i) => (
                <Button key={i} item={item} />
            ))}
        </div>
    )
}

export default ButtonLists
