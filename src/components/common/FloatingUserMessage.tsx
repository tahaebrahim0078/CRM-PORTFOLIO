"use client";

import { motion } from "framer-motion";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function FloatingUserMessage() {
  return (
    <motion.div
      className="flex justify-end gap-3"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-indigoCustom rounded-xl text-white px-4 py-2 max-w-xs">
        <p className="text-sm">I need help with my order</p>
      </div>

      <div className="w-8 h-8 rounded-full bg-indigoCustom flex items-center justify-center shrink-0">
        <IoPersonCircleSharp className="w-5 h-5 text-white" />
      </div>
    </motion.div>
  );
}
