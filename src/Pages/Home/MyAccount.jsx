import React from 'react'
import { ChatIcon, UserProfile, LockIcon } from '../../Icons'

const ChatIcons = <ChatIcon />;
const UserProfiles = <UserProfile />


function MyAccount() {
    const AccountTabs = [
        {
            img: UserProfiles,
            mainText: '24578635',
            subText: 'Account ID'
        },
        {
            img: UserProfiles,
            mainText: 'Kanyinola Bisola',
            subText: 'Full Name'
        },
        {
            img: ChatIcons,
            mainText: 'bisolakanyinola@gmail.com',
            subText: 'Email Address'
        }

    ]

    return (
        <div className='p-4 bg-white'>
            <h1 className='font-bold text-[1.5em] pb-2'>Profile</h1>

            <div>
                {AccountTabs.map((tab) => {
                    return (
                        <div className='flex gap-4 my-8 border-t pt-8 items-center'>
                            <div>
                                {tab.img}

                            </div>

                            <div className='flex gap-4 flex-col'>
                                <p className='font-bold text-[1.2em]'>{tab.mainText}</p>
                                <p>{tab.subText}</p>
                            </div>
                        </div>
                    )
                })}

                <div className='flex gap-4 my-8 border-t pt-8 items-center'>
                    <div className='flex gap-4 '>

                        <div>
                            <LockIcon />

                        </div>

                        <div>
                            <p className='font-bold text-[1.2em]'>***************</p>
                            <p>Password</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default MyAccount