"use client";

import { useState } from "react";
import { Download, Eye } from "lucide-react";
import { CertificateModal } from "@/components/ui/certificate-modal";

export function ResumeButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const RESUME_URL = "/Venkateswaran_FSD_Resume.jpg";

  return (
    <>
      <div className="flex items-center gap-3 mt-2">
        <a
          href={RESUME_URL}
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border bg-background hover:bg-muted hover:border-primary/50 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <Eye className="h-4 w-4" />
          Preview
        </button>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={RESUME_URL}
        title="Resume Preview"
      />
    </>
  );
}
