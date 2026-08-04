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
import { ArrowUpRight } from "lucide-react";
import { ResumeButtons } from "@/components/resume-buttons";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-20 sm:gap-28 w-full relative">
      <meta name="google-site-verification" content="Rzn42okWNc1v5ACAaFYina86_t6EPsaL1baMAyHIiA0" />
      
      {/* ── HERO SECTION (100% FULL-WIDTH 2-COLUMN DESKTOP LAYOUT) ── */}
      <section id="hero" className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center py-6 sm:py-12">
        <div className="w-full grid grid-cols-1 md:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col order-2 md:order-1 gap-3 sm:gap-4 max-w-4xl">
            {/* Line 1: Name */}
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl"
              yOffset={8}
              text={`Hi, I'm Venkateswaran`}
            />
            {/* Line 2: Roles */}
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-base font-semibold text-foreground/80 sm:text-xl lg:text-2xl tracking-tight"
              yOffset={8}
              text="Full Stack Web Developer | Java, Spring Boot & React | Python (Django) | 2026 Graduate"
            />
            {/* Line 3: Tagline */}
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 3}
              className="text-sm text-muted-foreground sm:text-lg lg:text-xl max-w-3xl leading-relaxed"
              yOffset={8}
              text="Building scalable, real-world web applications with clean, efficient code — from backend APIs to responsive interfaces."
            />
            {/* Line 4: CTA */}
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 4}
              className="text-sm font-semibold text-primary sm:text-lg"
              yOffset={8}
              text="Open to Full-Time Full-Stack Web Developer Opportunities"
            />
            {/* Resume Buttons */}
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <ResumeButtons />
            </BlurFade>
          </div>

          {/* Right Column: Hero Profile Image */}
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 flex justify-center md:justify-end">
            <Avatar className="size-36 sm:size-48 md:size-64 lg:size-72 border-2 rounded-full shadow-2xl ring-4 ring-muted transition-transform duration-500 hover:scale-105">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} className="object-cover" />
              <AvatarFallback className="text-3xl font-bold">{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      {/* ── ABOUT SECTION ── */}
      <section id="about" className="w-full">
        <div className="flex flex-col gap-y-4 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-2xl font-bold tracking-tight">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-4xl text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert text-base sm:text-lg">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* ── EXPERIENCE SECTION ── */}
      <section id="experience" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <ExperienceSection />
        </BlurFade>
      </section>

      {/* ── SKILLS SECTION ── */}
      <section id="skills" className="w-full">
        <div className="flex flex-col gap-y-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold tracking-tight">Technical Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.03}>
                <div className="border bg-background border-border ring-2 ring-border/20 hover:border-primary/50 hover:ring-primary/20 transition-all duration-200 rounded-xl h-10 w-fit px-4 sm:px-5 flex items-center gap-2.5 shadow-xs">
                  {skill.icon && <skill.icon className="size-4 sm:size-5 rounded overflow-hidden object-contain" />}
                  <span className="text-foreground text-sm sm:text-base font-medium">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS SECTION ── */}
      <section id="projects" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* ── CERTIFICATIONS SECTION ── */}
      <section id="certifications" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <CertificationsSection />
        </BlurFade>
      </section>

      {/* ── ACHIEVEMENTS SECTION ── */}
      <section id="achievements" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <AchievementsSection />
        </BlurFade>
      </section>

      {/* ── EDUCATION SECTION ── */}
      <section id="education" className="w-full">
        <div className="flex flex-col gap-y-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <h2 className="text-2xl font-bold tracking-tight">Education</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 19 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-x-4 justify-between group p-5 border border-border rounded-2xl bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className="flex items-start gap-x-4 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-10 sm:size-12 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none mt-0.5"
                      />
                    ) : (
                      <div className="size-10 sm:size-12 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <div className="font-semibold text-base sm:text-lg leading-snug flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                        {education.school}
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                      </div>
                      <div className="font-sans text-sm sm:text-base text-muted-foreground">
                        {education.degree}
                      </div>
                      {"grade" in education && (
                        <div className="text-xs sm:text-sm font-semibold text-emerald-500 dark:text-emerald-400 mt-1">
                          📊 {education.grade}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-medium tabular-nums text-muted-foreground text-right flex-none pl-2">
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

      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 21}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
