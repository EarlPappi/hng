import React from 'react'

function Link({ link }) {
  return (
    <a href={ link.url } id={ link.id } title={ link.subtext } className='block bg-[#EAECF0] font-medium my-4 py-5 text-center w-11/12 mx-auto rounded-md hover:bg-slate-500'>
                { link.linkName }
        </a>
  )
}

export default Link