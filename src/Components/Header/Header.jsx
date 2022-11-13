import React from 'react'
import Wrapper from '../TinyComp/Wrapper';
import Logo from '../../Asset/GroupmetaLogo.png'
import { Link } from 'react-router-dom';
import { Hamburger } from '../../Icons'

function Header() {
    return (
        <header>
            <Wrapper>
                <div className='py-4 flex justify-between items-baseline pb-12'>
                    <div className='w-1/2 md:w-1/4'>
                        <img src={Logo} alt="" />

                    </div>

                    <nav className='w-2/5 md:flex justify-around hidden '> 
                        <Link to='/'>Home</Link>
                        <Link to='/places-to-stay'>Place to Stay</Link>
                        <Link to='/'>NFTs</Link>
                        <Link to='/'>Community</Link>
                    </nav>

                    <div className='w-1/4 text-right hidden md:block'>
                        <Link className='bg-[#A02279] px-4 py-2 rounded-lg text-white'>Connect Wallet</Link>
                    </div>

                    <div className='md:hidden'>
                        <Hamburger/>
                    </div>
                </div>
            </Wrapper>
        </header>
    )
}

export default Header