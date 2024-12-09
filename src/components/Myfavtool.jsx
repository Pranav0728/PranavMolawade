import Image from 'next/image';
import React from 'react'

function Myfavtool() {
  const tools = [
    { name: 'Next.js', logo: '/Assets/logo.png' },
    { name: 'ChatGPT', logo: '/Assets/logo.png' },
    { name: 'Figma', logo: '/Assets/logo.png' },
    { name: 'VS Code', logo: '/Assets/logo.png' },
    { name: 'GitHub', logo: '/Assets/logo.png' },
    { name: 'Tailwind CSS', logo: '/Assets/logo.png' },
  ];
  return (
    <div className='text-white bg-black h-[50%] p-5 rounded-xl'>
    <h1>Myfavtool</h1>
    <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-2 mt-5 ">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center "
          >
            <Image
              src={tool.logo}
              alt={`${tool.name} logo`}
              width={50}
              height={50}
            />
            <h2 className="text-lg font-semibold">{tool.name}</h2>
          </div>
        ))}
      </div>
    <div>
    </div>
</div>
  )
}

export default Myfavtool