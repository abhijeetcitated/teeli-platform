"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FileText, CaretLeft } from "@phosphor-icons/react";

export default function TermsPage() {
  const router = useRouter();

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using Teeli ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.

These Terms of Service ("Terms") govern your access to and use of the Teeli platform, including our website, applications, APIs, and all related services.`,
    },
    {
      title: "2. Description of Service",
      content: `Teeli is a cloud-based 3D design and modeling platform that allows users to:
• Create, edit, and manipulate 3D models
• Store projects in the cloud
• Collaborate with other users
• Export and share their creations

We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time without prior notice.`,
    },
    {
      title: "3. User Accounts",
      content: `To access certain features of the Service, you must create an account. You agree to:
• Provide accurate, current, and complete information
• Maintain the security of your password
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

We reserve the right to suspend or terminate accounts that violate these Terms.`,
    },
    {
      title: "4. User Content",
      content: `You retain ownership of content you create using the Service ("User Content"). By uploading or creating content, you grant Teeli a worldwide, non-exclusive, royalty-free license to:
• Host and store your content
• Display your content as directed by you
• Create backups and perform technical operations

You are solely responsible for your User Content and represent that you have all necessary rights to use it.`,
    },
    {
      title: "5. Intellectual Property",
      content: `The Service and its original content, features, and functionality are owned by Teeli and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

Our trademarks and trade dress may not be used without our prior written permission.`,
    },
    {
      title: "6. Prohibited Uses",
      content: `You agree not to use the Service to:
• Violate any laws or regulations
• Infringe on intellectual property rights
• Transmit malicious code or viruses
• Attempt to gain unauthorized access
• Harass, abuse, or harm others
• Engage in fraudulent activities
• Reverse engineer or copy the Service`,
    },
    {
      title: "7. Payment Terms",
      content: `Some features require a paid subscription. By subscribing, you agree to:
• Pay all applicable fees
• Provide valid payment information
• Accept automatic renewal unless cancelled

Refunds are handled according to our Refund Policy. We may change pricing with 30 days notice.`,
    },
    {
      title: "8. Termination",
      content: `We may terminate or suspend your account and access to the Service immediately, without prior notice, for:
• Breach of these Terms
• Request by law enforcement
• Discontinuation of the Service
• Unexpected technical issues

Upon termination, your right to use the Service will immediately cease.`,
    },
    {
      title: "9. Limitation of Liability",
      content: `To the maximum extent permitted by law, Teeli shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including:
• Loss of profits, data, or goodwill
• Service interruption
• Computer damage or system failure

Our total liability shall not exceed the amount you paid us in the past twelve months.`,
    },
    {
      title: "10. Changes to Terms",
      content: `We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or through the Service.

Continued use of the Service after changes constitutes acceptance of the new Terms.`,
    },
    {
      title: "11. Contact Information",
      content: `If you have any questions about these Terms, please contact us at:

Email: legal@teeli.net
Address: Mumbai, Maharashtra, India

Last updated: December 5, 2024`,
    },
  ];

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 5, 2024</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="p-6 border-b border-white/20 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500/25 to-indigo-500/25 border border-blue-400/30 flex items-center justify-center">
                <FileText size={20} weight="duotone" className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Teeli Terms of Service</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Please read these terms carefully</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.02 }}
              >
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-3">{section.title}</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
