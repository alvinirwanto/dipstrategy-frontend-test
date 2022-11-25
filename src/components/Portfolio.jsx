import React from 'react'
import BasfWeb from './PortfolioItem/BasfWeb'
import HanaBank from './PortfolioItem/HanaBank'
import OpenFashion from './PortfolioItem/OpenFashion'
import Utvi from './PortfolioItem/Utvi'

const Portfolio = () => {
    return (
        <div name='portfolio' className='bg-white px-[4.5rem]'>
            <div className='grid grid-cols-[5fr_4fr_1fr] gap-6 items-center my-[3rem]'>
                <h2 className='text-7xl'>PORTFOLIO</h2>
                <p>Take a look at our most successful projects and see for yourself our skills and the results that speak for themselves.</p>
                <div className='flex justify-center items-center gap-4'>
                    <img src="/arrow-left.svg" alt="" />
                    <img src="/arrow-right.svg" alt="" />
                </div>
            </div>

            <HanaBank />
            <Utvi />
            <BasfWeb />
            <OpenFashion/>
        </div>
    )
}

export default Portfolio