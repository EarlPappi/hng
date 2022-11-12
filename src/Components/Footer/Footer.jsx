import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../TinyComp/Wrapper'
import footerLogo from '../../Asset/footerLogo.svg';

function Footer() {
  return (
    <div className='bg-black py-8'>
        <Wrapper>
            <footer className='flex justify-between'>
                <div>
                    <div>
                        <img src={ footerLogo } alt="" />
                    </div>

                </div>

                <div>
                    <p className='font-bold text-[1.2em] text-white'>Commmunity</p>

                    <div className='flex flex-col gap-4 mt-4'>
                        <Link to='/' className='text-white font-light'>NFT</Link>
                        <Link to='/' className='text-white font-light'>Token</Link>
                        <Link to='/' className='text-white font-light'>Landlords</Link>
                        <Link to='/' className='text-white font-light'>Discord</Link>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-[1.2em] text-white'>Places</p>

                    <div className='flex flex-col gap-4 mt-4'>
                        <Link to='/' className='text-white font-light'>Castle</Link>
                        <Link to='/' className='text-white font-light'>Farm</Link>
                        <Link to='/' className='text-white font-light'>Beach</Link>
                        <Link to='/' className='text-white font-light'>Learn More</Link>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-[1.2em] text-white'>About Us</p>

                    <div className='flex flex-col gap-4 mt-4'>
                        <Link to='/' className='text-white font-light'>Roadmap</Link>
                        <Link to='/' className='text-white font-light'>Creator</Link>
                        <Link to='/' className='text-white font-light'>Career</Link>
                        <Link to='/' className='text-white font-light'>Contact Us</Link>
                    </div>
                </div>
            </footer>
        </Wrapper>
    </div>
  )
}

export default Footer