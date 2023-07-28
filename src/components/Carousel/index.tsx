'use client';

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
  return (
    <Carousel slide={false} className='h-screen w-full'>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className='h-full w-full'>
          <img src="hamburguer1.jpg" alt="hamburguer" className='object-cover h-full w-full' />
        </div>
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className='h-full w-full'>
          <img src="hamburguer2.jpg" alt="hamburguer" className='object-cover h-full w-full' />
        </div>
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <div className='h-full w-full'>
          <img src="hamburguer3.jpg" alt="hamburguer" className='object-cover h-full w-full' />
        </div>
      </div>
    </Carousel>
  )
}


