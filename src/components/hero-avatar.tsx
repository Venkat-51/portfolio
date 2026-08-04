"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroAvatarProps {
  name: string;
  avatarUrl: string;
  initials: string;
}

export function HeroAvatar({ name, avatarUrl, initials }: HeroAvatarProps) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.025 }}
    >
      <Avatar className="size-36 sm:size-48 md:size-64 lg:size-72 border-2 rounded-full shadow-2xl ring-4 ring-muted transition-shadow duration-300 hover:ring-primary/40">
        <AvatarImage alt={name} src={avatarUrl} className="object-cover" />
        <AvatarFallback className="text-3xl font-bold">{initials}</AvatarFallback>
      </Avatar>
    </motion.div>
  );
}
