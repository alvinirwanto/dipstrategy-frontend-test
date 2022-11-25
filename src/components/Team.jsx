import React from 'react'
import Button from './Button'

import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Team = () => {
    return (
        <>
            <div className='flex justify-between px-[4.5rem] items-center mt-[-8rem]'>
                <h2 className='uppercase text-7xl text-white py-8'>Our magic team</h2>
                <Button>SEE MORE</Button>
            </div>
            <div className='flex flex-col gap-6 max-w-[1000px] px-[4.5rem]'>
                <p>Wolven D.O.O. is a small digital agency based in Serbia. Founder Dave McGowan decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen. </p>

                <p>In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities
                    and therefore knows what matters</p>
            </div>

            <div className='flex justify-between px-[4.5rem] items-start gap-[3rem] mt-[3rem] mb-[5rem]'>

                <div className=''>
                    <img src="/member-1.png" alt="" />
                    <div className='bg-[#FFFE55] p-4 flex flex-col gap-2'>
                        <p className="uppercase font-semibold text-xl">sam flex</p>
                        <p className='text-sm'>Director</p>
                        <div className='flex gap-4'>
                            <FaLinkedinIn />
                            <FaFacebookF />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src="/member-2.png" alt="" className='' />
                    <div className='bg-[#FFFE55] p-4 flex flex-col gap-2 z-[10] -mt-3'>
                        <p className="uppercase font-semibold text-xl">kate larson</p>
                        <p className='text-sm'>Manager</p>
                        <div className='flex gap-4'>
                            <FaLinkedinIn />
                            <FaFacebookF />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src="/member-3.png" alt="" />
                    <div className='bg-[#FFFE55] p-4 flex items-end justify-between gap-2'>
                        <div className='flex gap-2 items-end'>
                            <p className="uppercase font-semibold text-xl">bobby fish</p>
                            <p className='text-sm'>Designer</p>
                        </div>
                        <div className='flex gap-4'>
                            <FaLinkedinIn />
                            <FaFacebookF />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img src="/member-4.png" alt="" />
                    <div className='bg-[#FFFE55] p-4 flex flex-col gap-2'>
                        <p className="uppercase font-semibold text-xl">amanda james</p>
                        <p className='text-sm pb-[3rem]'>Programmer</p>
                        <div className='flex gap-4'>
                            <FaLinkedinIn />
                            <FaFacebookF />
                            <FaTwitter />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Team