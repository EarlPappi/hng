import React from 'react'

function Link({ link }) {
  return (
    <a href={ link.url } id={ link.id } title={ link.subtext } className='block bg-[#EAECF0] my-4 p-3 text-center w-11/12 mx-auto rounded-md hover:bg-slate-500'>
        <span className='block font-medium'>{ link.linkName }</span>
        </a>
  )
}

export default Link