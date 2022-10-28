import React from 'react'

function Link({ link }) {
  return (
    <a href={ link.url } id={ link.id } className='block bg-[#EAECF0] my-4 p-3 text-center w-11/12 mx-auto rounded-md hover:bg-slate-500'>
        <span className='block font-bold'>{ link.linkName }</span>
        <span className='block'>{ link.subtext }</span>
        </a>
  )
}

export default Link