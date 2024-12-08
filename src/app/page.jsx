"use client";
import Navbar from "@/components/Navbar";
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
      <div className="relative z-10 flex justify-center items-start md:mx-20">
        <Navbar />
      </div>
    </div>
  );
}
