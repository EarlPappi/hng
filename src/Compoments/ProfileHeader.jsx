import React from 'react';
import Logo from "../Assets/profileAvatar.jpg";
import Share from '../Assets/shareIcon.svg'

function ProfileHeader() {
    return (
        <div className=' p-3'>
            <div className='relative'>
                <img src={Logo} alt="" className='rounded-full w-[20%] md:w-[15%] mx-auto' id='profile__img' />

                <div className='absolute top-2 right-5 md:right-10 md:top-20 hover:bg-slate-300 p-3 md:p-5 rounded-full border-2 border-dashed hover:border-none'>
                    <img src={Share} alt="" />
                </div>

            </div>

            <h1 className='text-center font-bold text-2xl my-3' id=''>earl_pappi</h1>
            <h1 className='hidden text-center font-bold text-2xl my-3' id='slack'>earl</h1>
        </div>
    )
}

export default ProfileHeader