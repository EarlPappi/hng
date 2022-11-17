import React from 'react'
import Wrapper from '../../Components/Wrapper/Wrapper'
import MyAccount from './MyAccount'
import SideProfile from './SideProfile'
import UploadResume from './UploadResume'

function Home() {
    return (
        <div className='bg-[#03296f11] py-8'>
            <Wrapper>
                <div className='flex gap-4'>
                    <div className='bg-white w-4/12 rounded-md'>
                        <SideProfile/>

                    </div>

                    <div className='flex flex-col gap-4  w-8/12'>
                        <div>
                        <h1 className='font-bold text-[1.5em] pb-4'>My Account</h1>
                            <MyAccount/>

                        </div>

                        <div>
                            <UploadResume/>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </div>
    )
}

export default Home