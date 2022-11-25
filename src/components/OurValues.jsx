import React from 'react'

const OurValues = () => {
    return (
        <div name='ourvalue' className='bg-black text-white px-[4.5rem] flex flex-col gap-[3rem] py-[3rem]'>
            <h2 className='uppercase text-7xl py-8'>our values</h2>
            <div className='grid grid-cols-3 gap-[10rem]'>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl'>Transparency</h3>
                    <div className='p-9 border-2 border-gray-200 flex justify-center items-center'>
                        <img src="/transparency.svg" alt="" />
                    </div>
                    <p className='text-xl'>The goal of Wolven D.O.O. is to get as close as possible to the ideal of a ''glass company''.</p>
                    <p className='text-xl'>Our key to this is clear communication with our customers as well as the disclosure of our workflows and the permanent involvement of the customer in the creative processes.</p>
                </div>

                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl'>Accountability</h3>
                    <div className='p-9 border-2 border-gray-200 flex justify-center items-center'>
                        <img src="/accountability.svg" alt="" />
                    </div>
                    <p className='text-xl'>We are your competent partner for web development and everything that goes with it.</p>
                    <p className='text-xl'>That means we don't just make empty promises, but deliver measurable results as well as real added value.</p>
                </div>

                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl'>Dedication</h3>
                    <div className='p-9 border-2 border-gray-200 flex justify-center items-center'>
                        <img src="/dedication.svg" alt="" />
                    </div>
                    <p className='text-xl'>Just being good at something is one side. </p>
                    <p className='text-xl'>But for truly perfect results and content that
                        converts, it takes people who put their heart and soul into every project until you as our client and partner, are 100% satisfied.</p>
                </div>

            </div>
        </div>
    )
}

export default OurValues