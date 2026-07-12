/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import ExperienceSection from "@/components/section/experience-section";
import CertificationsSection from "@/components/section/certifications-section";
import AchievementsSection from "@/components/section/achievements-section";
import { ArrowUpRight, Download, Eye } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <meta name="google-site-verification" content="Rzn42okWNc1v5ACAaFYina86_t6EPsaL1baMAyHIiA0" />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-4 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col order-2 md:order-1 gap-1.5">
              {/* Line 1: Name */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm Venkateswaran`}
              />
              {/* Line 2: Roles */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-base font-semibold text-foreground/80 sm:text-lg lg:text-xl tracking-tight"
                yOffset={8}
                text="Full Stack Web Developer | Java, Spring Boot & React | Python (Django)"
              />
              {/* Line 3: Tagline */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 3}
                className="text-sm text-muted-foreground sm:text-base lg:text-lg max-w-[560px]"
                yOffset={8}
                text="Building scalable, real-world web applications with clean, efficient code — from backend APIs to responsive interfaces."
              />
              {/* Line 4: CTA */}
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 4}
                className="text-sm font-medium text-primary sm:text-base"
                yOffset={8}
                text="Open to Full-Time Full-Stack Web Developer Opportunities"
              />
              {/* Resume Buttons */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href="/Venkateswaran_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                  <a
                    href="/Venkateswaran_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-border bg-background hover:bg-muted hover:border-primary/50 active:scale-95 transition-all duration-200"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </a>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="experience">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <ExperienceSection />
        </BlurFade>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Technical Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2">
                  {skill.icon && <skill.icon className="size-4 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="certifications">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <CertificationsSection />
        </BlurFade>
      </section>
      <section id="achievements">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <AchievementsSection />
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 19 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                      {"grade" in education && (
                        <div className="text-xs font-medium text-emerald-500 dark:text-emerald-400">
                          📊 {education.grade}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
