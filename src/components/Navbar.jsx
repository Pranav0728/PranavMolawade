"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { IoNavigate } from "react-icons/io5";
import { RiHomeSmileLine } from "react-icons/ri";
import { AiOutlineFileText, AiOutlineComment } from "react-icons/ai";

export default function Navbar({ className }) {
  const pathname = usePathname();

  const items = [
    { href: "/", title: "Home", icon: <RiHomeSmileLine size={20} /> },
    { href: "/post", title: "Posts", icon: <AiOutlineFileText size={20} /> },
    { href: "/feedback", title: "Feedback", icon: <AiOutlineComment size={20} /> },
  ];

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Image
        alt="logo"
        src="/Assets/logoP.jpg"
        className="m-3 rounded-full border"
        width={30}
        height={30}
        priority
      />
      <h1 className="text-lg font-bold">Pranav Molawade</h1>
    </Link>
  );

  const getChatButton = () => (
    <div className="flex gap-3 items-center mx-2">
      <button
        className="w-full py-3 px-4 bg-customBlack hover:bg-blue-600 flex flex-row justify-center items-center gap-2 text-white font-bold rounded-md text-center"
      >
        Let's chat <IoNavigate size={25} />
      </button>
    </div>
  );

  const getHeaderItems = () => (
    <>
      {items.map((item) => {
        const isSelected =
          pathname === item.href || pathname.includes(item.href);

        return (
          <Link
            href={item.href}
            key={item.title}
            passHref
            className={cn(isSelected ? "font-bold bg-customBlack " : "flex items-center gap-2", "px-2 py-1 flex gap-2 items-center rounded-md")}
          >
            {item.icon}
            <span className="cursor-pointer">{item.title}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <div
      className={cn(
        "flex md:h-16 h-20 items-center justify-between mt-5 text-white w-[90%] bg-black rounded-xl navbar p-2",
        className
      )}
    >
      <div className="w-full md:px-4 px-4">
        <div className="flex items-center justify-between gap-x-8 w-full">
          <div className="flex items-center">{getLogo()}</div>
          <div className="md:flex items-center gap-x-8 hidden">
            {getHeaderItems()}
          </div>
          <div className="md:flex items-center hidden">{getChatButton()}</div>

          <div className="md:hidden flex gap-x-4 items-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button>
                  <MenuIcon />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none text-white bg-black">
                <DrawerDescription />
                <DrawerTitle />
                <div className="mx-auto w-full p-5 h-full flex flex-col">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <button className="w-full flex items-end justify-end">
                        <X />
                      </button>
                    </DrawerClose>
                    <h2 className="sr-only">Navigation Menu</h2>
                  </DrawerHeader>
                  <div className="flex-grow">
                    <div className="p-4 pb-0 space-y-4 flex flex-col">
                      {getHeaderItems()}
                    </div>
                    <div className="pb-0 space-y-4 flex flex-col">
                      {/* Add other content here if needed */}
                    </div>
                  </div>
                  <div className="mt-auto">{getChatButton()}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
