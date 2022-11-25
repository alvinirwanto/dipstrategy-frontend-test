import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <div name='about'>
            <h2 className='uppercase text-7xl px-[4.5rem] py-8'>About us</h2>
            <div className='px-[4.5rem] py-8 grid grid-cols-2 gap-[5rem] bg-black text-white pb-[15rem]'>
                <div className='flex flex-col gap-8 items-start'>
                    <p>Hardianto is a name of person work in =digital agency based in Jakarta. Founder Novi Hardianto decided to go into business for himself, using his vast experience in software engineering and numerous ancillary fields to help people perfect their web presence and get seen.</p>
                    <p>In setting up the company, he was able to rely on his vast experience from previous entrepreneurial activities and therefore knows what matters</p>
                    <Button>SEE MORE</Button>
                </div>
                <div className='mt-[-8rem]'>
                    <img src="/dips-video.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default About