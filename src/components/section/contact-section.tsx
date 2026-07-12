import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-6 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
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
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I am currently seeking full-time opportunities as a Software Developer, Java Developer, or Full Stack Developer. As a recent Computer Science graduate, I am eager to contribute, learn, and grow with a dynamic team. If you have a suitable opportunity, I'd be happy to connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-md justify-center">
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
