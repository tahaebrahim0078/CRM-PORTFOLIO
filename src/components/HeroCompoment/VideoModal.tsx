"use client";

import { useState } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  videoId: string;
  title?: string;
}

export default function VideoModal({
  videoId,
  title = "Demo Video",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="border-2 border-white cursor-pointer text-white px-5 md:px-6 lg:px-8 md:py-4 py-3 rounded-lg font-semibold hover:text-indigoCustom hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-white flex items-center gap-2"
        aria-label="Watch demo video"
      >
        <Play className="w-5 h-5" />
        Watch Demo
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center mt-15 p-4"
          role="presentation"
        >
          <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full h-[90vh] max-w-7xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-800">
              <h2 className="text-white font-semibold text-lg">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-700 cursor-pointer  rounded-lg transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full flex-1 bg-black overflow-hidden">
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
