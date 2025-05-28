'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex mb-20">
        <div className="w-1/2 bg-teal-900 text-white px-12 py-10 flex flex-col justify-center">
          <p className="mb-4 text-lg">Are you passionate about learning a new digital skill? Welcome To -</p>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            OJP Tech Quiz Competition<br />Cohort 1.0
          </h1>
          <p className="mb-10">
            Explore the world of technology in a fun and engaging way! The OJP Tech Quiz Competition is designed exclusively for individuals with little to no technology background who are eager to start their journey into tech. Participate for a chance to win exciting prizes.
          </p>
          <div className="flex gap-4">
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded">
              REGISTER NOW!
            </button>
            <button className="bg-white hover:bg-gray-100 text-teal-900 font-semibold py-3 px-6 rounded">
              Our Mission
            </button>
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

      <div className=' mb-20'>
        <div className="w-26 h-2 bg-green-500 ml-16"></div>
        <h1 className='ml-16 pt-5 font-bold text-3xl pb-14'>Why Participate? (Benefits)</h1>
        
        <div className="flex px-40 gap-10">
          <div>
            <Image src="/Cash.png" alt="cash" width={100} height={100} className='mb-4'/>
            <h2 className='font-bold text-center pb-5'>Win cash prizes</h2>
            <p className='text-center'>₦1,000,000 total prize pool with ₦250,000 for the top winner!</p>
          </div>

          <div>
            <Image src="/Cash.png" alt="cash" width={100} height={100} />
            <h2>Win cash prizes</h2>
            <p>₦1,000,000 total prize pool with ₦250,000 for the top winner!</p>
          </div>

          <div>
            <Image src="/Cash.png" alt="cash" width={100} height={100} />
            <h2>Win cash prizes</h2>
            <p>₦1,000,000 total prize pool with ₦250,000 for the top winner!</p>
          </div>

          <div>
            <Image src="/Cash.png" alt="cash" width={100} height={100} />
            <h2>Win cash prizes</h2>
            <p>₦1,000,000 total prize pool with ₦250,000 for the top winner!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
