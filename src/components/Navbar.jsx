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
  DrawerDescription
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";

export default function Navbar({ className }) {
  const pathname = usePathname();

  const items = [
    { href: "/", title: "Home" },
    { href: "/post", title: "Posts" },
    { href: "/feedback", title: "Feedback" },
  ];

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Image
        alt="logo"
        src="/Assets/logo.png"
        className="m-3"
        width={40}
        height={40}
        priority
      />
      <h1 className="text-lg font-bold">Pranav Molawade</h1>
    </Link>
  );

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center mx-2">
      <Link href="/chat" className="btn-primary">
        Let's Chat
      </Link>
    </div>
  );

  const getHeaderItems = () => (
    <>
      {items.map((item) => {
        const isSelected = pathname === item.href || pathname.includes(item.href);

        return (
          <Link
            href={item.href}
            key={item.title}
            passHref
            className={cn(isSelected ? "text-xl font-bold" : "text-lg")}
          >
            <span className="cursor-pointer">{item.title}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <div
      className={cn(
        "flex md:h-15 h-20 items-center justify-between mt-5 text-white w-[90%] bg-black rounded-xl navbar",
        className
      )}
    >
      <div className="w-full md:px-8 px-4">
        <div className="flex items-center justify-between gap-x-8 w-full">
          <div className="flex items-center ">{getLogo()}</div>
            <div className="md:flex items-center gap-x-8 hidden">{getHeaderItems()}</div>
            <div className="md:flex items-center hidden">{getAuthButtons()}</div>
            
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <button>
                  <MenuIcon />
                </button>
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none text-black">
                <DrawerDescription/>
              <DrawerTitle />
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <button className="w-full flex items-end justify-end">
                        <X />
                      </button>
                    </DrawerClose>
                    <h2 className="sr-only">Navigation Menu</h2>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4 flex flex-col">{getHeaderItems()}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
