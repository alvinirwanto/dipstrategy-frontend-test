import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const HeroSection = () => {
    return (
        <div name='home'>
            <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper">
                <SwiperSlide className='w-full h-[120vh] bg-black text-white'>
                    <img src="/bg-slider-1.png" alt="slide-1" className='object-cover h-screen' />
                    <div className='flex justify-between gap-9 px-[4.5rem] mt-[-9.5rem]'>
                        <h1 className='font-gujarati text-[5.5rem] leading-[5.5rem] text-black'>WE ASSIST YOU IN SOLVING TOMORROW'S <br /><span className='text-white'>PROBLEMS TODAY</span> </h1>

                        <div className='flex justify-center items-end gap-2 mb-[9rem] px-[3rem]'>
                            <p className='text-light text-black w-[9rem]'>ABOUT US</p>
                            <img src="/arrow-black.svg" alt="" className='w-[4rem] h-[4rem]' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='w-full h-[120vh] bg-black text-white'>
                    <img src="/bg-slider-2.png" alt="slide-1" className='object-cover h-screen' />
                    <div className='flex justify-between gap-9 px-[4.5rem] mt-[-9.5rem]'>
                        <h1 className='font-gujarati text-[5.5rem] leading-[5.5rem] text-black'>CREATING HIGH PERFORMANCE <br /> <span className='text-white'>DIGITAL ASSET</span> </h1>

                        <div className='flex justify-center items-end gap-2 mb-[9rem] px-[3rem]'>
                            <p className='text-light text-black w-[9rem]'>ABOUT US</p>
                            <img src="/arrow-black.svg" alt="" className='w-[4rem] h-[4rem]' />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HeroSection