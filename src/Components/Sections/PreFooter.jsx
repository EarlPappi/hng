import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import preImg from '../../Asset/footerImg.png'
import { Link } from 'react-router-dom'

function PreFooter() {
    return (
        <div className='bg-[#A02279] py-12'>
            <Wrapper>
                <div>
                    <div>
                    <h1 className='w-11/12 text-[3.5em] leading-[120%]'>Metabnb NFTs</h1>

                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    
                    <Link>Learn More</Link>

                    </div>

                    <div>
                        <img src={ preImg } alt="" />

                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default PreFooter