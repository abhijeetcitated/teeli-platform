"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Handshake,
  CaretLeft,
  CaretDown,
  Code,
  Heart,
  Link,
} from "@phosphor-icons/react";

type License = {
  name: string;
  version: string;
  license: string;
  url: string;
  description: string;
};

export default function LicensingPage() {
  const router = useRouter();
  const [expandedCategory, setExpandedCategory] = useState<string | null>("core");

  const licenseCategories = {
    core: {
      title: "Core Technologies",
      licenses: [
        { name: "React", version: "19.0.0", license: "MIT", url: "https://react.dev", description: "A JavaScript library for building user interfaces" },
        { name: "Next.js", version: "16.0.5", license: "MIT", url: "https://nextjs.org", description: "The React Framework for the Web" },
        { name: "TypeScript", version: "5.6.3", license: "Apache-2.0", url: "https://typescriptlang.org", description: "JavaScript with syntax for types" },
      ],
    },
    ui: {
      title: "UI & Styling",
      licenses: [
        { name: "Tailwind CSS", version: "4.0.0", license: "MIT", url: "https://tailwindcss.com", description: "A utility-first CSS framework" },
        { name: "Framer Motion", version: "11.x", license: "MIT", url: "https://framer.com/motion", description: "Production-ready motion library" },
        { name: "Phosphor Icons", version: "2.x", license: "MIT", url: "https://phosphoricons.com", description: "Flexible icon family" },
      ],
    },
    "3d": {
      title: "3D & Graphics",
      licenses: [
        { name: "Three.js", version: "0.170.x", license: "MIT", url: "https://threejs.org", description: "3D library for the web" },
        { name: "React Three Fiber", version: "8.x", license: "MIT", url: "https://r3f.docs.pmnd.rs", description: "React renderer for Three.js" },
        { name: "Drei", version: "9.x", license: "MIT", url: "https://drei.pmnd.rs", description: "Useful helpers for R3F" },
      ],
    },
    utils: {
      title: "Utilities",
      licenses: [
        { name: "date-fns", version: "3.x", license: "MIT", url: "https://date-fns.org", description: "Modern JavaScript date utility" },
        { name: "Zustand", version: "4.x", license: "MIT", url: "https://zustand-demo.pmnd.rs", description: "State management" },
        { name: "clsx", version: "2.x", license: "MIT", url: "https://github.com/lukeed/clsx", description: "Classname utility" },
      ],
    },
  };

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 md:pl-24 lg:pl-8 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Licensing</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Open source acknowledgements</p>
          </div>
        </motion.div>

        {/* Teeli License */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-linear-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl border-2 border-cyan-400/30 p-6 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Handshake size={24} weight="duotone" className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Teeli Platform</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proprietary License</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            The Teeli platform and its source code are proprietary and protected by copyright law. 
            Unauthorized copying, modification, or distribution is prohibited.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span>© 2024 Teeli Inc. All rights reserved.</span>
          </div>
        </motion.div>

        {/* Open Source Acknowledgement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-purple-500/10 dark:bg-purple-500/5 rounded-2xl border-2 border-purple-400/30 dark:border-purple-500/20 p-4 mb-8"
        >
          <div className="flex items-start gap-3">
            <Heart size={20} weight="duotone" className="text-purple-600 dark:text-purple-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Built with Open Source</p>
              <p className="text-xs text-purple-600/80 dark:text-purple-400/70 mt-1">
                Teeli is built on the shoulders of amazing open source projects. We&apos;re grateful to their maintainers and contributors.
              </p>
            </div>
          </div>
        </motion.div>

        {/* License Categories */}
        {Object.entries(licenseCategories).map(([key, category], catIndex) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + catIndex * 0.05 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-4"
          >
            <button
              onClick={() => setExpandedCategory(expandedCategory === key ? null : key)}
              className="w-full p-5 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30 flex items-center justify-center">
                  <Code size={18} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">{category.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{category.licenses.length} packages</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedCategory === key ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <CaretDown size={16} weight="bold" className="text-gray-400" />
              </motion.div>
            </button>

            {expandedCategory === key && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="border-t border-white/20 dark:border-white/10"
              >
                <div className="divide-y divide-white/10 dark:divide-white/5">
                  {category.licenses.map((license, index) => (
                    <div key={index} className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-medium text-gray-800 dark:text-white">{license.name}</h4>
                          <span className="px-2 py-0.5 bg-cyan-500/10 rounded text-[10px] font-medium text-cyan-600 dark:text-cyan-400">
                            v{license.version}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 bg-gray-500/10 rounded text-[10px] font-medium text-gray-600 dark:text-gray-400">
                          {license.license}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{license.description}</p>
                      <a
                        href={license.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:underline"
                      >
                        <Link size={12} weight="duotone" />
                        {license.url}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* Full License Texts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center py-6"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Full license texts are available in our GitHub repository
          </p>
          <a
            href="https://github.com/teeli/licenses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-white/30 dark:hover:bg-white/15 transition-colors"
          >
            <Code size={16} weight="duotone" />
            View on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
}
