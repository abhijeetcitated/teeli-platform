"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Desktop,
  CaretLeft,
  DeviceMobile,
  Laptop,
  Browser,
  MapPin,
  Clock,
  SignOut,
  Check,
  Warning,
} from "@phosphor-icons/react";

type Session = {
  id: string;
  device: string;
  deviceType: "desktop" | "mobile" | "tablet";
  browser: string;
  location: string;
  ip: string;
  lastActive: string;
  isCurrent: boolean;
};

export default function SessionsPage() {
  const router = useRouter();
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      device: "Windows 11 PC",
      deviceType: "desktop",
      browser: "Chrome 120",
      location: "Mumbai, India",
      ip: "103.XXX.XXX.XXX",
      lastActive: "Active now",
      isCurrent: true,
    },
    {
      id: "2",
      device: "iPhone 15 Pro",
      deviceType: "mobile",
      browser: "Safari",
      location: "Mumbai, India",
      ip: "103.XXX.XXX.XXX",
      lastActive: "2 hours ago",
      isCurrent: false,
    },
    {
      id: "3",
      device: "MacBook Pro",
      deviceType: "desktop",
      browser: "Firefox 121",
      location: "Delhi, India",
      ip: "45.XXX.XXX.XXX",
      lastActive: "3 days ago",
      isCurrent: false,
    },
    {
      id: "4",
      device: "iPad Air",
      deviceType: "tablet",
      browser: "Safari",
      location: "Bangalore, India",
      ip: "122.XXX.XXX.XXX",
      lastActive: "1 week ago",
      isCurrent: false,
    },
  ]);

  const getDeviceIcon = (type: Session["deviceType"]) => {
    switch (type) {
      case "mobile":
        return DeviceMobile;
      case "tablet":
        return Laptop;
      default:
        return Desktop;
    }
  };

  const revokeSession = (id: string) => {
    setSessions((prev) => prev.filter((s) => s.id !== id));
  };

  const revokeAllOther = () => {
    setSessions((prev) => prev.filter((s) => s.isCurrent));
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Active Sessions</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage your logged in devices</p>
          </div>
        </motion.div>

        {/* Current Session */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-cyan-400/30 dark:border-cyan-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Check size={16} weight="bold" className="text-green-500" />
            <span className="text-xs font-medium text-green-600 dark:text-green-400">Current Session</span>
          </div>

          {sessions.filter((s) => s.isCurrent).map((session) => {
            const Icon = getDeviceIcon(session.deviceType);
            return (
              <div key={session.id} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30 flex items-center justify-center">
                  <Icon size={28} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">{session.device}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Browser size={12} weight="duotone" />
                      {session.browser}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <MapPin size={12} weight="duotone" />
                      {session.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Active</span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Other Sessions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6"
        >
          <div className="flex items-center justify-between p-6 border-b border-white/20 dark:border-white/10">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Other Sessions</h3>
            {sessions.filter((s) => !s.isCurrent).length > 0 && (
              <button
                onClick={revokeAllOther}
                className="text-xs font-medium text-red-500 hover:text-red-600"
              >
                Sign out all
              </button>
            )}
          </div>

          <div className="divide-y divide-white/10 dark:divide-white/5">
            {sessions.filter((s) => !s.isCurrent).map((session, index) => {
              const Icon = getDeviceIcon(session.deviceType);
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-gray-500/25 to-slate-500/25 border border-gray-400/30 flex items-center justify-center">
                      <Icon size={24} weight="duotone" className="text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{session.device}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Browser size={12} weight="duotone" />
                          {session.browser}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <MapPin size={12} weight="duotone" />
                          {session.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock size={12} weight="duotone" />
                          {session.lastActive}
                        </span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => revokeSession(session.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <SignOut size={18} weight="duotone" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}

            {sessions.filter((s) => !s.isCurrent).length === 0 && (
              <div className="p-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">No other active sessions</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Security Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-500/10 dark:bg-amber-500/5 rounded-2xl border-2 border-amber-400/30 dark:border-amber-500/20 p-4"
        >
          <div className="flex items-start gap-3">
            <Warning size={20} weight="duotone" className="text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Don&apos;t recognize a session?</p>
              <p className="text-xs text-amber-600/80 dark:text-amber-400/70 mt-1">
                If you see any unfamiliar sessions, sign out of them immediately and change your password.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
