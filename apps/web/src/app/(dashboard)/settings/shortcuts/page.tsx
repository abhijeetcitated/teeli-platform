"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Keyboard,
  CaretLeft,
  MagnifyingGlass,
  Command,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";

type Shortcut = {
  keys: string[];
  description: string;
  category: string;
};

export default function ShortcutsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const shortcuts: Shortcut[] = [
    // General
    { keys: ["Ctrl", "S"], description: "Save project", category: "General" },
    { keys: ["Ctrl", "Z"], description: "Undo", category: "General" },
    { keys: ["Ctrl", "Shift", "Z"], description: "Redo", category: "General" },
    { keys: ["Ctrl", "N"], description: "New project", category: "General" },
    { keys: ["Ctrl", "O"], description: "Open project", category: "General" },
    { keys: ["Ctrl", ","], description: "Open settings", category: "General" },
    { keys: ["?"], description: "Show keyboard shortcuts", category: "General" },

    // Navigation
    { keys: ["Space"], description: "Pan view (hold)", category: "Navigation" },
    { keys: ["Scroll"], description: "Zoom in/out", category: "Navigation" },
    { keys: ["Right Click"], description: "Rotate view (hold)", category: "Navigation" },
    { keys: ["F"], description: "Focus on selection", category: "Navigation" },
    { keys: ["H"], description: "Reset view", category: "Navigation" },
    { keys: ["Numpad 1"], description: "Front view", category: "Navigation" },
    { keys: ["Numpad 3"], description: "Right view", category: "Navigation" },
    { keys: ["Numpad 7"], description: "Top view", category: "Navigation" },

    // Tools
    { keys: ["G"], description: "Move tool", category: "Tools" },
    { keys: ["R"], description: "Rotate tool", category: "Tools" },
    { keys: ["S"], description: "Scale tool", category: "Tools" },
    { keys: ["T"], description: "Transform tool", category: "Tools" },
    { keys: ["X"], description: "Constrain to X axis", category: "Tools" },
    { keys: ["Y"], description: "Constrain to Y axis", category: "Tools" },
    { keys: ["Z"], description: "Constrain to Z axis", category: "Tools" },

    // Selection
    { keys: ["A"], description: "Select all", category: "Selection" },
    { keys: ["Ctrl", "A"], description: "Select all objects", category: "Selection" },
    { keys: ["Ctrl", "D"], description: "Deselect all", category: "Selection" },
    { keys: ["Shift", "Click"], description: "Add to selection", category: "Selection" },
    { keys: ["Delete"], description: "Delete selection", category: "Selection" },
    { keys: ["Ctrl", "C"], description: "Copy", category: "Selection" },
    { keys: ["Ctrl", "V"], description: "Paste", category: "Selection" },
    { keys: ["Ctrl", "Shift", "D"], description: "Duplicate", category: "Selection" },
  ];

  const categories = [...new Set(shortcuts.map((s) => s.category))];

  const filteredShortcuts = shortcuts.filter(
    (s) =>
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.keys.join(" ").toLowerCase().includes(searchQuery.toLowerCase())
  );

  const KeyCap = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 shadow-[0_2px_0_rgba(0,0,0,0.1)] dark:shadow-[0_2px_0_rgba(0,0,0,0.3)]">
      {children}
    </span>
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Keyboard Shortcuts</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Master the editor with shortcuts</p>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-8"
        >
          <MagnifyingGlass size={20} weight="duotone" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search shortcuts..."
            className="w-full pl-12 pr-4 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-[80px] border-2 border-white/40 dark:border-white/20 rounded-2xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
          />
        </motion.div>

        {/* Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border-2 border-cyan-400/30 p-6 mb-8"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Quick Reference</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                <Command size={20} className="text-gray-600 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Modifier</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Ctrl / Cmd</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                <div className="flex gap-0.5">
                  <ArrowUp size={12} className="text-gray-600 dark:text-gray-400" />
                  <ArrowDown size={12} className="text-gray-600 dark:text-gray-400" />
                  <ArrowLeft size={12} className="text-gray-600 dark:text-gray-400" />
                  <ArrowRight size={12} className="text-gray-600 dark:text-gray-400" />
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Navigation</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Arrow Keys</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shortcuts by Category */}
        {categories.map((category, catIndex) => {
          const categoryShortcuts = filteredShortcuts.filter((s) => s.category === category);
          if (categoryShortcuts.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + catIndex * 0.05 }}
              className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6"
            >
              <div className="p-5 border-b border-white/20 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30 flex items-center justify-center">
                    <Keyboard size={16} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{category}</h3>
                </div>
              </div>
              <div className="divide-y divide-white/10 dark:divide-white/5">
                {categoryShortcuts.map((shortcut, index) => (
                  <div
                    key={index}
                    className="px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{shortcut.description}</span>
                    <div className="flex items-center gap-1.5">
                      {shortcut.keys.map((key, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <KeyCap>{key}</KeyCap>
                          {i < shortcut.keys.length - 1 && (
                            <span className="text-xs text-gray-400">+</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {filteredShortcuts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Keyboard size={48} weight="duotone" className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No shortcuts found for &quot;{searchQuery}&quot;</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
