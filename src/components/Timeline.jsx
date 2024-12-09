import React from 'react';
import Image from 'next/image';

function Timeline() {
  const timelineData = [
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Aidbase',
      description: 'Launched Aidbase',
      date: 'November 2023',
    },
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Product 2',
      description: 'Launched Product 2',
      date: 'December 2023',
    },
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Product 3',
      description: 'Launched Product 3',
      date: 'January 2024',
    },
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Product 3',
      description: 'Launched Product 3',
      date: 'January 2024',
    },
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Product 3',
      description: 'Launched Product 3',
      date: 'January 2024',
    },
    {
      logo: '/Assets/logo.png', // Replace with the correct logo path
      title: 'Product 3',
      description: 'Launched Product 3',
      date: 'January 2024',
    },
    // Add more products here
  ];

  return (
    <div className="text-white bg-black p-6 rounded-xl w-full mx-auto max-h-[50%]">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>
      <div className="h-[85%] overflow-y-auto space-y-3 ">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2  rounded-lg shadow-md"
          >
              <Image
                src={item.logo}
                alt={item.title}
                width={30}
                height={30}
                className="rounded-full"
              />
            <div className='flex justify-between w-full'>
            <div className='flex flex-col justify-center '>
              <h2 className="text-md text-gray-400 font-semibold">{item.title}</h2>
              <p className="text-gray-600 font-bold text-sm">{item.description}</p>
            </div>
              <span className="text-gray-400 text-sm font-bold">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
