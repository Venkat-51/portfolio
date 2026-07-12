"use client";

import { useState, useEffect, useRef } from "react";
import { Download, Eye } from "lucide-react";
import { CertificateModal } from "@/components/ui/certificate-modal";

const RESUME_URL = "/Venkateswaran_FSD_Resume.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace("#", ""));

export default function TopNavbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Refs for mobile auto-scroll
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Page scroll → frosted glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver → track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Auto-scroll mobile nav strip → keep active pill centered
  useEffect(() => {
    const container = mobileScrollRef.current;
    const btn = buttonRefs.current[active];
    if (!container || !btn) return;

    const containerWidth = container.offsetWidth;
    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const targetScroll = btnLeft - containerWidth / 2 + btnWidth / 2;

    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [active]);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      {/* ── Top bar ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="font-bold text-base tracking-tight text-foreground hover:text-primary transition-colors shrink-0"
        >
          Venkateswaran G
        </button>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={href}
                onClick={() => handleClick(href)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </nav>

        {/* Resume buttons (all screen sizes) */}
        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm"
          >
            <Download className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download</span>
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-background hover:bg-muted hover:border-primary/50 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <Eye className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>
      </div>

      {/* ── Mobile horizontal scroll nav (auto-scrolls active pill to center) ── */}
      <div
        className={`md:hidden border-t border-border/50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl" : "bg-transparent"
          }`}
      >
        <div
          ref={mobileScrollRef}
          className="flex overflow-x-auto scrollbar-hide px-3 py-1.5 gap-1"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={href}
                ref={(el) => { buttonRefs.current[id] = el; }}
                onClick={() => handleClick(href)}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <CertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        url={RESUME_URL}
        title="Resume Preview"
      />
    </header>
  );
}
