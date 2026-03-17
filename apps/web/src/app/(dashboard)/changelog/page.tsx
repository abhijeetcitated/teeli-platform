"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Sparkle,
  CaretLeft,
  Star,
  Bug,
  Wrench,
  Rocket,
  Lightning,
} from "@phosphor-icons/react";

type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  type: "feature" | "improvement" | "fix";
  items: string[];
};

export default function ChangelogPage() {
  const router = useRouter();

  const changelog: ChangelogEntry[] = [
    {
      version: "1.2.0",
      date: "December 5, 2024",
      title: "Major UI Overhaul",
      type: "feature",
      items: [
        "Completely redesigned Settings page with glassmorphism",
        "New Account, Notifications, and Privacy settings",
        "Added Two-Factor Authentication support",
        "Session management for all devices",
        "Connected accounts (Google, GitHub, Discord)",
      ],
    },
    {
      version: "1.1.5",
      date: "November 28, 2024",
      title: "Performance Boost",
      type: "improvement",
      items: [
        "50% faster model loading times",
        "Reduced memory usage in the editor",
        "Improved mobile responsiveness",
        "Better dark mode support",
      ],
    },
    {
      version: "1.1.4",
      date: "November 20, 2024",
      title: "Bug Fixes",
      type: "fix",
      items: [
        "Fixed issue with project exports",
        "Resolved login issues on Safari",
        "Fixed notification preferences not saving",
        "Corrected timezone display issues",
      ],
    },
    {
      version: "1.1.0",
      date: "November 10, 2024",
      title: "Collaboration Features",
      type: "feature",
      items: [
        "Real-time collaboration with team members",
        "Comments and annotations on 3D models",
        "Project sharing with custom permissions",
        "Activity feed for project updates",
      ],
    },
    {
      version: "1.0.0",
      date: "October 15, 2024",
      title: "Initial Release",
      type: "feature",
      items: [
        "3D model editor with intuitive controls",
        "Support for GLB, GLTF, FBX, and OBJ formats",
        "Cloud storage for all your projects",
        "Basic export and sharing features",
      ],
    },
  ];

  const getTypeIcon = (type: ChangelogEntry["type"]) => {
    switch (type) {
      case "feature":
        return Rocket;
      case "improvement":
        return Lightning;
      case "fix":
        return Bug;
    }
  };

  const getTypeColor = (type: ChangelogEntry["type"]) => {
    switch (type) {
      case "feature":
        return "from-cyan-500/25 to-blue-500/25 border-cyan-400/30 text-cyan-600 dark:text-cyan-400";
      case "improvement":
        return "from-purple-500/25 to-pink-500/25 border-purple-400/30 text-purple-600 dark:text-purple-400";
      case "fix":
        return "from-amber-500/25 to-orange-500/25 border-amber-400/30 text-amber-600 dark:text-amber-400";
    }
  };

  const getTypeBadge = (type: ChangelogEntry["type"]) => {
    switch (type) {
      case "feature":
        return { label: "New Feature", bg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" };
      case "improvement":
        return { label: "Improvement", bg: "bg-purple-500/10 text-purple-600 dark:text-purple-400" };
      case "fix":
        return { label: "Bug Fix", bg: "bg-amber-500/10 text-amber-600 dark:text-amber-400" };
    }
  };

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 md:pl-24 lg:pl-8 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/settings")}
            className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center"
          >
            <CaretLeft size={20} weight="bold" className="text-gray-600 dark:text-gray-400" />
          </motion.button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What&apos;s New</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Latest updates and improvements</p>
          </div>
        </motion.div>

        {/* Latest Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl border-2 border-cyan-400/30 p-6 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 bg-cyan-500/20 rounded-full text-xs font-medium text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
              <Star size={12} weight="fill" />
              Latest
            </div>
          </div>
          <Sparkle size={32} weight="duotone" className="text-cyan-600 dark:text-cyan-400 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{changelog[0].title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Version {changelog[0].version}</p>
          <p className="text-xs text-gray-500">{changelog[0].date}</p>
        </motion.div>

        {/* Changelog Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-white/20 dark:bg-white/10" />

          {changelog.map((entry, index) => {
            const Icon = getTypeIcon(entry.type);
            const colorClass = getTypeColor(entry.type);
            const badge = getTypeBadge(entry.type);

            return (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="relative pl-14 pb-8 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 w-12 h-12 rounded-xl bg-linear-to-br ${colorClass.split(' ').slice(0, 3).join(' ')} border ${colorClass.split(' ')[3]} flex items-center justify-center`}>
                  <Icon size={20} weight="duotone" className={colorClass.split(' ').slice(-2).join(' ')} />
                </div>

                <div className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="p-5 border-b border-white/20 dark:border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold text-gray-800 dark:text-white">{entry.title}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${badge.bg}`}>
                          {badge.label}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">v{entry.version}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{entry.date}</p>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {entry.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
