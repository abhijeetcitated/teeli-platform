"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CaretLeft,
  Eye,
  Users,
  Globe,
  Lock,
  Lightning,
  Database,
  MagnifyingGlass,
} from "@phosphor-icons/react";

export default function PrivacyPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    profileVisibility: "public",
    showActivity: true,
    showProjects: true,
    allowSearchEngines: false,
    dataSharing: false,
    analytics: true,
  });

  const Toggle = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <motion.button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? "bg-cyan-500" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <motion.div
        initial={false}
        animate={{ x: enabled ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-md"
      />
    </motion.button>
  );

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Control your privacy settings</p>
          </div>
        </motion.div>

        {/* Profile Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500/25 to-emerald-500/25 border border-green-400/30 flex items-center justify-center">
              <Eye size={18} weight="duotone" className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Profile Visibility</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Who can see your profile</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { id: "public", icon: Globe, label: "Public", desc: "Anyone can see your profile" },
              { id: "followers", icon: Users, label: "Followers Only", desc: "Only your followers can see" },
              { id: "private", icon: Lock, label: "Private", desc: "Only you can see your profile" },
            ].map((option) => (
              <label
                key={option.id}
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                  settings.profileVisibility === option.id
                    ? "bg-cyan-500/10 border-2 border-cyan-400/30"
                    : "hover:bg-white/10 dark:hover:bg-white/5 border-2 border-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="visibility"
                  checked={settings.profileVisibility === option.id}
                  onChange={() => setSettings({ ...settings, profileVisibility: option.id })}
                  className="hidden"
                />
                <div className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 flex items-center justify-center">
                  <option.icon size={18} weight="duotone" className="text-gray-600 dark:text-gray-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{option.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{option.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  settings.profileVisibility === option.id ? "border-cyan-500 bg-cyan-500" : "border-gray-400"
                }`}>
                  {settings.profileVisibility === option.id && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
              </label>
            ))}
          </div>
        </motion.div>

        {/* Activity & Visibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Activity & Visibility</h3>

          <div className="space-y-1">
            {[
              { id: "showActivity", icon: Lightning, label: "Show Activity Status", desc: "Let others see when you're online" },
              { id: "showProjects", icon: Eye, label: "Show Projects on Profile", desc: "Display your public projects" },
              { id: "allowSearchEngines", icon: MagnifyingGlass, label: "Allow Search Engines", desc: "Let search engines index your profile" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/25 to-violet-500/25 border border-purple-400/30 flex items-center justify-center">
                    <item.icon size={18} weight="duotone" className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{item.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <Toggle
                  enabled={settings[item.id as keyof typeof settings] as boolean}
                  onChange={() => setSettings({ ...settings, [item.id]: !settings[item.id as keyof typeof settings] })}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Data & Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Data & Analytics</h3>

          <div className="space-y-1">
            {[
              { id: "dataSharing", icon: Database, label: "Third-Party Data Sharing", desc: "Share data with partners for personalization" },
              { id: "analytics", icon: Lightning, label: "Usage Analytics", desc: "Help us improve by sharing anonymous usage data" },
            ].map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/25 to-teal-500/25 border border-cyan-400/30 flex items-center justify-center">
                    <item.icon size={18} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white">{item.label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
                <Toggle
                  enabled={settings[item.id as keyof typeof settings] as boolean}
                  onChange={() => setSettings({ ...settings, [item.id]: !settings[item.id as keyof typeof settings] })}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
