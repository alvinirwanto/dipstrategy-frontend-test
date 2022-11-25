import React, { useState } from 'react'
import Button from './Button'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Services = () => {
    const [showAnswer, setShowAnswer] = useState(0)

    return (
        <div name='service' className='px-[4.5rem] bg-black text-white py-[5rem]'>
            <div className='grid grid-cols-[4fr_4fr_2fr] font-gujarati'>
                <h2 className='text-7xl pt-3'>OUR SERVICES</h2>

                <p className='text-xl'>We’ve worked with a wide array of clients across the globe to apply design fundamentals of elegance, simplicity</p>

                <div className='flex items-start justify-end'>
                    <div className='flex gap-3 items-end'>
                        <p className='text-sm'>VIEW ALL</p>
                        <img src="/arrow-white.svg" alt="" className='w-[4rem] h-[4rem]' />
                    </div>
                </div>

            </div>

            <div className='mt-[5rem]'>

                <div>
                    <div
                        onClick={() => setShowAnswer(1)}
                        className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                        <h3 className='uppercase'>
                            E-Commerce Development
                        </h3>
                        <div className='flex justify-start items-start gap-6'>
                            <p>You want to get the best out of your business and turn mere visitors into paying customers? Sell your products on a secure platform and not worry about the technical details? We will help you implement your E-Commerce platform.</p>
                            <div className='flex items-center justify-end w-full gap-6'>
                                <div className={showAnswer === 1 ? 'invisible' : 'visible'}>
                                    <Button>LEARN MORE</Button>
                                </div>
                                {
                                    showAnswer === 1 ?
                                        <AiOutlineMinus className='text-white text-4xl' />
                                        :
                                        <AiOutlinePlus className='text-white text-4xl' />
                                }
                            </div>
                        </div>
                    </div>

                    <div className={showAnswer === 1 ? 'grid grid-cols-[3.5fr_5fr]' : 'hidden'}>
                        <img src="/custom-app-dev.png" className='object-cover pr-9 h-[25rem] w-auto' alt="" />
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-6'>
                                <img src="/design-wireframe.png" alt="" className='h-[16rem] w-auto' />
                                <img src="/programming.png" alt="" className='h-[16rem] w-auto' />
                            </div>
                            <div className='flex justify-start items-center gap-6'>
                                <p>In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.</p>
                                <div className='flex items-center w-full gap-6'>
                                    <Button>LEARN MORE</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div
                        onClick={() => setShowAnswer(2)}
                        className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                        <h3 className='uppercase'>
                            Custom App Development
                        </h3>
                        <div className='flex justify-start items-start gap-6'>
                            <p>It's time to turn your vision into a high-performing and responsive app. This is how your customers will interact with your business, which is why we pay attention to every detail.</p>
                            <div className='flex items-center justify-end w-full gap-6'>
                                <div className={showAnswer === 2 ? 'invisible' : 'visible'}>
                                    <Button>LEARN MORE</Button>
                                </div>
                                {
                                    showAnswer === 2 ?
                                        <AiOutlineMinus className='text-white text-4xl' />
                                        :
                                        <AiOutlinePlus className='text-white text-4xl' />
                                }
                            </div>
                        </div>
                    </div>

                    <div className={showAnswer === 2 ? 'grid grid-cols-[3.5fr_5fr]' : 'hidden'}>
                        <img src="/custom-app-dev.png" className='object-cover pr-9 h-[25rem] w-auto' alt="" />
                        <div className='flex flex-col gap-8'>
                            <div className='flex gap-6'>
                                <img src="/design-wireframe.png" alt="" className='h-[16rem] w-auto' />
                                <img src="/programming.png" alt="" className='h-[16rem] w-auto' />
                            </div>
                            <div className='flex justify-start items-center gap-6'>
                                <p>In the design process, they create both functional and beautiful things. The team possesses unique individuality and strong qualifications and can easily translate something so abstract and visionary into a digital experience. They always put the clients first no matter how complicated the tasks are.</p>
                                <div className='flex items-center w-full gap-6'>
                                    <Button>LEARN MORE</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                    <h3 className='uppercase'>
                        Integration With 3rd Party Web Services
                    </h3>
                    <div className='flex justify-start items-start gap-6'>
                        <p>We use all opportunities to solve business problems. Our intelligent digital strategy and a pragmatic and thoughtful approach to solving business calls deliver a successful framework for both you and your audience.</p>
                        <div className='flex items-center justify-end w-full gap-6'>
                            <Button>LEARN MORE</Button>

                            <AiOutlinePlus className='text-white text-4xl' />

                        </div>
                    </div>
                </div>

                <div
                    className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                    <h3 className='uppercase'>
                        Hosting/Maintenance
                    </h3>
                    <div className='flex justify-start items-start gap-6'>
                        <p>Our hosting services are designed to give you the highest level of security with respect to your website's performance. We exclusively use safe and modern servers, which minimizes the risk of any single point of failure. This includes a minimized risk of hacks or other malicious activities.</p>
                        <div className='flex items-center justify-end w-full gap-6'>
                            <Button>LEARN MORE</Button>

                            <AiOutlinePlus className='text-white text-4xl' />

                        </div>
                    </div>
                </div>

                <div
                    className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                    <h3 className='uppercase'>
                        Design UX/UI
                    </h3>
                    <div className='flex justify-start items-start gap-6'>
                        <p>Although it might seem merely superficial, the user experience might be the most crucial part of your online presence. When viewers are confronted with long loading times, cramped landing pages or an otherwise infuriating design, they will leave quicker than they came.</p>
                        <div className='flex items-center justify-end w-full gap-6'>
                            <Button>LEARN MORE</Button>

                            <AiOutlinePlus className='text-white text-4xl' />

                        </div>
                    </div>
                </div>

                <div
                    className='grid grid-cols-[3.5fr_5fr] border-t-[1px] border-white py-6 my-6 cursor-pointer'>
                    <h3 className='uppercase'>
                        SEO Services
                    </h3>
                    <div className='flex justify-start items-start gap-6'>
                        <p>A well-thought-out SEO strategy can boost your growth, and in turn sales, without an expensive PPC-campaign. There are multiple ways we can help you with this.</p>
                        <div className='flex items-center justify-end w-full gap-6'>
                            <Button>LEARN MORE</Button>

                            <AiOutlinePlus className='text-white text-4xl' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services