"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Gear,
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  CaretRight,
  Moon,
  Sun,
  Key,
  DeviceMobile,
  Envelope,
  Info,
  Question,
  SignOut,
  Trash,
  Export,
  CloudArrowUp,
  Scales,
  FileText,
  ShieldCheck,
  Handshake,
  Keyboard,
  Sparkle,
  Desktop,
  LinkSimple,
  X,
  Check,
  Warning,
} from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const colorClasses = {
  blue: {
    bg: "from-blue-500/25 to-indigo-500/25 dark:from-blue-500/20 dark:to-indigo-500/20",
    border: "border-blue-400/30 dark:border-blue-400/20",
    icon: "text-blue-600 dark:text-blue-400",
  },
  amber: {
    bg: "from-amber-500/25 to-orange-500/25 dark:from-amber-500/20 dark:to-orange-500/20",
    border: "border-amber-400/30 dark:border-amber-400/20",
    icon: "text-amber-600 dark:text-amber-400",
  },
  green: {
    bg: "from-emerald-500/25 to-green-500/25 dark:from-emerald-500/20 dark:to-green-500/20",
    border: "border-emerald-400/30 dark:border-emerald-400/20",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  purple: {
    bg: "from-purple-500/25 to-violet-500/25 dark:from-purple-500/20 dark:to-violet-500/20",
    border: "border-purple-400/30 dark:border-purple-400/20",
    icon: "text-purple-600 dark:text-purple-400",
  },
  cyan: {
    bg: "from-cyan-500/25 to-teal-500/25 dark:from-cyan-500/20 dark:to-teal-500/20",
    border: "border-cyan-400/30 dark:border-cyan-400/20",
    icon: "text-cyan-600 dark:text-cyan-400",
  },
  pink: {
    bg: "from-pink-500/25 to-rose-500/25 dark:from-pink-500/20 dark:to-rose-500/20",
    border: "border-pink-400/30 dark:border-pink-400/20",
    icon: "text-pink-600 dark:text-pink-400",
  },
  slate: {
    bg: "from-slate-500/25 to-gray-500/25 dark:from-slate-500/20 dark:to-gray-500/20",
    border: "border-slate-400/30 dark:border-slate-400/20",
    icon: "text-slate-600 dark:text-slate-400",
  },
  red: {
    bg: "from-red-500/25 to-rose-500/25 dark:from-red-500/20 dark:to-rose-500/20",
    border: "border-red-400/30 dark:border-red-400/20",
    icon: "text-red-600 dark:text-red-400",
  },
};

// Card 1: Settings (Preferences)
const settingsItems = [
  { id: "account", icon: User, label: "Account", color: "blue", route: "/settings/account" },
  { id: "notifications", icon: Bell, label: "Notifications", color: "amber", route: "/settings/notifications" },
  { id: "privacy", icon: Shield, label: "Privacy", color: "green", route: "/settings/privacy" },
  { id: "appearance", icon: Palette, label: "Appearance", color: "purple", modal: "appearance" },
  { id: "language", icon: Globe, label: "Language & Region", color: "cyan", modal: "language" },
  { id: "backup", icon: CloudArrowUp, label: "Backup & Sync", color: "pink", route: "/settings/backup" },
];

// Card 2: Security
const securityItems = [
  { id: "password", icon: Key, label: "Change Password", color: "blue", modal: "password" },
  { id: "2fa", icon: DeviceMobile, label: "Two-Factor Auth", color: "green", route: "/settings/security/2fa" },
  { id: "email", icon: Envelope, label: "Email Verification", color: "amber", modal: "email" },
  { id: "sessions", icon: Desktop, label: "Active Sessions", color: "cyan", route: "/settings/sessions" },
  { id: "connections", icon: LinkSimple, label: "Connected Accounts", color: "purple", route: "/settings/connections" },
];

// Card 3: Help & More
const helpItems = [
  { id: "help", icon: Question, label: "Help Center", color: "purple", route: "/help" },
  { id: "about", icon: Info, label: "About Teeli", color: "cyan", route: "/about" },
  { id: "whatsnew", icon: Sparkle, label: "What's New", color: "pink", route: "/changelog" },
  { id: "shortcuts", icon: Keyboard, label: "Keyboard Shortcuts", color: "amber", route: "/settings/shortcuts" },
];

// Card 4: Account & Legal
const accountLegalItems = [
  { id: "export", icon: Export, label: "Export Data", color: "green", modal: "export" },
  { id: "signout", icon: SignOut, label: "Sign Out", color: "amber", modal: "signout" },
  { id: "terms", icon: FileText, label: "Terms of Service", color: "blue", route: "/legal/terms" },
  { id: "policy", icon: ShieldCheck, label: "Privacy Policy", color: "green", route: "/legal/privacy" },
  { id: "licensing", icon: Handshake, label: "Licensing", color: "purple", route: "/legal/licensing" },
];

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleItemClick = (item: { route?: string; modal?: string }) => {
    if (item.route) {
      router.push(item.route);
    } else if (item.modal) {
      setActiveModal(item.modal);
    }
  };

  const SettingsItem = ({ item, delay = 0 }: { item: typeof settingsItems[0]; delay?: number }) => {
    const Icon = item.icon;
    const colors = colorClasses[item.color as keyof typeof colorClasses];
    
    return (
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
        onClick={() => handleItemClick(item)}
        className="w-full p-3 rounded-xl flex items-center gap-3 text-left transition-colors group"
      >
        <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${colors.bg} border ${colors.border} backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]`}>
          <Icon size={18} weight="duotone" className={colors.icon} />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[14px] font-medium tracking-[-0.01em] text-gray-800 dark:text-white block">
            {item.label}
          </span>
        </div>
        <CaretRight size={14} weight="bold" className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
      </motion.button>
    );
  };

  return (
    <div className="relative w-full min-h-screen px-2 sm:p-4 md:p-6 md:pl-20 lg:pl-6 pt-20 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-28 2xl:pt-32 pb-24 sm:pb-6 xl:pb-8 xl:px-6 overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {/* Cards Grid - Responsive for all devices */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-5 justify-items-stretch xl:items-start">
        
        {/* Card 1: Settings (Preferences) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-5 border-b border-white/20 dark:border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-linear-to-br from-gray-500/25 to-slate-500/25 dark:from-gray-500/20 dark:to-slate-500/20 border border-gray-400/30 dark:border-gray-400/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <Gear size={18} weight="duotone" className="text-gray-600 dark:text-gray-300" />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-gray-800 dark:text-white">
                    Settings
                  </h3>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/20 dark:to-purple-500/20 border border-indigo-400/30 dark:border-indigo-400/20 backdrop-blur-sm flex items-center justify-center transition-colors hover:from-indigo-500/30 hover:to-purple-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
                >
                  {theme === "dark" ? (
                    <Moon size={16} weight="duotone" className="text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <Sun size={16} weight="duotone" className="text-amber-600" />
                  )}
                </motion.button>
              </div>
              <p className="text-[12px] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400 mt-1.5">
                Preferences
              </p>
            </div>

            {/* Settings List */}
            <div className="relative p-2.5">
              {settingsItems.map((item, index) => (
                <SettingsItem key={item.id} item={item} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Security */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-5 border-b border-white/20 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-blue-500/25 to-indigo-500/25 dark:from-blue-500/20 dark:to-indigo-500/20 border border-blue-400/30 dark:border-blue-400/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Shield size={18} weight="duotone" className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-gray-800 dark:text-white">
                  Security
                </h3>
              </div>
              <p className="text-[12px] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400 mt-1.5">
                Account protection
              </p>
            </div>

            {/* Security Options */}
            <div className="relative p-2.5">
              {securityItems.map((item, index) => (
                <SettingsItem key={item.id} item={item} delay={0.1 + index * 0.05} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Help & More */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-5 border-b border-white/20 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-purple-500/25 to-pink-500/25 dark:from-purple-500/20 dark:to-pink-500/20 border border-purple-400/30 dark:border-purple-400/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Question size={18} weight="duotone" className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-gray-800 dark:text-white">
                  Help & More
                </h3>
              </div>
              <p className="text-[12px] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400 mt-1.5">
                Support & resources
              </p>
            </div>

            {/* Help Options */}
            <div className="relative p-2.5">
              {helpItems.map((item, index) => (
                <SettingsItem key={item.id} item={item} delay={0.2 + index * 0.05} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 4: Account & Legal */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-white/30 via-white/8 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-5 border-b border-white/20 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-slate-500/25 to-gray-500/25 dark:from-slate-500/20 dark:to-gray-500/20 border border-slate-400/30 dark:border-slate-400/20 backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <Scales size={18} weight="duotone" className="text-slate-600 dark:text-slate-400" />
                </div>
                <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-gray-800 dark:text-white">
                  Account & Legal
                </h3>
              </div>
              <p className="text-[12px] font-medium tracking-[-0.01em] text-gray-500 dark:text-gray-400 mt-1.5">
                Data & policies
              </p>
            </div>

            {/* Account & Legal Options */}
            <div className="relative p-2.5">
              {accountLegalItems.map((item, index) => (
                <SettingsItem key={item.id} item={item} delay={0.3 + index * 0.05} />
              ))}
            </div>

            {/* Footer - Danger Zone */}
            <div className="relative p-4 border-t border-red-200/30 dark:border-red-500/10">
              <button 
                onClick={() => setActiveModal("delete")}
                className="w-full py-2.5 px-4 text-[13px] font-semibold tracking-[-0.01em] text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-all flex items-center justify-center gap-2 rounded-xl bg-red-500/5 dark:bg-red-500/10 hover:bg-red-500/10 dark:hover:bg-red-500/15 border border-red-300/30 dark:border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.08)] dark:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:shadow-[0_0_25px_rgba(239,68,68,0.15)] dark:hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
              >
                <Trash size={14} weight="duotone" />
                Delete Account
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Modals */}
      <AnimatePresence>
        {/* Appearance Modal */}
        {activeModal === "appearance" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500/25 to-violet-500/25 border border-purple-400/30 flex items-center justify-center">
                    <Palette size={20} weight="duotone" className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Appearance</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
              <div className="p-5 space-y-5">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Theme</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "light", icon: Sun, label: "Light" },
                      { id: "dark", icon: Moon, label: "Dark" },
                      { id: "system", icon: Desktop, label: "System" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                          theme === t.id
                            ? "bg-cyan-500/10 border-cyan-400/50 dark:border-cyan-400/30"
                            : "bg-white/10 border-white/30 dark:border-white/10 hover:bg-white/20"
                        }`}
                      >
                        <t.icon size={24} weight="duotone" className={theme === t.id ? "text-cyan-600 dark:text-cyan-400" : "text-gray-500 dark:text-gray-400"} />
                        <span className={`text-xs font-medium ${theme === t.id ? "text-cyan-600 dark:text-cyan-400" : "text-gray-600 dark:text-gray-400"}`}>
                          {t.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Accent Color</p>
                  <div className="flex gap-3">
                    {[
                      { name: "cyan", hex: "#06b6d4" },
                      { name: "blue", hex: "#3b82f6" },
                      { name: "purple", hex: "#a855f7" },
                      { name: "pink", hex: "#ec4899" },
                      { name: "amber", hex: "#f59e0b" },
                    ].map((color) => (
                      <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full ring-2 ring-offset-2 ring-offset-white/10 dark:ring-offset-black/20 ${
                          color.name === "cyan" ? "ring-cyan-400" : "ring-transparent hover:ring-white/30"
                        }`}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-sm"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Language Modal */}
        {activeModal === "language" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/25 to-teal-500/25 border border-cyan-400/30 flex items-center justify-center">
                    <Globe size={20} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Language & Region</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
                  <select className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50">
                    <option>English (US)</option>
                    <option>हिंदी (Hindi)</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>Deutsch</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
                  <select className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50">
                    <option>(UTC+05:30) India Standard Time</option>
                    <option>(UTC-08:00) Pacific Time</option>
                    <option>(UTC+00:00) London</option>
                    <option>(UTC+09:00) Tokyo</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date Format</label>
                  <select className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50">
                    <option>DD/MM/YYYY</option>
                    <option>MM/DD/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-sm"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Change Password Modal */}
        {activeModal === "password" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/25 to-indigo-500/25 border border-blue-400/30 flex items-center justify-center">
                    <Key size={20} weight="duotone" className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Change Password</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
                  />
                  <div className="flex gap-2 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> 8+ chars</span>
                    <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Uppercase</span>
                    <span className="flex items-center gap-1"><Check size={12} className="text-green-500" /> Number</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
              </div>
              <div className="flex gap-3 p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-sm"
                >
                  Update Password
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Email Verification Modal */}
        {activeModal === "email" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-amber-500/25 to-orange-500/25 border border-amber-400/30 flex items-center justify-center">
                    <Envelope size={20} weight="duotone" className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email Verification</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
              <div className="p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-400/30 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} weight="bold" className="text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your email is verified</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">abhijeet@teeli.net</p>
                
                <div className="mt-6 pt-6 border-t border-white/20 dark:border-white/10">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Change Email Address</p>
                  <input
                    type="email"
                    placeholder="newemail@example.com"
                    className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
              </div>
              <div className="flex gap-3 p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-sm"
                >
                  Send Verification
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Export Data Modal */}
        {activeModal === "export" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500/25 to-emerald-500/25 border border-green-400/30 flex items-center justify-center">
                    <Export size={20} weight="duotone" className="text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Export Your Data</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Download a copy of your Teeli data</p>
                <div className="space-y-2">
                  {["Profile Information", "Projects & Files", "Renders & Exports", "Settings & Preferences"].map((item, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 bg-white/10 dark:bg-white/5 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-400 text-cyan-500 focus:ring-cyan-500" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Format</label>
                  <select className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50">
                    <option>ZIP (Recommended)</option>
                    <option>JSON</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2.5 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium text-sm"
                >
                  Request Export
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Sign Out Modal */}
        {activeModal === "signout" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-none overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border-2 border-amber-400/30 flex items-center justify-center mx-auto mb-4">
                  <SignOut size={32} weight="duotone" className="text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Sign Out</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Are you sure you want to sign out?</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">abhijeet@teeli.net</p>
                
                <label className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-400 text-cyan-500 focus:ring-cyan-500" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">Sign out from all devices</span>
                </label>
              </div>
              <div className="flex gap-3 p-5 border-t border-white/20 dark:border-white/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2.5 bg-linear-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium text-sm"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Delete Account Modal */}
        {activeModal === "delete" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-red-300/30 dark:border-red-500/20 shadow-[0_8px_32px_rgba(239,68,68,0.15)] dark:shadow-none overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-400/30 flex items-center justify-center mx-auto mb-4">
                  <Warning size={32} weight="duotone" className="text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">Delete Account</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">This action is <strong>permanent</strong> and cannot be undone.</p>
                
                <div className="text-left bg-red-500/5 dark:bg-red-500/10 border border-red-300/30 dark:border-red-500/20 rounded-xl p-4 mb-4">
                  <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">This will permanently delete:</p>
                  <ul className="text-xs text-red-600/80 dark:text-red-400/80 space-y-1">
                    <li>❌ All your projects</li>
                    <li>❌ All your renders</li>
                    <li>❌ Your subscription</li>
                    <li>❌ Your profile data</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 text-left">Type &quot;DELETE&quot; to confirm</label>
                    <input
                      type="text"
                      placeholder="DELETE"
                      className="w-full px-4 py-2.5 bg-white/20 dark:bg-white/10 border-2 border-red-300/30 dark:border-red-500/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-red-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5 text-left">Enter your password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 bg-white/20 dark:bg-white/10 border-2 border-red-300/30 dark:border-red-500/20 rounded-xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-red-400/50"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 p-5 border-t border-red-200/30 dark:border-red-500/10">
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-2.5 bg-linear-to-r from-red-500 to-rose-500 text-white rounded-xl font-medium text-sm shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                >
                  Delete Forever
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
