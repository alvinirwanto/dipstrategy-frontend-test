import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('home')

    const [colorNav, setColorNav] = useState(false)

    const addColorNav = () => {
        window.scrollY >= 60 ? setColorNav(true) : setColorNav(false)
    }

    window.addEventListener('scroll', addColorNav)

    return (
        <div className={
            colorNav ? 'fixed z-[100] bg-black duration-300 flex justify-between items-center w-full px-[4.5rem] py-6'
                : 'fixed z-[100] bg-transparent flex justify-between items-center w-full px-[4.5rem] py-6'
        }>
            <img src="/logo.svg" alt="logo" className='h-[4.5rem] w-auto' />
            <div className='flex items-center justify-center gap-[3rem]'>
                <ul className='uppercase flex items-end tracking-wider gap-8 text-white font-thin text-[12px] font-gujarati'>

                    <Link to='home' smooth={true}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('home')}>
                            <p className={activeNav === 'home' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>Home</p>
                            <div className={activeNav === 'home' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                    <Link to='service' smooth={true}  offset={-100}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('services')}>
                            <p className={activeNav === 'services' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>Services</p>
                            <div className={activeNav === 'services' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                    <Link to='workflow' smooth={true} offset={-100}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('workflow')}>
                            <p className={activeNav === 'workflow' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>Work Flow</p>
                            <div className={activeNav === 'workflow' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                    <Link to='portfolio' smooth={true} offset={-200}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('portfolio')}>
                            <p className={activeNav === 'portfolio' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>portfolio</p>
                            <div className={activeNav === 'portfolio' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                    <Link to='about' smooth={true} offset={-150}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('about')}>
                            <p className={activeNav === 'about' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>about us</p>
                            <div className={activeNav === 'about' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                    <Link to='ourvalue' smooth={true} offset={-100}>
                        <li className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => setActiveNav('ourvalue')}>
                            <p className={activeNav === 'ourvalue' ? 'font-semibold text-[#FFFE55] pt-[5.5px]' : 'font-medium text-white pt-[5.5px]'}>our value</p>
                            <div className={activeNav === 'ourvalue' ? 'hidden h-1 w-1 rounded-full ' : 'h-1 w-1 rounded-full bg-white'}></div>
                        </li>
                    </Link>

                </ul>

                <div className='text-xl font-lato'>
                    <p className={colorNav ? 'text-white' : 'text-black'}>+62 21 858 3944</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar