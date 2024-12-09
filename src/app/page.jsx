"use client";
import Myfavtool from "@/components/Myfavtool";
import Mysaasproduct from "@/components/Mysaasproduct";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Timeline from "@/components/Timeline";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative h-[150vh] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #6B21A8, #16A34A)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex w-full  h-full items-center md:mx-15 flex-col">
        <Navbar />
        <div className="md:flex-row flex-col flex items-center  w-[90%] gap-x-5 gap-y-5 mt-5">
          <div className="flex-1">
            <Profile />
          </div>
          <div className="flex flex-col flex-1 gap-y-5 h-full w-full">
            <Timeline />
            <Myfavtool />
          </div>
          <div className="flex-1 h-full w-full">
            <Mysaasproduct />
          </div>
        </div>
      </div>
    </div>
  );
}
