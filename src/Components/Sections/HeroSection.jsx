import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import heroImg from '../../Asset/heroImg.png'

function HeroSection() {
    return (
        <div>
            <Wrapper>
                <section className='flex flex-col-reverse md:flex-row  gap-12 items-center my-12'>
                    <div className='flex flex-col w-full md:w-3/5 gap-8'>
                        <h1 className='md:w-11/12 text-[1.8em]  md:text-left md:text-[3.5em] leading-[120%]'>Rent a <span className='font-bold text-[#A02279]'>Place</span> away from <span className='font-bold text-[#A02279]'>Home</span> in the <span className='font-bold text-[#A02279]'>Metaverse</span></h1>
                        
                        <h2 className='md:w-10/12 text-[1em] md:text-[1.5em]'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</h2>

                        <div className='flex'>
                            <input type="search" placeholder='Search for location'  className='w-4/5 md:w-2/5 border p-3 md:p-4 rounded-tl-lg rounded-bl-lg'/>
                            <button className='w-1/5 bg-[#A02279] py-4 text-white rounded-tr-lg rounded-br-lg'>Search</button>
                        </div>
                    </div>


                    <div className='w-full md:w-2/5 '>
                        <img src={heroImg} alt="" className='w-full'/>

                    </div>
                </section>
            </Wrapper>
        </div>
    )
}

export default HeroSection