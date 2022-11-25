import React from 'react'
import Button from '../Button'

const BasfWeb = () => {
    return (
        <div className='grid grid-cols-[3fr_5fr] my-[3rem] mt-[5rem]'>
            <div className='flex flex-col gap-4 items-start'>
                <p className='text-[#B6B6B6] text-lg uppercase'>DESIGN UI/UX</p>
                <h3 className='text-4xl'>BASF WEB DESIGN</h3>
                <ol className='list-decimal ml-4'>
                    <li>
                        2017 Webby Award Winner for Best Shopping App
                    </li>
                    <li>
                        DSC was reportedly acquired by Unilever for $1 billion
                    </li>
                    <li>
                        4.8 Google Play Reviews
                    </li>
                    <li>
                        97% of app users would recommend the DSC app to a friend
                    </li>
                </ol>
                <Button>CASE STUDY</Button>
            </div>

            <div>
                <img src="/basf-web.png" alt="" />
            </div>
        </div>
    )
}

export default BasfWeb