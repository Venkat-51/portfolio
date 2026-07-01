import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { Briefcase, Award } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Experience</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              My professional journey and internship experiences in software development.
            </p>
          </div>
        </div>
        <Timeline>
          {(DATA.work as unknown as Array<{ company: string; href: string; title: string; logoUrl?: string; start: string; end: string; description: string[]; certificateUrl?: string }>).map((work) => (
            <TimelineItem key={work.company + work.title} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {work.logoUrl ? (
                  <img
                    src={work.logoUrl}
                    alt={work.company}
                    className="size-10 bg-white z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-10 bg-muted z-10 shrink-0 overflow-hidden border rounded-full shadow ring-2 ring-border flex items-center justify-center text-primary font-bold text-lg flex-none">
                    {work.company.charAt(0)}
                  </div>
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {work.start && (
                  <time className="text-xs text-muted-foreground">{work.start}</time>
                )}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold leading-none text-base">{work.title}</h3>
                  <span className="text-sm font-medium text-primary sm:text-right">{work.company}</span>
                </div>
                {work.description && (
                  <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground leading-relaxed mt-1">
                    {work.description.map((responsibility, index) => (
                      <li key={index} className="text-pretty">{responsibility}</li>
                    ))}
                  </ul>
                )}
                {work.certificateUrl && (
                  <div className="mt-2">
                    <Link
                      href={work.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground w-fit hover:bg-primary/80 cursor-pointer">
                        <Award className="size-3" />
                        View Certificate
                      </Badge>
                    </Link>
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
