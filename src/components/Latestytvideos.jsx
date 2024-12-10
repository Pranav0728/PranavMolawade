import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icon for the clickable images

function Latestytvideo() {
  const saasProjects = [

  ];

  return (
    <div className="bg-black p-5 text-white rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Latest YouTube Videos</h1>
      {saasProjects.length > 0 ? (
        <div className="flex overflow-x-auto gap-5 scrollbar-hide">
          {saasProjects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[300px] h-[200px] relative" // Further increased dimensions
            >
              <Image
                src={project.imgUrl}
                alt={project.alt}
                width={600} // Increased width for better resolution
                height={400} // Increased height for better resolution
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
      ) : (
        <div className="flex items-center justify-center h-40">
          <p className="text-xl font-semibold text-gray-400">Coming Soon...</p>
        </div>
      )}
    </div>
  );
}

export default Latestytvideo;
