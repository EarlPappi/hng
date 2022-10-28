import React from 'react';
import Logo from "../Assets/profileAvatar.jpg";

function ProfileHeader() {
  return (
    <div className=' p-3'>
        <div className=''>
            <img src={ Logo }  alt="" className='rounded-full w-[20%] md:w-[15%] mx-auto' id='profile__img'/>
        </div>

        <h1 className='text-center font-bold text-2xl my-3' id='twitter'>earl_pappi</h1>
        <h1 className='hidden text-center font-bold text-2xl my-3' id='slack'>earl</h1>
    </div>
  )
}

export default ProfileHeader