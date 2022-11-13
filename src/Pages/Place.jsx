import React from 'react'
import Wrapper from '../Components/TinyComp/Wrapper'

import frame1 from '../Asset/frame1.png'
import frame2 from '../Asset/frame2.png'
import frame3 from '../Asset/frame3.png'
import frame4 from '../Asset/frame4.png'
import frame5 from '../Asset/frame5.png'
import frame6 from '../Asset/frame6.png'
import frame7 from '../Asset/frame7.png'
import frame8 from '../Asset/frame8.png'
import frame9 from '../Asset/frame9.png'
import frame10 from '../Asset/frame10.png'
import frame11 from '../Asset/frame11.png'
import frame12 from '../Asset/frame12.png'
import frame13 from '../Asset/frame13.png'
import frame14 from '../Asset/frame14.png'
import frame15 from '../Asset/frame15.png'
import frame16 from '../Asset/frame16.png'
import Card from '../Components/Sections/Card'
import { SettingsIcon } from '../Icons'

function Place() {
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
    },
    {
      img: frame9,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame10,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame11,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame12,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame13,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame14,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame15,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
    {
      img: frame16,
      title: 'Desert King',
      cost: '1MBT Per Night',
      distance: '2345km away',
      time: 'availabe for 2 weeks stay'
    },
  ]



  return (
    <div>
      <Wrapper>
        <div>
          <div className='flex justify-between flex-wrap gap-4 my-4 mt-12'>
            <button>Restaurant</button>
            <button>Cottage</button>
            <button>Castle</button>
            <button>Fantast City</button>
            <button>Beach</button>
            <button>Cabins</button>
            <button>Off-Grid</button>
            <button>Farm</button>
            <button className='flex gap-4 border px-4 py-2 rounded-lg'>
              <span>Location</span>
              <span><SettingsIcon /></span>
            </button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-4 gap-2 my-8 justify-between'>
            {cardCollection.map((collection) => {
              return (
                <div key={collection.img} className=''>
                  <Card collection={collection} />
                </div>
              )
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Place