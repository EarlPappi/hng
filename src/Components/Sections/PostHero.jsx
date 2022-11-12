import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import mbToken from '../../Asset/mbToken.svg'
import metaMask from '../../Asset/metaMask.svg'
import openSea from '../../Asset/openSea.svg'

function PostHero() {
  return (
    <div className='bg-[#A02279]'>
        <Wrapper>
            <div className='flex flex-col md:flex-row gap-5  justify-between items-center py-4 my-8'>
                <img src={ mbToken  } alt="" />
                <img src={ metaMask  } alt="" />
                <img src={ openSea  } alt="" />

            </div>
        </Wrapper>
    </div>
  )
}

export default PostHero