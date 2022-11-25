import React from 'react'
import Button from '../Button'

const Utvi = () => {
    return (
        <div className='grid grid-cols-2 my-[3rem] mt-[5rem] gap-[5rem]'>
            <div className='flex justify-start items-start'>
                <img src="/utvi-pwa.png" alt="" />
            </div>
            <div className='flex flex-col gap-4 items-start justify-center'>
                <p className='text-[#B6B6B6] text-lg uppercase'>Custom App Development</p>
                <h3 className='text-4xl'>UTVI PWA</h3>
                <ol className='list-decimal ml-4'>
                    <li>
                        2021 App Award Winner for Best Maid App
                    </li>
                    <li>
                        DSC was reportedly acquired by Unilever for $1 billion
                    </li>
                    <li>
                        4.8 Google Play Reviews
                    </li>
                    <li>
                        4.8 App Store Reviews
                    </li>
                    <li>
                        97% of app users would recommend the DSC app to a friend
                    </li>
                </ol>
                <Button>CASE STUDY</Button>
            </div>
        </div>
    )
}

export default Utvi