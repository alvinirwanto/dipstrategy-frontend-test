import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <footer className='bg-[#FFFE55] h-full px-[4.5rem] py-8'>

            <div className='grid grid-cols-[1fr_9fr]'>
                <div className='bg-black p-4 scale-[170%] -rotate-90 self-end mb-[10rem]'>
                    <img src="/logo.svg" alt="" />
                </div>

                <div>
                    <div className="grid grid-cols-[1fr_1fr_1fr_1.5fr]">
                        <p className='text-2xl font-semibold -rotate-90 self-center'>P. +62 21 858 3944</p>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-lg pb-2'>Quick Links</p>
                            <p className='uppercase'>Services</p>
                            <p className='uppercase'>Work Flow</p>
                            <p className='uppercase'>Portfolio</p>
                            <p className='uppercase'>About Us</p>
                            <p className='uppercase'>Our Value</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold text-lg pb-2'>Follow</p>
                            <p className='text-lg font-semibold'>facebook</p>
                            <p className='text-lg font-semibold'>twitter</p>
                            <p className='text-lg font-semibold'>instagram</p>
                            <p className='text-lg font-semibold'>linkedin</p>
                        </div>
                        <div className='flex items-start gap-6'>
                            <div className='flex flex-col gap-[3rem]'>
                                <p className='font-semibold'>Sign up to our newsletter</p>
                                <input type="text" placeholder='E-MAIL' className='border-b-[1px] border-black py-2 outline-none bg-transparent text-black w-full' />
                                <p>This site is protected by reCAPTHCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service apply</span>.</p>
                            </div>
                            <img src="/arrow-black.svg" alt="" className='w-[4rem] h-[4rem] mt-[3rem]' />
                        </div>
                    </div>

                    <div className='ml-[7rem]'>
                        <div className='border-[.5px] w-full bg-black border-black mt-[5rem]'></div>


                        <div className='flex justify-between py-8'>
                            <p>Copyright 2022 Digital Presence Strategy - Dipstrategy - Digital Agency Jakarta</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer