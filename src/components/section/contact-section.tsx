import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Mail, Phone, Briefcase, MessageSquareCode } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-2xl p-8 sm:p-14 relative w-full bg-card/50">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-2xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto max-w-3xl text-muted-foreground text-balance text-base sm:text-lg leading-relaxed">
          I&apos;m open to full-time software development opportunities and selected freelance web development projects.
        </p>

        {/* Two distinct options for Recruiters vs Clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 w-full max-w-2xl text-left">
          <Link
            href={`mailto:${DATA.contact.email}?subject=Career%20/%20Job%20Opportunity`}
            className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                Recruiters & Hiring
              </span>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Career / Job Opportunity
              </h3>
              <p className="text-xs text-muted-foreground">
                Discuss full-time Full-Stack Developement roles.
              </p>
            </div>
          </Link>

          <Link
            href={`mailto:${DATA.contact.email}?subject=Discuss%20a%20Web%20Project`}
            className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
          >
            <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
              <MessageSquareCode className="h-6 w-6" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                Freelance & Clients
              </span>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Discuss a Web Project
              </h3>
              <p className="text-xs text-muted-foreground">
                Share details for custom website or application development.
              </p>
            </div>
          </Link>
        </div>

        {/* Direct Contact Info */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-xl justify-center">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group flex-1 justify-center"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">{DATA.contact.email}</p>
            </div>
          </Link>
          <Link
            href={`tel:${DATA.contact.tel.replace(/\s/g, "")}`}
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all duration-300 group flex-1 justify-center"
          >
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Mobile</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">{DATA.contact.tel}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
