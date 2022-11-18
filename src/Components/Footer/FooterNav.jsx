import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { Logo } from '../../Icons'
import { Link } from 'react-router-dom'

function FooterNav() {
    return (
        <div className='py-8'>
            <Wrapper>
                <div className='flex justify-between w-full gap-10 flex-col md:flex-row'>
                    <div className='w-[10%]'>
                        <Logo/>
                    </div>

                    <div className='md:w-[30%]'>
                        <p className='text-[#6D6D6D] mb-4'>Product</p>

                        <nav className='flex justify-between flex-col gap-[2em]'>
                            <Link to='/' className='font-bold'>Documentation</Link>
                            <Link to='/' className='font-bold'>Help</Link>
                            <Link to='/' className='font-bold'>Career</Link>
                            <Link to='/' className='font-bold'>Pricing</Link>
                        </nav>
                    </div>

                    <div className='md:w-[30%]'>
                        <p className='text-[#6D6D6D] mb-4'>Company</p>

                        <nav className='flex justify-between flex-col gap-[2em]'>
                            <Link to='/' className='font-bold'>About Us</Link>
                            <Link to='/' className='font-bold'>Blog</Link>
                            <Link to='/' className='font-bold'>Forum</Link>
                            <Link to='/' className='font-bold'>Contact Us</Link>
                        </nav>
                    </div>

                    <div className='md:w-[30%]'>
                        <p className='text-[#6D6D6D] mb-4'>Activity</p>

                        <nav className='flex justify-between flex-col gap-[2em] flex-wrap'>
                            <Link to='/' className='font-bold'>Events</Link>
                            <Link to='/' className='font-bold'>Customer Stories</Link>
                            <Link to='/' className='font-bold'>Features</Link>
                        </nav>
                    </div>


                </div>
            </Wrapper>
        </div>
    )
}

export default FooterNav