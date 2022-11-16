import React from 'react'
import { MainIcon } from '../Icons'
import Wrapper from './Wrapper/Wrapper'

function Header() {
    return (
        <div className='bg-white my-4'>
            <Wrapper>

                <div className='flex justify-between items-center'>
                    <div>
                        <MainIcon />

                    </div>

                    <div className='flex gap-4'>
                        <p className='text-[#0652DD] font-semibold border-2 border-[#0652DD] py-2 px-4 rounded-lg'>History</p>

                        <p className='rounded-full px-5 py-3 text-[#0652DD] font-semibold bg-[#CDDCF8]'>B</p>
                    </div>
                </div>
            </Wrapper>
        </div>

    )
}

export default Header