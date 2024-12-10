import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icon for the clickable images

function Mysaasproduct() {
  // Array of SaaS project data
  const saasProjects = [
    { id: 1, imgUrl: '/Assets/Avatar.png', alt: 'SaaS Project 1', link: 'https://google.com' },
    { id: 2, imgUrl: '/Assets/Avatar.png', alt: 'SaaS Project 2', link: 'https://google.com' },
  ];

  return (
    <div className="bg-black h-[100%] p-5 text-white rounded-xl">
      <h1 className="text-2xl font-bold mb-4">My SaaS Product</h1>

      <div className="flex flex-col justify-center gap-5">
      {saasProjects.slice(0, 2).map((project) => (
          <div key={project.id} className="relative w-full h-[250px]"> {/* Container with desired height */}
            <Image
              src={project.imgUrl}
              alt={project.alt}
              width={300}  
              height={200} 
              className="object-cover rounded-xl cursor-pointer w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Link href={project.link} target="_blank">
                <FaExternalLinkAlt className="text-white text-3xl" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mysaasproduct;
