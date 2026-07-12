"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { Award, Calendar, ExternalLink } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { CertificateModal } from "@/components/ui/certificate-modal";

const BLUR_FADE_DELAY = 0.04;

export default function CertificationsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (url: string, title: string) => {
    setModalUrl(url);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Certifications</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certificates & Credentials</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Professional training, courses, and certifications I have completed.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
          {DATA.certifications.map((cert, id) => (
            <BlurFade
              key={cert.title}
              delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              className="h-full"
            >
              <div className="flex flex-col h-full border border-border bg-card rounded-xl p-5 hover:ring-2 hover:ring-muted transition-all duration-200 shadow-xs justify-between group">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    {cert.date && (
                      <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="font-semibold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/55 flex justify-end">
                  <button
                    onClick={() => handleOpenModal(cert.credentialUrl, cert.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline cursor-pointer focus:outline-hidden"
                  >
                    View Credential
                    <ExternalLink className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={modalUrl}
        title={modalTitle}
        layout="landscape"
      />
    </section>
  );
}
