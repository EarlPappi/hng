import React from 'react'
import stars from '../../Asset/fiveStars.png'

function Card({ collection }) {
  return (
    <div className='border border-[#D7D7D7] p-2 rounded-md my-4'>
        <div>
            <img src={ collection.img } alt="" className='w-full'/>
        </div>

        <div className='flex gap-2 justify-between my-2'>
            <span className='text-[0. '>{ collection.title }</span>
            <span className='font-bold text-right'>{ collection.cost }</span>
        </div>
        
        <div className='flex gap-2 justify-between my-2'>
            <span className='text-[0.'>{ collection.distance }</span>
            <span className='text-[0 '>{ collection.time }</span>
        </div>

        <div>
            <img src={ stars } alt="" />
        </div>
        
    </div>
  )
}

export default Card