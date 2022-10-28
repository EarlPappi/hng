import React from 'react';
import Logo from "../Assets/profileAvatar.jpg";

function ProfileHeader() {
  return (
    <div className='bg-slate-200 p-3'>
        <div className=''>
            <img src={ Logo }  alt="" className='rounded-full w-[30%] md:w-[20%] mx-auto' id='profile__img'/>
        </div>

        <h1 className='text-center font-bold text-2xl my-3' id='twitter'>earl_pappi</h1>
        <h1 className='hidden text-center font-bold text-2xl my-3' id='slack'>earl</h1>
    </div>
  )
}

export default ProfileHeader