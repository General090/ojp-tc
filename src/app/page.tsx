'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex mb-20">
        <div className="w-1/2 bg-[#133f51] text-white px-12 py-10 flex flex-col justify-center">
          <p className="mb-4 text-lg">Are you passionate about learning a new digital skill? Welcome To -</p>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            OJP Tech Quiz Competition<br />Cohort 1.0
          </h1>
          <p className="mb-10">
            Explore the world of technology in a fun and engaging way! The OJP Tech Quiz Competition is designed exclusively for individuals with little to no technology background who are eager to start their journey into tech. Participate for a chance to win exciting prizes.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#97b088] text-white font-semibold py-3 px-6 rounded">
              REGISTER NOW!
            </button>

            <Link href="/mission">
              <button className="bg-white text-[#133f51] py-3 px-6 rounded cursor-pointer">
                Our Mission
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 relative">
          <Image
            src="/Girl.jpg"
            alt="girl"
            layout="fill"
            objectFit="cover"
            className="brightness-60"
          />
        </div>
      </div>

      <div className=' mb-25'>
        <div className="w-26 h-2 bg-[#97b088] ml-16"></div>
        <h1 className='ml-16 pt-5 font-bold text-3xl pb-14'>Why Participate? (Benefits)</h1>
        
        <div className="flex items-center px-40 gap-20">
          <div>
            <Image src="/Cash.png" alt="cash" width={70} height={80} className='mb-3 mx-auto'/>
            <h2 className='font-bold text-center pb-2'>Win cash prizes</h2>
            <p className='text-center text-sm'>₦1,000,000 total prize pool with ₦250,000 for the top winner!</p>
          </div>

          <div>
            <Image src="/Trophy.png" alt="trophy" width={70} height={80} className='mb-3 mx-auto'/>
            <h2 className='font-bold text-center pb-2'>10 Winners Selected</h2>
            <p className='text-center text-sm'>More chances to win and get rewarded for learning!</p>
          </div>

          <div>
            <Image src="/Start.png" alt="cash" width={70} height={80} className='mb-3 mx-auto'/>
            <h2 className='font-bold text-center pb-2'>Kickstart Your Journey</h2>
            <p className='text-center text-sm'>Exposure to introductory tech knowledge & opportunities!</p>
          </div>

          <div>
            <Image src="/Beginner.png" alt="cash" width={70} height={80} className='mb-3 mx-auto'/>
            <h2 className='font-bold text-center pb-2'>Beginner Friendly</h2>
            <p className='text-center text-sm'>No experience needed! Just bring your passion and curiosity!!</p>
          </div>
        </div>
      </div>

      <div className='flex bg-[#133f51] pl-16 py-14 gap-10 pr-26 mb-20'>
        <Image src="/some.jpeg" alt="some" width={270} height={5} className='rounded-md' />

        <div className='text-white pt-5'>
          <h1 className='text-3xl font-bold pb-5'>How To Register</h1>
          <p className='text-lg pb-5'>Simply take our short eligibility quiz to confirm if you qualify! The competition is designed for beginners. If you're eligible, proceed to the registration form.</p>
          <p className='text-lg pb-10'>After successful registration, you'll receive a confirmation email with further details on how to participate.</p>
          <button className="bg-[#97b088] py-3 px-6 rounded">Get Started!</button>
        </div>
      </div>

      <div className='flex items-center gap-40 px-16 mb-26'>
        <div className="w-[60%]">
          <h1 className='font-bold text-4xl mb-5'>Registration Ends Soon</h1>
          <p className="text-lg mb-5">Spots are VERY limited, and once we hit our maximum number, registration closes! Dont miss this chance to win cash prizes and kickstart your tech journey.</p>
          <p className="text-lg">We plan to expand in the future, but for now, only a few can participate. Registration closes on the 30th of March, 2025. Secure your spot now!</p>
        </div>

        <div className='w-[30%]'>
          <h1 className='font-bold text-3xl mb-5 text-center'>400 Slot Left</h1>
          <button className='bg-[#133f51] w-[100%] py-2 text-white rounded-md'>Register Now!</button>
        </div>
      </div>
    </main>
  );
}
