import React from 'react'

const Button = ({ children, link }) => {
    return (
        <button href={link} className='flex justify-between cursor-pointer gap-8 items-center px-6 py-3 text-black bg-[#FFFE55]'>
            <p className='text-xs font-semibold'>{children}</p>
            <img src="/arrow-black.svg" alt="" className='h-4 w-4' />
        </button>
    )
}

export default Button