"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Question,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Book,
  VideoCamera,
  ChatCircle,
  Envelope,
  CaretDown,
  Lightbulb,
  Wrench,
  CreditCard,
  UserCircle,
} from "@phosphor-icons/react";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

export default function HelpPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const categories = [
    { id: "getting-started", icon: Lightbulb, label: "Getting Started", count: 12 },
    { id: "account", icon: UserCircle, label: "Account & Profile", count: 8 },
    { id: "projects", icon: Wrench, label: "Projects & Editor", count: 15 },
    { id: "billing", icon: CreditCard, label: "Billing & Plans", count: 6 },
  ];

  const faqs: FAQ[] = [
    {
      id: "1",
      question: "How do I create my first project?",
      answer: "Click the 'New Project' button on your dashboard. You can start from scratch or choose from our templates. Give your project a name and you're ready to go!",
      category: "getting-started",
    },
    {
      id: "2",
      question: "Can I import 3D models from other software?",
      answer: "Yes! Teeli supports GLB, GLTF, FBX, and OBJ formats. Simply drag and drop your file into the editor or use the import button in the toolbar.",
      category: "projects",
    },
    {
      id: "3",
      question: "How do I upgrade my plan?",
      answer: "Go to Settings > Subscription and click 'Upgrade'. Choose your preferred plan and complete the payment. Your new features will be available immediately.",
      category: "billing",
    },
    {
      id: "4",
      question: "How can I share my projects with others?",
      answer: "Open your project, click the Share button in the top right, and choose your sharing options. You can create a public link or invite specific people via email.",
      category: "projects",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Help Center</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Find answers and get support</p>
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
            placeholder="Search for help..."
            className="w-full pl-12 pr-4 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-[80px] border-2 border-white/40 dark:border-white/20 rounded-2xl text-sm text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50"
          />
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Book, label: "Documentation", desc: "Guides & tutorials", color: "from-blue-500/25 to-indigo-500/25 border-blue-400/30 text-blue-600 dark:text-blue-400" },
            { icon: VideoCamera, label: "Video Tutorials", desc: "Learn visually", color: "from-purple-500/25 to-pink-500/25 border-purple-400/30 text-purple-600 dark:text-purple-400" },
            { icon: ChatCircle, label: "Live Chat", desc: "Talk to support", color: "from-green-500/25 to-emerald-500/25 border-green-400/30 text-green-600 dark:text-green-400" },
          ].map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-5 bg-white/20 dark:bg-white/10 backdrop-blur-[80px] rounded-2xl border-2 border-white/40 dark:border-white/20 text-left hover:bg-white/30 dark:hover:bg-white/15 transition-colors"
            >
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color.split(' ').slice(0, 3).join(' ')} border ${item.color.split(' ')[3]} flex items-center justify-center mb-3`}>
                <item.icon size={24} weight="duotone" className={item.color.split(' ').slice(-2).join(' ')} />
              </div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">{item.label}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-white/20 dark:border-white/10">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Browse by Category</h3>
          </div>
          <div className="divide-y divide-white/10 dark:divide-white/5">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="w-full p-5 flex items-center gap-4 text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30 flex items-center justify-center">
                  <category.icon size={18} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{category.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{category.count} articles</p>
                </div>
                <CaretRight size={16} weight="bold" className="text-gray-400" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-8"
        >
          <div className="p-6 border-b border-white/20 dark:border-white/10">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Frequently Asked Questions</h3>
          </div>
          <div className="divide-y divide-white/10 dark:divide-white/5">
            {filteredFAQs.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: expandedFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CaretDown size={16} weight="bold" className="text-gray-400" />
                  </motion.div>
                </button>
                {expandedFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border-2 border-cyan-400/30 p-6 text-center"
        >
          <Question size={40} weight="duotone" className="text-cyan-600 dark:text-cyan-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Still need help?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Our support team is here to assist you</p>
          <button className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium flex items-center gap-2 mx-auto">
            <Envelope size={18} weight="duotone" />
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
}
