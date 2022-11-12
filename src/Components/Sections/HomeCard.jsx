import React from 'react'
import Wrapper from '../TinyComp/Wrapper'
import frame1 from '../../Asset/frame1.png'
import frame2 from '../../Asset/frame2.png'
import frame3 from '../../Asset/frame3.png'
import frame4 from '../../Asset/frame4.png'
import frame5 from '../../Asset/frame5.png'
import frame6 from '../../Asset/frame6.png'
import frame7 from '../../Asset/frame7.png'
import frame8 from '../../Asset/frame8.png'
import Card from './Card'

function HomeCard() {
    const cardCollection = [
        {
            img: frame1,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame2,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame3,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame4,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame5,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame6,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame7,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        },
        {
            img: frame8,
            title: 'Desert King',
            cost: '1MBT Per Night',
            distance: '2345km away',
            time: 'availabe for 2 weeks stay'
        }
    ]


  return (
    <div>
        <Wrapper>
            <div>
            <h1 className='text-center font-bold text-[2.5em] text-black leading-[120%] mb-4 '>Inspiration for your next adventure</h1>
            </div>

            <div className='flex flex-wrap gap-2 my-8 justify-between'>
                { cardCollection.map((collection)=>{
                    return(
                        <div key={collection.img} className=''>
                            <Card collection={ collection }/>
                        </div>
                    )
                }) }
            </div>
        </Wrapper>
    </div>
  )
}

export default HomeCard