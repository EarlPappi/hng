import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import preImg from '../../Asset/footerImg.png'
import { Link } from 'react-router-dom'

function PreFooter() {
    return (
        <div className='bg-[#A02279] py-12'>
            <Wrapper>
                <div className='flex gap-12 items-center justify-between'>
                    <div className='w-1/2'>
                        <h1 className='w-8/12 text-[2.5em] text-white leading-[120%] mb-4'>Metabnb NFTs</h1>

                        <p className='w-8/12 text-white leading-[200%] my-8 font-thin'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

                        <Link to='/' className='bg-white text-[#A02279] px-4 py-2 rounded-sm'>Learn More</Link>

                    </div>

                    <div className='w-1/2'>
                        <img src={preImg} alt="" className='w-full' />

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default PreFooter