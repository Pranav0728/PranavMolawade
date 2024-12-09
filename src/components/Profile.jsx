import React from 'react'
import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

function Profile() {
  return (
    <div className=' bg-black p-6 rounded-xl pb-20'>
      <Image alt="profile"
        src="/Assets/Avatar.png"
        width={1000}
        height={800}
        layout="fixed"
        className='rounded-lg'
        />
        <div className="text-white">
          <h1 className='py-2 text-2xl font-bold'>I'm Pranav 👋</h1>
          <p className='text-gray-400 font-bold'>
          Building Saas products
          </p>
        </div>
        <div className="flex gap-4 mt-5">
        <Link
          href="https://www.linkedin.com/in/pranav-molawade"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 transition"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link
          href="https://github.com/Pranav0728"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://x.com/molawade_pranav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          <FaTwitter size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Profile