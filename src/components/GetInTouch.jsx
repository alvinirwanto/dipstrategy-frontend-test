import React from 'react'
import Button from './Button'

const GetInTouch = () => {
    return (
        <div className='px-[4.5rem] my-[3rem] bg-white grid grid-cols-2 gap-[5rem]'>
            <div>
                <h2 className='uppercase text-7xl py-8'>get in touch</h2>
                <p className='pb-9'>Looking to talk to us directly, or planning an office visit? As Digital Agency, Dipstrategy start by understanding your business need to comes up with any solutions. That's why it is important for us to hear your story. When it come to listening to your story, we are all ears.</p>
                <p>Gd. Titan lt.3, Jl. Slamet Riyadi no.7, Jakarta 13150 - Indonesia </p><br />
                <p className='text-3xl'>P. +62 21 858 3944</p>
                <p className='text-3xl uppercase'>info@dipstrategy.co.id</p><br />
                <div className='flex gap-4 mt-8 text-xs'>
                    <a className='uppercase cursor-pointer'>facebook</a>
                    <a className='uppercase cursor-pointer'>twitter</a>
                    <a className='uppercase cursor-pointer'>instagram</a>
                    <a className='uppercase cursor-pointer'>linkedin</a>
                </div>
            </div>
            <div className='bg-black flex flex-col gap-9 justify-between px-[3rem] py-[5rem]'>
                <input type="text" placeholder='NAME' className='border-b-[1px] border-[#ffffffbb] py-2 outline-none bg-transparent text-white' />
                <input type="text" placeholder='E-MAIL' className='border-b-[1px] border-[#ffffffbb] py-2 outline-none bg-transparent text-white' />
                <textarea rows='5' type="text" placeholder='MESSAGE' className='border-b-[1px] border-[#ffffffbb] py-2 outline-none bg-transparent text-white' />
                <div className='flex justify-start items-start'>
                    <Button>SUBMIT</Button>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch