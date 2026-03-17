"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  CaretLeft,
  Cube,
  Users,
  Rocket,
  Brain,
  Shield,
  ChartLineUp,
  Trophy,
  Target,
  Cpu,
  Cloud,
  ArrowRight,
  CheckCircle,
  Gear,
  Sparkle,
  LinkedinLogo,
  TwitterLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

export default function AboutPage() {
  const router = useRouter();

  const platformStats = [
    { value: "10K+", label: "Active Users", growth: "+340% YoY" },
    { value: "500K+", label: "3D Models Created", growth: "+280% QoQ" },
    { value: "50+", label: "Countries", growth: "Global Reach" },
    { value: "99.9%", label: "Platform Uptime", growth: "Enterprise SLA" },
  ];

  const techStack = [
    { name: "Three.js", category: "3D Rendering" },
    { name: "WebGL 2.0", category: "Graphics" },
    { name: "React 19", category: "Frontend" },
    { name: "Next.js 16", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animations" },
    { name: "TensorFlow.js", category: "AI/ML" },
  ];

  const features = [
    { icon: Brain, title: "AI-Powered Generation", desc: "Text-to-3D and image-to-3D using diffusion models", color: "purple" },
    { icon: Cpu, title: "Real-time Collaboration", desc: "Multi-user editing with WebSocket sync", color: "blue" },
    { icon: Cloud, title: "Cloud-Native Architecture", desc: "Serverless, edge computing, global CDN", color: "cyan" },
    { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliant, end-to-end encryption", color: "green" },
  ];

  const marketOpportunity = [
    { metric: "$5.8B", label: "Global 3D Software Market 2024" },
    { metric: "15.7%", label: "CAGR (2024-2030)" },
    { metric: "$15.2B", label: "Projected Market Size 2030" },
  ];

  const roadmap = [
    { phase: "Phase 1", title: "Foundation", status: "completed", items: ["Core 3D Editor", "User Auth", "Cloud Storage", "Basic Export"] },
    { phase: "Phase 2", title: "Growth", status: "current", items: ["AI Text-to-3D", "Real-time Collab", "Plugin Marketplace", "Mobile App"] },
    { phase: "Phase 3", title: "Scale", status: "upcoming", items: ["Enterprise API", "AR/VR Integration", "NFTs", "White-label"] },
    { phase: "Phase 4", title: "Expansion", status: "upcoming", items: ["Metaverse SDK", "Game Engine Export", "Industrial CAD", "Global CDN"] },
  ];

  const partners = [
    { name: "Microsoft for Startups", type: "Azure Credits", emoji: "☁️" },
    { name: "AWS Activate", type: "Cloud Credits", emoji: "🟠" },
    { name: "Google Cloud", type: "Startup Program", emoji: "🔵" },
    { name: "NVIDIA Inception", type: "AI Program", emoji: "💚" },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
    purple: { bg: "from-purple-500/20 to-violet-500/20", icon: "text-purple-600 dark:text-purple-400", border: "border-purple-400/30" },
    blue: { bg: "from-blue-500/20 to-indigo-500/20", icon: "text-blue-600 dark:text-blue-400", border: "border-blue-400/30" },
    cyan: { bg: "from-cyan-500/20 to-teal-500/20", icon: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-400/30" },
    green: { bg: "from-emerald-500/20 to-green-500/20", icon: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-400/30" },
  };

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 md:pl-24 lg:pl-8 pt-20 sm:pt-24 md:pt-28 pb-24 sm:pb-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-8">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => router.push("/settings")} className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center">
            <CaretLeft size={20} weight="bold" className="text-gray-600 dark:text-gray-400" />
          </motion.button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Teeli</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Platform Overview & Company Information</p>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative bg-linear-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl border-2 border-white/40 dark:border-white/20 p-8 sm:p-12 mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <Cube size={56} weight="duotone" className="text-white" />
              </div>
            </motion.div>
            <div className="text-center lg:text-left flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-xs font-semibold text-cyan-700 dark:text-cyan-300">🚀 Y Combinator Track</span>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-semibold text-purple-700 dark:text-purple-300">Pre-Seed Stage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Teeli Platform</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                The AI-powered 3D creation platform democratizing spatial computing. We are building the <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Figma for 3D</span> — enabling anyone to create professional 3D content without technical expertise.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                <a href="https://linkedin.com/company/teeli" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/20 transition-colors">
                  <LinkedinLogo size={20} weight="fill" className="text-blue-600 dark:text-blue-400" />
                </a>
                <a href="https://twitter.com/teeliapp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/20 transition-colors">
                  <TwitterLogo size={20} weight="fill" className="text-gray-800 dark:text-gray-200" />
                </a>
                <a href="mailto:hello@teeli.net" className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/10 flex items-center justify-center hover:bg-white/30 dark:hover:bg-white/20 transition-colors">
                  <EnvelopeSimple size={20} weight="duotone" className="text-gray-600 dark:text-gray-400" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {platformStats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + index * 0.05 }} className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 p-5 text-center relative overflow-hidden group hover:bg-white/30 dark:hover:bg-white/15 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{stat.label}</div>
              <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{stat.growth}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Problem & Solution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-red-400/30 dark:border-red-400/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-orange-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Target size={20} weight="duotone" className="text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">The Problem</h3>
            </div>
            <ul className="space-y-3">
              {["3D software has steep learning curve (6+ months)", "Professional tools cost $2,000-5,000/year", "No real-time collaboration features", "Complex export workflows for web/AR/VR", "AI tools are siloed and expensive"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-red-500 mt-0.5">✗</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-emerald-400/30 dark:border-emerald-400/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 to-cyan-500" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle size={20} weight="duotone" className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Our Solution</h3>
            </div>
            <ul className="space-y-3">
              {["Intuitive interface — create in minutes, not months", "Freemium model with affordable Pro tier ($19/mo)", "Real-time multiplayer collaboration", "One-click export to 20+ formats", "Built-in AI: Text-to-3D, Image-to-3D, Auto-rigging"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="text-emerald-500 mt-0.5">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Sparkle size={24} weight="duotone" className="text-purple-500" />Core Capabilities
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color];
              return (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.05 }} className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 p-5 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${colors.bg}`} />
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
                      <Icon size={24} weight="duotone" className={colors.icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Market Opportunity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border-2 border-white/40 dark:border-white/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <ChartLineUp size={24} weight="duotone" className="text-blue-500" />Market Opportunity
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {marketOpportunity.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{item.metric}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white/20 dark:bg-white/10 rounded-xl p-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <span className="font-semibold text-gray-900 dark:text-white">Target Segments:</span> Game developers, AR/VR creators, e-commerce (3D product visualization), architects, marketing agencies, educators, and individual creators.
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Gear size={24} weight="duotone" className="text-gray-500" />Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <div key={tech.name} className="px-4 py-2 rounded-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20">
                <span className="text-sm font-medium text-gray-800 dark:text-white">{tech.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">• {tech.category}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Product Roadmap */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Rocket size={24} weight="duotone" className="text-orange-500" />Product Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.map((phase) => (
              <div key={phase.phase} className={`bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 p-5 relative overflow-hidden ${phase.status === "completed" ? "border-emerald-400/40" : phase.status === "current" ? "border-blue-400/40" : "border-white/60 dark:border-white/20"}`}>
                <div className={`absolute top-0 left-0 right-0 h-1 ${phase.status === "completed" ? "bg-emerald-500" : phase.status === "current" ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-700"}`} />
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">{phase.phase}</span>
                  {phase.status === "completed" && <CheckCircle size={16} weight="bold" className="text-emerald-500" />}
                  {phase.status === "current" && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{phase.title}</h4>
                <ul className="space-y-1.5">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5">
                      <span className={`w-1 h-1 rounded-full ${phase.status === "completed" ? "bg-emerald-500" : "bg-gray-400"}`} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partners & Programs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="bg-linear-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-2xl border-2 border-amber-400/30 dark:border-amber-400/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Trophy size={24} weight="duotone" className="text-amber-500" />Startup Programs & Partners
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white/30 dark:bg-white/10 rounded-xl p-4 text-center border border-white/40 dark:border-white/20">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <span className="text-2xl">{partner.emoji}</span>
                </div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white mb-1">{partner.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{partner.type}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 p-4 bg-white/20 dark:bg-white/10 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              <span className="font-semibold text-gray-900 dark:text-white">Actively seeking:</span> Pre-seed funding, strategic partnerships, and enterprise pilot customers.
            </p>
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            <Users size={24} weight="duotone" className="text-blue-500" />Leadership
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl">AS</div>
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">Abhijeet Pratap Singh</h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Full-stack developer and 3D enthusiast with expertise in WebGL, Three.js, and AI/ML. Previously built products reaching 100K+ users. Passionate about democratizing 3D creation.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
                <a href="https://linkedin.com/in/abhijeet-pratap-singh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  <LinkedinLogo size={16} weight="fill" />LinkedIn
                </a>
                <a href="https://twitter.com/abhijeetps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  <TwitterLogo size={16} weight="fill" />Twitter
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="bg-linear-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl border-2 border-white/40 dark:border-white/20 p-8 text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Interested in Partnering?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
            Whether you are an investor, potential partner, or enterprise customer, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@teeli.net" className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow flex items-center gap-2">
              <EnvelopeSimple size={18} weight="duotone" />Contact Us
            </a>
            <a href="https://teeli.net/pitch" className="px-6 py-3 rounded-xl bg-white/30 dark:bg-white/10 border border-white/40 dark:border-white/20 text-gray-900 dark:text-white font-semibold hover:bg-white/50 dark:hover:bg-white/20 transition-colors flex items-center gap-2">
              <Rocket size={18} weight="duotone" />View Pitch Deck
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p className="mb-2">Teeli Technologies Pvt. Ltd. • Mumbai, India 🇮🇳</p>
          <p>Version 1.0.0 • © 2024-2025 All rights reserved.</p>
        </motion.div>
      </div>
    </div>
  );
}
