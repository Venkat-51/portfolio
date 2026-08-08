"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { motion, useReducedMotion, Variants } from "motion/react";
import {
  User,
  Building2,
  ShoppingBag,
  Code2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const SERVICES = [
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    description:
      "Modern, responsive portfolio websites for students, developers, freelancers, and professionals to showcase their work and personal brand.",
    icon: User,
    features: [
      "Responsive Design",
      "Project Showcase",
      "Contact Integration",
      "Resume Integration",
    ],
  },
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional websites and landing pages for local shops, startups, and small businesses to establish a strong online presence.",
    icon: Building2,
    features: [
      "Business Landing Pages",
      "Mobile Responsive Design",
      "Contact / WhatsApp Integration",
      "Google Maps / Business Information",
    ],
  },
  {
    id: "ecommerce-websites",
    title: "E-Commerce Websites",
    description:
      "Complete e-commerce websites for businesses that need to showcase products and manage customer orders online.",
    icon: ShoppingBag,
    features: [
      "Product Catalog",
      "Search & Filters",
      "Shopping Cart",
      "User Authentication",
      "Admin Dashboard",
      "Product Management",
      "Order Management",
      "Payment integration when required",
    ],
  },
  {
    id: "custom-web-applications",
    title: "Custom Web Applications",
    description:
      "Custom full-stack web applications designed around specific business requirements and workflows.",
    icon: Code2,
    features: [
      "Responsive Frontend",
      "Backend APIs",
      "Database Integration",
      "Authentication",
      "Admin Dashboard",
      "Deployment",
    ],
  },
];

function MobileServiceCard({
  service,
  index,
  onDiscussProject,
}: {
  service: (typeof SERVICES)[number];
  index: number;
  onDiscussProject: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;
  const numStr = String(index + 1).padStart(2, "0");

  const cardVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.08 },
    },
  };

  const titleVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.12 },
    },
  };

  const descVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.16 },
    },
  };

  const featureItemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", delay: 0.2 + i * 0.04 },
    }),
  };

  const ctaVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.35 },
    },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cardVariants}
      className="w-[calc(100%-32px)] mx-auto flex flex-col border border-border bg-card rounded-2xl p-6 shadow-xs hover:border-primary/40 transition-colors h-auto overflow-visible"
    >
      {/* Number Badge & Icon Row */}
      <div className="flex items-center justify-between mb-4">
        <motion.span
          variants={titleVariants}
          className="text-2xl font-bold font-mono text-primary/60 tracking-wider"
        >
          {numStr}
        </motion.span>
        <motion.div
          variants={iconVariants}
          className="p-3 bg-primary/10 rounded-xl text-primary flex items-center justify-center"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        variants={titleVariants}
        className="font-bold text-xl leading-snug text-foreground mb-2"
      >
        {service.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={descVariants}
        className="text-sm text-muted-foreground leading-relaxed mb-5"
      >
        {service.description}
      </motion.p>

      {/* Features List */}
      <div className="pt-4 border-t border-border/40 mb-6">
        <motion.p
          variants={descVariants}
          className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-3"
        >
          Features:
        </motion.p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <motion.li
              key={feature}
              custom={idx}
              variants={featureItemVariants}
              className="text-sm text-muted-foreground flex items-start gap-2 font-medium"
            >
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <motion.div variants={ctaVariants} className="mt-auto pt-2">
        <button
          onClick={onDiscussProject}
          className="w-full py-3 px-4 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 shadow-xs flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Discuss Your Project</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const handleDiscussProject = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="services">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Services</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-2xl">
              Web solutions for individuals, startups, and growing businesses.
            </p>
          </div>
        </div>

        {/* Desktop Services Grid (md breakpoint and above) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full auto-rows-fr">
          {SERVICES.map((service, id) => {
            const Icon = service.icon;
            return (
              <BlurFade
                key={service.id}
                delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-col h-full border border-border bg-card rounded-2xl p-6 hover:border-primary/50 hover:shadow-md transition-all duration-300 group justify-between"
                >
                  <div className="flex flex-col gap-4">
                    {/* Minimal Icon Header */}
                    <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-lg sm:text-xl leading-snug text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-2 border-t border-border/40">
                      <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wider mb-2">
                        Key Features
                      </p>
                      <ul className="space-y-1.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 font-medium"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </BlurFade>
            );
          })}
        </div>

        {/* Mobile Services List (below md breakpoint) */}
        <div className="flex md:hidden flex-col gap-6 w-full">
          {SERVICES.map((service, index) => (
            <MobileServiceCard
              key={service.id}
              service={service}
              index={index}
              onDiscussProject={handleDiscussProject}
            />
          ))}
        </div>

        {/* Desktop Services CTA Banner */}
        <BlurFade delay={BLUR_FADE_DELAY * 15} className="hidden md:block">
          <div className="mt-4 border border-border rounded-2xl p-6 sm:p-8 bg-card/60 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-primary/40 transition-all duration-300 shadow-xs">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Have a project in mind?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Tell me what you need and I&apos;ll help you find the right web solution.
              </p>
            </div>
            <button
              onClick={handleDiscussProject}
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-xs whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

