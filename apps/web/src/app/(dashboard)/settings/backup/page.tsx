"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CloudArrowUp,
  CaretLeft,
  GoogleLogo,
  Cube,
  HardDrive,
  Clock,
  Check,
  ArrowsClockwise,
  Warning,
} from "@phosphor-icons/react";

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

export default function BackupPage() {
  const router = useRouter();
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("daily");
  const [lastBackup] = useState("2 hours ago");

  const cloudServices = [
    { id: "google", name: "Google Drive", icon: GoogleLogo, connected: true, storage: "12.5 GB / 15 GB" },
    { id: "dropbox", name: "Dropbox", icon: Cube, connected: false, storage: null },
    { id: "local", name: "Local Storage", icon: HardDrive, connected: true, storage: "3.2 GB used" },
  ];

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Backup & Sync</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Keep your projects safe</p>
          </div>
        </motion.div>

        {/* Backup Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500/25 to-emerald-500/25 border border-green-400/30 flex items-center justify-center">
                <Check size={24} weight="bold" className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">All Synced</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Clock size={14} weight="duotone" />
                  Last backup: {lastBackup}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium flex items-center gap-2"
            >
              <ArrowsClockwise size={16} weight="bold" />
              Sync Now
            </motion.button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/10 dark:bg-white/5 rounded-xl">
            <div className="flex items-center gap-3">
              <CloudArrowUp size={20} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">Auto-Backup</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Automatically back up your projects</p>
              </div>
            </div>
            <Toggle enabled={autoBackup} onChange={() => setAutoBackup(!autoBackup)} />
          </div>
        </motion.div>

        {/* Backup Frequency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Backup Frequency</h3>

          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "realtime", label: "Real-time" },
              { id: "hourly", label: "Hourly" },
              { id: "daily", label: "Daily" },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setBackupFrequency(option.id)}
                className={`p-4 rounded-xl border-2 transition-all text-center ${
                  backupFrequency === option.id
                    ? "bg-cyan-500/10 border-cyan-400/50 dark:border-cyan-400/30"
                    : "bg-white/10 border-white/30 dark:border-white/10 hover:bg-white/20"
                }`}
              >
                <span className={`text-sm font-medium ${
                  backupFrequency === option.id ? "text-cyan-600 dark:text-cyan-400" : "text-gray-600 dark:text-gray-400"
                }`}>
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Connected Storage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">Connected Storage</h3>

          <div className="space-y-3">
            {cloudServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      service.connected 
                        ? "bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30" 
                        : "bg-gray-200/30 dark:bg-gray-700/30 border border-gray-300/30 dark:border-gray-600/30"
                    }`}>
                      <Icon size={20} weight="duotone" className={service.connected ? "text-cyan-600 dark:text-cyan-400" : "text-gray-500"} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{service.name}</p>
                      {service.storage && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">{service.storage}</p>
                      )}
                    </div>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                    service.connected
                      ? "text-gray-600 dark:text-gray-400 hover:text-red-500"
                      : "bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/30"
                  }`}>
                    {service.connected ? "Disconnect" : "Connect"}
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-amber-500/10 dark:bg-amber-500/5 rounded-2xl border-2 border-amber-400/30 dark:border-amber-500/20 p-4"
        >
          <div className="flex items-start gap-3">
            <Warning size={20} weight="duotone" className="text-amber-600 dark:text-amber-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Storage almost full</p>
              <p className="text-xs text-amber-600/80 dark:text-amber-400/70 mt-1">
                Your Google Drive is 83% full. Consider upgrading or freeing up space.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
