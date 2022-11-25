import React from 'react'
import Button from './Button'

const Workflow = () => {
    return (
        <div name='workflow' className='bg-white px-[4.5rem] py-[5rem]'>
            <h2 className='text-7xl'>WORKFLOW</h2>
            <div className='grid grid-cols-[5fr_6fr] gap-[5rem] my-9'>
                <div>
                    <p>It is particularly important for us that you as a customer are actively involved in creative processes and that you know at all times which step we are about to take next. Learn more about our workflow and our communication with you as a customer here.</p>
                    <img src="/team-planning.png" alt="team" className='ml-[-4.5rem]' />
                </div>

                <div className='grid grid-cols-[6fr_1fr]'>
                    <div>
                        <h3 className='uppercase font-bold text-xl'>How we deal with projects from start to finish</h3><br />
                        <p>The key to successful collaboration and results that are perfectly tailored to you is clear goal setting and the elimination of misunderstandings.</p><br />
                        <p>Before each project, we therefore obtain detailed information from you about what you expect from our service, what your goals are and what you particularly value. Our experts will also be happy to advise you on this step with their extensive specialist knowledge.</p><br /><br />
                        <p>As soon as your expectations have been clarified, we get down to work. We actively involve you, the customer, in the processes so that you always know where your project currently stands.</p><br />

                        <Button>LEARN MORE</Button> <br />

                        <p className='uppercase underline text-xl my-[3rem]'>How we communicate with the client</p>
                        <p className='uppercase underline text-xl my-[3rem]'>Stages of the process</p>
                    </div>
                    <div className='flex justify-end'>
                        <img src="/arrow-black.svg" className='h-5 w-5 my-2' alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Workflow