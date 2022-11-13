import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../TinyComp/Wrapper'
import footerLogo from '../../Asset/footerLogo.svg';
import facebook from '../../Asset/footerFacebook.png'
import instagram from '../../Asset/footerIG.png'
import twitter from '../../Asset/footerTwitter.png'

function Footer() {
    return (
        <div className='bg-[#1D1D1E] py-12 '>
            <Wrapper>
                <footer className='flex flex-col-reverse md:flex-row justify-between'>
                    <div className='flex justify-between gap-4 flex-col h-max w-full md:w-2/5'>
                        <Link to='/' className='p-12 pl-0 pt-0'>
                            <img src={footerLogo} alt="" />
                        </Link>

                        <div className='flex gap-4 p-12 pl-0'>
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>

                        <p className='text-white'>&copy; 2022 Metabnb</p>

                    </div>

                    <div className='flex flex-wrap w-full md:w-3/5 justify-between my-8 md:my-0'>
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
                    </div>
                </footer>
            </Wrapper>
        </div>
    )
}

export default Footer