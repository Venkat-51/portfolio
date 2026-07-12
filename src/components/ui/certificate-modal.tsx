"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ExternalLink, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  layout?: "portrait" | "landscape";
}

export function CertificateModal({
  isOpen,
  onClose,
  url,
  title,
}: CertificateModalProps) {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset scale and rotation when modal opens/changes URL
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setRotation(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, url]);

  // Close on Escape or Backspace key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const isPDF = url.toLowerCase().endsWith(".pdf");

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setRotation(0);
  };

  const handleRotate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setRotation((prev) => (prev + 90) % 360);
  };

  const containerMaxWidth = "max-w-5xl";

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity duration-300 cursor-zoom-out"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative z-10 w-[98vw] ${containerMaxWidth} h-[96vh] flex flex-col bg-neutral-950 dark:bg-neutral-900/60 border border-border rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200`}>
        
        {/* Floating Controls (Top Right) */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center gap-2">
          {/* Direct Link */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-colors"
            title="Open original file"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-5 w-5" />
          </a>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-md transition-colors cursor-pointer"
            title="Close (Esc / Backspace)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Area */}
        <div 
          className="flex-1 w-full relative overflow-auto cursor-zoom-out flex items-center justify-center p-2 sm:p-4"
          onClick={onClose}
        >
          {isPDF ? (
            <div 
              className="w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`${url}#toolbar=0`}
                className="w-full h-full border-none rounded-md"
                title={title}
              />
            </div>
          ) : (
            <div 
              className="relative flex items-center justify-center transition-all duration-200 ease-out"
              style={{
                width: `${scale * 100}%`,
                maxWidth: scale > 1 ? "none" : "100%",
                transform: `rotate(${rotation}deg)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={url}
                alt={title}
                className="object-contain rounded-md shadow-2xl select-none"
                style={{
                  maxWidth: "100%",
                  maxHeight: scale > 1 ? "none" : "92vh",
                }}
              />
            </div>
          )}
        </div>

        {/* Floating Controller (only for images) */}
        {!isPDF && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-background/95 dark:bg-card/95 backdrop-blur-md border border-border rounded-full shadow-lg">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer disabled:opacity-50"
              title="Zoom Out"
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </button>
            <span className="text-[11px] sm:text-xs font-semibold min-w-[36px] sm:min-w-[40px] text-center text-muted-foreground select-none">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer disabled:opacity-50"
              title="Zoom In"
              disabled={scale >= 3}
            >
              <ZoomIn className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </button>
            <div className="w-px h-4 bg-border mx-0.5 sm:mx-1" />
            <button
              onClick={handleRotate}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title="Rotate 90°"
            >
              <RotateCcw className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
            </button>
            <button
              onClick={handleReset}
              className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              title="Reset View"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
