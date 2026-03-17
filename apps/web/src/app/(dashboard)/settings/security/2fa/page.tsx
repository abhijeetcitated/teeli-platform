"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DeviceMobile,
  CaretLeft,
  ShieldCheck,
  QrCode,
  Key,
  Copy,
  Check,
  Warning,
  ArrowRight,
} from "@phosphor-icons/react";

export default function TwoFactorAuthPage() {
  const router = useRouter();
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [step, setStep] = useState<"overview" | "setup" | "verify" | "backup">("overview");
  const [verificationCode, setVerificationCode] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const backupCodes = [
    "ABCD-1234-EFGH",
    "IJKL-5678-MNOP",
    "QRST-9012-UVWX",
    "YZAB-3456-CDEF",
    "GHIJ-7890-KLMN",
    "OPQR-1234-STUV",
    "WXYZ-5678-ABCD",
    "EFGH-9012-IJKL",
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
            onClick={() => step === "overview" ? router.push("/settings") : setStep("overview")}
            className="w-10 h-10 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 dark:border-white/10 flex items-center justify-center"
          >
            <CaretLeft size={20} weight="bold" className="text-gray-600 dark:text-gray-400" />
          </motion.button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Two-Factor Authentication</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
          </div>
        </motion.div>

        {step === "overview" && (
          <>
            {/* Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    is2FAEnabled 
                      ? "bg-linear-to-br from-green-500/25 to-emerald-500/25 border border-green-400/30"
                      : "bg-linear-to-br from-amber-500/25 to-orange-500/25 border border-amber-400/30"
                  }`}>
                    <ShieldCheck size={28} weight="duotone" className={is2FAEnabled ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {is2FAEnabled ? "2FA is Enabled" : "2FA is Disabled"}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {is2FAEnabled ? "Your account is protected" : "Enable for better security"}
                    </p>
                  </div>
                </div>
                <Toggle enabled={is2FAEnabled} onChange={() => is2FAEnabled ? setIs2FAEnabled(false) : setStep("setup")} />
              </div>
            </motion.div>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6 p-6"
            >
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-5">How it works</h3>
              
              <div className="space-y-4">
                {[
                  { icon: DeviceMobile, title: "Use an authenticator app", desc: "Like Google Authenticator or Authy" },
                  { icon: QrCode, title: "Scan the QR code", desc: "Link your account to the app" },
                  { icon: Key, title: "Enter the code", desc: "Use the 6-digit code to verify" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-cyan-500/25 to-blue-500/25 border border-cyan-400/30 flex items-center justify-center">
                      <item.icon size={18} weight="duotone" className="text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Backup Codes */}
            {is2FAEnabled && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">Backup Codes</h3>
                  <button 
                    onClick={() => setStep("backup")}
                    className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    View All
                  </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Use these codes if you lose access to your authenticator
                </p>
                <div className="flex items-center gap-2">
                  <code className="px-3 py-2 bg-white/20 dark:bg-white/10 rounded-lg text-sm font-mono text-gray-800 dark:text-white">
                    {backupCodes[0]}
                  </code>
                  <span className="text-xs text-gray-500">+7 more</span>
                </div>
              </motion.div>
            )}
          </>
        )}

        {step === "setup" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Scan QR Code</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Open your authenticator app and scan this code
            </p>

            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center">
                <QrCode size={140} weight="duotone" className="text-gray-800" />
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Can&apos;t scan? Enter this code manually:</p>
              <div className="flex items-center justify-center gap-2">
                <code className="px-4 py-2 bg-white/20 dark:bg-white/10 rounded-lg text-sm font-mono text-gray-800 dark:text-white tracking-widest">
                  JBSWY3DPEHPK3PXP
                </code>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyCode("JBSWY3DPEHPK3PXP")}
                  className="p-2 rounded-lg bg-white/20 dark:bg-white/10"
                >
                  {copiedCode === "JBSWY3DPEHPK3PXP" ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="text-gray-500" />
                  )}
                </motion.button>
              </div>
            </div>

            <button
              onClick={() => setStep("verify")}
              className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight size={18} weight="bold" />
            </button>
          </motion.div>
        )}

        {step === "verify" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Enter Verification Code</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Enter the 6-digit code from your authenticator app
            </p>

            <input
              type="text"
              maxLength={6}
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ""))}
              placeholder="000000"
              className="w-full px-4 py-4 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-2xl font-mono text-center tracking-[0.5em] text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 mb-6"
            />

            <button
              onClick={() => {
                setIs2FAEnabled(true);
                setStep("backup");
              }}
              disabled={verificationCode.length !== 6}
              className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify & Enable
            </button>
          </motion.div>
        )}

        {step === "backup" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <Check size={24} weight="bold" className="text-green-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">2FA Enabled!</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Save these backup codes in a safe place
            </p>

            <div className="bg-amber-500/10 dark:bg-amber-500/5 rounded-xl border border-amber-400/30 p-4 mb-6">
              <div className="flex items-start gap-2">
                <Warning size={18} weight="duotone" className="text-amber-600 dark:text-amber-400 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  Each code can only be used once. Store them securely offline.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6">
              {backupCodes.map((code) => (
                <div
                  key={code}
                  className="flex items-center justify-between px-3 py-2 bg-white/10 dark:bg-white/5 rounded-lg"
                >
                  <code className="text-xs font-mono text-gray-700 dark:text-gray-300">{code}</code>
                  <button onClick={() => copyCode(code)}>
                    {copiedCode === code ? (
                      <Check size={14} className="text-green-500" />
                    ) : (
                      <Copy size={14} className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(backupCodes.join("\n"));
                  setCopiedCode("all");
                }}
                className="flex-1 py-3 bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-xl font-medium flex items-center justify-center gap-2"
              >
                <Copy size={16} />
                Copy All
              </button>
              <button
                onClick={() => setStep("overview")}
                className="flex-1 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-medium"
              >
                Done
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
