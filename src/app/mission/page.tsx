

import Image from 'next/image'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OJP Technologies.Ltd Mission',
};

export default function MissionPage() {
    return(
        <main>
            <div className="bg-[#133f51] px-16 flex gap-10 py-20 mb-20">
                <Image src="/man.jpg" alt="man" width={500} height={100} />

                <div className='text-white'>
                    <h1 className="text-4xl mb-5">Our Mission</h1>
                    <p className='mb-5 text-lg'>Our mission is simple, but very dear to us: We aim to encourage individuals with limited tech exposure to pick up a digital skill. The OJP Tech quiz initiative is tailored for students, graduates, professionals from diverse fields, and anyone with a curiosity about digital skills.</p>
                    <p className='mb-5 text-lg'>Through this competition, we aim to:</p>
                    <p className='mb-5 text-lg'><span className='font-bold'>Ignite Interest in Technology -</span> By making learning attractive and interactive, we aim to disperse the fear and intimidation often associated with technology.</p>
                    <p className='mb-5 text-lg'><span className='font-bold'>Create Opportunities -</span> Winners will not only receive monetary prizes but will also acquire valuable insights into various tech career pathways.</p>
                    <p className='mb-20 text-lg'><span className='font-bold'>Foster a Community of Learners -</span> We are not just running a quiz competition; we are building a movement that encourages people to embrace digital skills and innovation.</p>

                    <div className='flex gap-5'>
                        <button className='bg-[#97b088] px-5 py-3 rounded'>REGISTER NOW!</button>
                        <button className='bg-white text-[#3084b8] py-3 px-5 rounded'>About Us</button>
                    </div>
                </div>
            </div>

            <div className='px-16 flex items-center gap-10 mb-26'>
                <div className='w-1/2'>
                    <Image src="/group.jpeg" alt="group" width={600} height={100} className='mb-5' />
                    <div className='flex gap-5'>
                        <Image src="/student.jpg" alt="student" width={290} height={100} />
                        <Image src="/child.jpeg" alt="child" width={290} height={100} />
                    </div>
                </div>

                <div className='w-1/2'>
                    <h1 className='font-bold text-3xl text-[#133f51] mb-5'>Partner With Us</h1>
                    <p className='mb-5 text-lg'>We’re not just encouraging tech curiosity—we’re actively reaching out to communities that need it the most. We've engaged with students and young people in remote regions, providing them with access to tech education and opportunities they might not otherwise have.</p>
                    <p className='mb-5 text-lg'>With the right support, we can increase the number of participants, offer bigger and better rewards. Provide more learning resources and create an even bigger impact.</p>
                    <p className='mb-10 text-lg'>We welcome sponsorships and donations from individuals, brands, and organizations who believe in the power of tech education</p>

                    <button className='bg-[#133f51] py-2 px-16 rounded-md text-white'>Support Us</button>
                </div>
            </div>
        </main>
    )
}