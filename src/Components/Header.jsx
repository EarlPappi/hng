import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MainIcon, HamburgerIcon, UserProfile } from '../Icons'
import Wrapper from './Wrapper/Wrapper'

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='bg-white my-4'>
            <Wrapper>

                <div className='flex justify-between items-center'>
                    <Link to='/'>
                        <MainIcon />
                    </Link>

                    <div className='flex gap-4 items-center'>
                        <p className='hidden md:block text-[#0652DD] font-semibold border-2 border-[#0652DD] py-2 px-4 rounded-lg'>History</p>

                        <p className='rounded-full px-5 py-3 text-[#0652DD] font-semibold bg-[#CDDCF8]' onMouseOver={() => {
                            setShowMenu(true)
                        }} >B</p>

                        <div className="md:hidden" onClick={() => {
                            setShowMenu(!showMenu)
                        }}>
                            <HamburgerIcon />
                        </div>

                    </div>

                    {showMenu &&
                        <div onMouseOver={() => {
                            setShowMenu(true)
                        }} onMouseLeave={() => {
                            setShowMenu(false)
                        }} className='absolute w-max h-max top-[4em] right-[0.5em] bg-white border rounded-md border-[#CAD0DD]'>
                            <p onClick={() => {
                                setShowMenu(false)
                            }} className='bg-errorMain inline px-4 py-2 '>X</p>

                            <p className='px-[4em] py-[2em] flex items-center gap-4 justify-center  border-b border-b-[#CAD0DD] hover:bg-primaryLight'>
                                <span><UserProfile /></span>
                                <span className='font-bold'>Account</span>
                            </p>

                            <p className='px-[4em] py-[2em] text-center font-bold hover:bg-primaryLight'>Logout</p>

                        </div>
                    }
                </div>
            </Wrapper>
        </div>

    )
}

export default Header