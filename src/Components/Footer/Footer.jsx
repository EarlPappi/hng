import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../Wrapper/Wrapper'
import FooterNav from './FooterNav'

function Footer() {
  return (
    <div>
      <FooterNav/>

      <footer className='bg-[#F2F2F7] py-4 mt-8'>
        <Wrapper>
          <nav className='flex justify-between'>
            <Link to='/' className='text-[#6D6D6D]'>&#169; 2022 Cover. All rights reserved.</Link>
            <Link to='/' className='text-[#6D6D6D]'>Terms and Conditions</Link>
            <Link to='/' className='text-[#6D6D6D]'>Privacy Policy</Link>
          </nav>

        </Wrapper>
      </footer>

    </div>
  )
}

export default Footer