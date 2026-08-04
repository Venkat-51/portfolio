"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Download, Eye } from "lucide-react";
import { CertificateModal } from "@/components/ui/certificate-modal";

export function ResumeButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RESUME_PDF_URL = "/Venkateswaran_FSD.pdf";
  const RESUME_PREVIEW_URL = "/Venkateswaran_FSD.jpg";

  return (
    <>
      <div className="flex items-center gap-3 mt-2">
        <motion.a
          href={RESUME_PDF_URL}
          download="Venkateswaran_FSD.pdf"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </motion.a>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border bg-background hover:bg-muted hover:border-primary/50 transition-all duration-200 cursor-pointer"
        >
          <Eye className="h-4 w-4" />
          Preview
        </motion.button>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={RESUME_PREVIEW_URL}
        title="Resume Preview"
      />
    </>
  );
}
