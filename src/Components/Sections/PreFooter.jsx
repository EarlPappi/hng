import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import preImg from '../../Asset/footerImg.png'
import { Link } from 'react-router-dom'

function PreFooter() {
    return (
        <div className='bg-[#A02279] py-12'>
            <Wrapper>
                <div className='flex flex-col-reverse md:flex-row gap-12 items-center justify-between'>
                    <div className='w-full md:w-1/2'>
                        <h1 className='md:w-8/12 text-[2.5em] text-white leading-[120%] mb-4 text-center md:text-left'>Metabnb NFTs</h1>

                        <p className='md:w-8/12 text-white leading-[200%] my-8 font-thin'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

                        <Link to='/' className='bg-white text-[#A02279] px-4 py-2 rounded-sm'>Learn More</Link>

                    </div>

                    <div className='w-full md:w-1/2'>
                        <img src={preImg} alt="" className='w-full' />

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default PreFooter