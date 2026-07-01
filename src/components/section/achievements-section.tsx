import { Trophy } from "lucide-react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsSection() {
  return (
    <section id="achievements">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Achievements</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Highlights</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A summary of my milestones and accomplishments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto w-full">
          {DATA.achievements.map((achievement, id) => (
            <BlurFade
              key={achievement}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
            >
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-yellow-500/40 hover:shadow-[0_0_12px_rgba(250,204,21,0.08)] transition-all duration-300 group h-full">
                <div className="p-3 bg-yellow-500/10 dark:bg-yellow-500/15 text-yellow-500 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Trophy className="h-5 w-5 fill-yellow-500/20" />
                </div>
                <p className="text-sm font-medium text-foreground tracking-tight leading-snug">
                  {achievement}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
