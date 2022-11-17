import React from 'react'
import { BookIcon } from '../../../Icons.js'

function SideActivity() {
  return (
    <div>
        <h1 className='font-bold text-[1.5em] border-b pb-4'>Activity</h1>

        <div className='my-4 pb-8'>
            <p className='flex gap-4 items-center justify-center border border-[#CAD0DD] py-3 my-4 rounded-md'>
                <span><BookIcon/></span>
                <span className='font-bold'>Cover Letter History</span>
            </p>
            
            <p className='flex gap-4 items-center justify-center border border-[#CAD0DD] py-3 my-4 rounded-md'>
                <span><BookIcon/></span>
                <span className='font-bold'>Resume Uploaded</span>
            </p>

        </div>
    </div>
  )
}

export default SideActivity