import React from 'react';
import Zuri from '../Assets/Vector.png';
import I4G from '../Assets/I4G.png';

function Footer() {
    return (
        <div className='w-11/12 mx-auto my-8 border-t-2 border-slate-200 pt-[3em]'>
            <div className='flex flex-col md:flex-row justify-between  gap-8'>
                <div>
                    <img src={Zuri} alt="" />

                </div>
                <p className='text-[#667085]'>HNG Internship 9 Frontend Task</p>
                <div>

                    <img src={I4G} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Footer