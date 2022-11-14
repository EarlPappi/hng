import React from 'react'
import Wrapper from '../TinyComp/Wrapper';
import Logo from '../../Asset/GroupmetaLogo.png'
import { Link } from 'react-router-dom';
import { Hamburger, XMenu } from '../../Icons'
import { useAuth } from '../../Context';

function Header() {
    const { setShowWallet, showMenu, setShowMenu } = useAuth();



    return (
        <header>
            <Wrapper>
                <div className='py-4 flex justify-between items-center pb-12'>
                    <Link to='/' className='w-1/2 md:w-1/4'>
                        <img src={Logo} alt="" />

                    </Link>

                    <nav className='w-2/5 md:flex justify-around hidden '>
                        <Link to='/'>Home</Link>
                        <Link to='/places-to-stay'>Place to Stay</Link>
                        <Link to='/'>NFTs</Link>
                        <Link to='/'>Community</Link>
                    </nav>

                    <div className='w-1/4 text-right hidden md:block'>
                        <Link className='bg-[#A02279] px-4 py-2 rounded-lg text-white' onClick={() => {
                            setShowWallet(true)
                        }}>Connect Wallet</Link>
                    </div>

                    <div className='md:hidden'>
                        <Hamburger />
                    </div>

                    {showMenu &&
                        <div className='fixed top-0 left-0 w-screen h-screen bg-slate-300'>


                            <nav className='p-12'>
                                <div className='cursor-pointer inline' onClick={()=>{
                                        setShowMenu(false);
                                    }}>
                                    <XMenu className=''/>
                                </div>

                                <div className='flex flex-col gap-12 items-center my-[4em] transition-all'>
                                    <Link className='text-[1.2em] my-2 font-bold' to='/' onClick={()=>{
                                        setShowMenu(false)
                                    }}>Home</Link>
                                    <Link className='text-[1.2em] my-2 font-bold' to='/places-to-stay' onClick={()=>{
                                        setShowMenu(false)
                                    }}>Place to Stay</Link>
                                    <Link className='text-[1.2em] my-2 font-bold' to='/' onClick={()=>{
                                        setShowMenu(false)
                                    }}>NFTs</Link>
                                    <Link className='text-[1.2em] my-2 font-bold' to='/' onClick={()=>{
                                        setShowMenu(false)
                                    }}>Community</Link>
                                </div>
                            </nav>

                        </div>
                    }
                </div>
            </Wrapper>
        </header>
    )
}

export default Header