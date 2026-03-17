"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Bell,
  CaretLeft,
  Envelope,
  DeviceMobile,
  Desktop,
  ChatCircle,
  Megaphone,
  Heart,
  Users,
  Package,
} from "@phosphor-icons/react";

type NotificationSetting = {
  id: string;
  label: string;
  description: string;
  icon: typeof Bell;
  email: boolean;
  push: boolean;
  inApp: boolean;
};

export default function NotificationsPage() {
  const router = useRouter();
  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "comments",
      label: "Comments",
      description: "When someone comments on your project",
      icon: ChatCircle,
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "likes",
      label: "Likes",
      description: "When someone likes your project",
      icon: Heart,
      email: false,
      push: true,
      inApp: true,
    },
    {
      id: "follows",
      label: "New Followers",
      description: "When someone follows you",
      icon: Users,
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "mentions",
      label: "Mentions",
      description: "When you're mentioned in a comment",
      icon: Megaphone,
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "updates",
      label: "Product Updates",
      description: "New features and announcements",
      icon: Package,
      email: true,
      push: false,
      inApp: true,
    },
  ]);

  const toggleNotification = (id: string, channel: "email" | "push" | "inApp") => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, [channel]: !n[channel] } : n))
    );
  };

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Notifications</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Choose how you want to be notified</p>
          </div>
        </motion.div>

        {/* Channel Headers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-5"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Notification Channels</h3>
            <div className="flex items-center gap-8">
              <div className="flex flex-col items-center gap-1">
                <Envelope size={18} weight="duotone" className="text-gray-500 dark:text-gray-400" />
                <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Email</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <DeviceMobile size={18} weight="duotone" className="text-gray-500 dark:text-gray-400" />
                <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">Push</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Desktop size={18} weight="duotone" className="text-gray-500 dark:text-gray-400" />
                <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">In-App</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {notifications.map((notification, index) => {
              const Icon = notification.icon;
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/25 to-orange-500/25 border border-amber-400/30 flex items-center justify-center">
                      <Icon size={18} weight="duotone" className="text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{notification.label}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{notification.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <Toggle
                      enabled={notification.email}
                      onChange={() => toggleNotification(notification.id, "email")}
                    />
                    <Toggle
                      enabled={notification.push}
                      onChange={() => toggleNotification(notification.id, "push")}
                    />
                    <Toggle
                      enabled={notification.inApp}
                      onChange={() => toggleNotification(notification.id, "inApp")}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Email Digest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Email Digest</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Get a summary of activity instead of individual emails</p>
          
          <div className="space-y-2">
            {["Instant", "Daily", "Weekly", "Never"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
              >
                <input
                  type="radio"
                  name="digest"
                  defaultChecked={option === "Daily"}
                  className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 border-gray-400"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
