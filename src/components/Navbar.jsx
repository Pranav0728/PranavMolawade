"use client";
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-6 w-6 " />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-6 w-6 " />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-6 w-6 " />,
    },
  ];

  return (
    <div className="sticky top-4 left-1/2 bg-black mt-5 mx-16 shadow-xl rounded-xl h- px-6 py-2 flex items-center justify-between space-x-8">
      <div>
        <h1 className="text-white">Pranav Molawade</h1>
      </div>
      <div className="flex">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex items-center text-sm font-medium text-white p-2"
          >
            {item.icon}
            <span className="mt-1 p-2">{item.name}</span>
          </Link>
        ))}
      </div>
      <div>
        <h1 className="text-white">let's Chat</h1>
      </div>
    </div>
  );
}
