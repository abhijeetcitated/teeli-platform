"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldCheck, CaretLeft } from "@phosphor-icons/react";

export default function PrivacyPolicyPage() {
  const router = useRouter();

  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, including:

**Account Information**
• Name and email address
• Password (encrypted)
• Profile picture and bio
• Payment information (processed by secure third parties)

**Usage Information**
• Projects and content you create
• Features you use
• Time spent on the platform
• Device and browser information

**Automatically Collected Information**
• IP address and location data
• Cookies and similar technologies
• Log data and analytics`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve the Service
• Process transactions and send related information
• Send technical notices and support messages
• Respond to your comments and questions
• Develop new features and services
• Monitor and analyze trends and usage
• Detect and prevent fraudulent transactions
• Personalize and improve your experience`,
    },
    {
      title: "3. Information Sharing",
      content: `We do not sell your personal information. We may share your information:

**With Your Consent**
When you explicitly agree to share information

**Service Providers**
Third parties who perform services on our behalf

**Legal Requirements**
When required by law or to protect our rights

**Business Transfers**
In connection with any merger or acquisition

**Aggregated Data**
Non-personally identifiable information may be shared publicly`,
    },
    {
      title: "4. Data Security",
      content: `We implement industry-standard security measures:

• SSL/TLS encryption for data in transit
• AES-256 encryption for data at rest
• Regular security audits and penetration testing
• Access controls and authentication
• Secure data centers with physical security

While we strive to protect your data, no method of transmission over the Internet is 100% secure.`,
    },
    {
      title: "5. Your Rights and Choices",
      content: `You have the right to:

**Access**: Request a copy of your personal data
**Correction**: Update or correct inaccurate data
**Deletion**: Request deletion of your account and data
**Portability**: Export your data in a portable format
**Objection**: Object to certain processing activities
**Restriction**: Request limited processing of your data

To exercise these rights, visit Settings > Privacy or contact us directly.`,
    },
    {
      title: "6. Cookies and Tracking",
      content: `We use cookies and similar technologies for:

**Essential Cookies**
Required for the Service to function properly

**Analytics Cookies**
Help us understand how users interact with the Service

**Preference Cookies**
Remember your settings and preferences

**Marketing Cookies** (optional)
Used to deliver relevant advertisements

You can manage cookie preferences in your browser settings.`,
    },
    {
      title: "7. Data Retention",
      content: `We retain your information for as long as:

• Your account is active
• Needed to provide you services
• Required by law
• Necessary for legitimate business purposes

After account deletion, we may retain certain data for legal compliance and fraud prevention for up to 90 days.`,
    },
    {
      title: "8. International Transfers",
      content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place, including:

• Standard Contractual Clauses
• Adequacy decisions
• Your explicit consent

We comply with applicable data protection laws for international transfers.`,
    },
    {
      title: "9. Children's Privacy",
      content: `Teeli is not intended for children under 13 (or 16 in certain jurisdictions). We do not knowingly collect information from children.

If you believe we have collected information from a child, please contact us immediately at privacy@teeli.net.`,
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via:

• Email notification
• In-app notification
• Notice on our website

Continued use of the Service after changes constitutes acceptance of the updated policy.`,
    },
    {
      title: "11. Contact Us",
      content: `For privacy-related questions or concerns:

**Email**: privacy@teeli.net
**Data Protection Officer**: dpo@teeli.net
**Address**: Mumbai, Maharashtra, India

We aim to respond to all requests within 30 days.

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Privacy Policy</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: December 5, 2024</p>
          </div>
        </motion.div>

        {/* GDPR Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-green-500/10 dark:bg-green-500/5 rounded-2xl border-2 border-green-400/30 dark:border-green-500/20 p-4 mb-6"
        >
          <div className="flex items-start gap-3">
            <ShieldCheck size={20} weight="duotone" className="text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-700 dark:text-green-400">GDPR Compliant</p>
              <p className="text-xs text-green-600/80 dark:text-green-400/70 mt-1">
                We comply with GDPR, CCPA, and other applicable privacy regulations to protect your data.
              </p>
            </div>
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
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-500/25 to-emerald-500/25 border border-green-400/30 flex items-center justify-center">
                <ShieldCheck size={20} weight="duotone" className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Teeli Privacy Policy</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Your privacy matters to us</p>
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
