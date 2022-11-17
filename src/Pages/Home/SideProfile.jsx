import React from 'react'
import SideActivity from './SideProfile/SideActivity'
import SideHeader from './SideProfile/SideHeader'

function SideProfile() {
    return (
        <div className='p-4'>
            <SideHeader />

            <div className='pt-28'>
                <SideActivity/>
            </div>
        </div>
    )
}

export default SideProfile