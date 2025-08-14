"use client";

import React, { useEffect } from "react";
import Image from "next/image";

interface ImageViewerModalProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageViewerModal: React.FC<ImageViewerModalProps> = ({ src, alt = "", onClose }) => {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // trigger animation on mount
    const t = setTimeout(() => setOpen(true), 10);
    // lock scroll
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-modal
      role="dialog"
      aria-label="Image viewer"
    >
      {/* Backdrop */}
      <div
        className={
          "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 " +
          (open ? "opacity-100" : "opacity-0")
        }
        onClick={onClose}
      />

      {/* Content */}
      <div
        className={
          "relative z-[1001] max-w-6xl w-[92vw] md:w-[80vw] lg:w-[70vw] aspect-[16/10] "+
          "transition-all duration-300 ease-out " +
          (open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2")
        }
      >
        <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-300 bg-white">
          <button
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute top-3 right-3 z-10 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md ring-1 ring-gray-200 text-gray-700 hover:text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <Image src={src} alt={alt} fill className="object-contain" sizes="100vw" />
        </div>
      </div>
    </div>
  );
};

export default ImageViewerModal;
