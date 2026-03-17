"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LinkSimple,
  CaretLeft,
  GoogleLogo,
  GithubLogo,
  DiscordLogo,
  AppleLogo,
  Check,
  Plus,
  Trash,
} from "@phosphor-icons/react";

type Connection = {
  id: string;
  name: string;
  icon: typeof GoogleLogo;
  connected: boolean;
  email?: string;
  username?: string;
  connectedAt?: string;
  color: string;
};

export default function ConnectionsPage() {
  const router = useRouter();
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: "google",
      name: "Google",
      icon: GoogleLogo,
      connected: true,
      email: "abhijeet@gmail.com",
      connectedAt: "Connected Dec 2024",
      color: "from-red-500/25 to-orange-500/25 border-red-400/30 text-red-600 dark:text-red-400",
    },
    {
      id: "github",
      name: "GitHub",
      icon: GithubLogo,
      connected: true,
      username: "@abhijeet",
      connectedAt: "Connected Dec 2024",
      color: "from-gray-500/25 to-slate-500/25 border-gray-400/30 text-gray-600 dark:text-gray-400",
    },
    {
      id: "discord",
      name: "Discord",
      icon: DiscordLogo,
      connected: false,
      color: "from-indigo-500/25 to-purple-500/25 border-indigo-400/30 text-indigo-600 dark:text-indigo-400",
    },
    {
      id: "apple",
      name: "Apple",
      icon: AppleLogo,
      connected: false,
      color: "from-gray-500/25 to-slate-500/25 border-gray-400/30 text-gray-600 dark:text-gray-400",
    },
  ]);

  const toggleConnection = (id: string) => {
    setConnections((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              connected: !c.connected,
              connectedAt: !c.connected ? "Connected just now" : undefined,
            }
          : c
      )
    );
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connected Accounts</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Link your accounts for easy sign-in</p>
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-cyan-500/10 dark:bg-cyan-500/5 rounded-2xl border-2 border-cyan-400/30 dark:border-cyan-500/20 p-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <LinkSimple size={20} weight="duotone" className="text-cyan-600 dark:text-cyan-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400">Why connect accounts?</p>
              <p className="text-xs text-cyan-600/80 dark:text-cyan-400/70 mt-1">
                Connected accounts allow you to sign in faster and import projects directly from your linked services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="p-6 border-b border-white/20 dark:border-white/10">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Available Connections</h3>
          </div>

          <div className="divide-y divide-white/10 dark:divide-white/5">
            {connections.map((connection, index) => {
              const Icon = connection.icon;
              return (
                <motion.div
                  key={connection.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="p-6 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${connection.color.split(' ').slice(0, 3).join(' ')} border ${connection.color.split(' ')[3]} flex items-center justify-center`}>
                      <Icon size={24} weight="duotone" className={connection.color.split(' ').slice(-2).join(' ')} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{connection.name}</p>
                      {connection.connected ? (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {connection.email || connection.username}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{connection.connectedAt}</span>
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Not connected</p>
                      )}
                    </div>
                    {connection.connected ? (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-3 py-1.5 bg-green-500/10 rounded-full">
                          <Check size={12} weight="bold" className="text-green-500" />
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">Connected</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleConnection(connection.id)}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash size={16} weight="duotone" />
                        </motion.button>
                      </div>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleConnection(connection.id)}
                        className="px-4 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium flex items-center gap-2"
                      >
                        <Plus size={16} weight="bold" />
                        Connect
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
