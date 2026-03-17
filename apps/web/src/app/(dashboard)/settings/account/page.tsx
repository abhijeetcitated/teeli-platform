"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  CaretLeft,
  Camera,
  PencilSimple,
  Check,
  At,
  IdentificationCard,
  MapPin,
  Calendar,
  Globe,
} from "@phosphor-icons/react";

export default function AccountPage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    displayName: "Abhijeet Pratap Singh",
    username: "abhijeet",
    email: "abhijeet@teeli.net",
    bio: "3D Artist & Designer. Building cool stuff with Teeli.",
    location: "Mumbai, India",
    website: "https://abhijeet.dev",
    joinedDate: "December 2024",
  });

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
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Account</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Manage your profile information</p>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden mb-6"
        >
          {/* Avatar Section */}
          <div className="relative h-24 bg-linear-to-r from-cyan-500/30 to-blue-500/30">
            <div className="absolute -bottom-12 left-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold border-4 border-white dark:border-gray-800 shadow-lg">
                  AP
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -bottom-1 -right-1 w-8 h-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-md"
                >
                  <Camera size={14} weight="duotone" className="text-gray-600 dark:text-gray-400" />
                </motion.button>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(!isEditing)}
              className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/40 dark:border-white/20 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              {isEditing ? <Check size={16} weight="bold" /> : <PencilSimple size={16} weight="duotone" />}
              {isEditing ? "Save" : "Edit"}
            </motion.button>
          </div>

          {/* Profile Info */}
          <div className="pt-16 pb-6 px-6 space-y-5">
            {/* Display Name */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <IdentificationCard size={14} weight="duotone" />
                Display Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.displayName}
                  onChange={(e) => setProfile({ ...profile, displayName: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50"
                />
              ) : (
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{profile.displayName}</p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <At size={14} weight="duotone" />
                Username
              </label>
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">@</span>
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    className="flex-1 px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50"
                  />
                </div>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-300">@{profile.username}</p>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <User size={14} weight="duotone" />
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50 resize-none"
                />
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-300">{profile.bio}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <MapPin size={14} weight="duotone" />
                Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50"
                />
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-300">{profile.location}</p>
              )}
            </div>

            {/* Website */}
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                <Globe size={14} weight="duotone" />
                Website
              </label>
              {isEditing ? (
                <input
                  type="url"
                  value={profile.website}
                  onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                  className="w-full px-4 py-3 bg-white/20 dark:bg-white/10 border-2 border-white/40 dark:border-white/20 rounded-xl text-sm text-gray-800 dark:text-white focus:outline-none focus:border-cyan-400/50"
                />
              ) : (
                <a href={profile.website} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                  {profile.website}
                </a>
              )}
            </div>

            {/* Joined Date */}
            <div className="pt-4 border-t border-white/20 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Calendar size={14} weight="duotone" />
                Joined {profile.joinedDate}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Email Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/20 dark:bg-white/10 backdrop-blur-[80px] saturate-[1.8] rounded-2xl border-2 border-white/60 dark:border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden p-6"
        >
          <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-4">Email Address</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{profile.email}</p>
              <div className="flex items-center gap-1 mt-1">
                <Check size={12} className="text-green-500" />
                <span className="text-xs text-green-600 dark:text-green-400">Verified</span>
              </div>
            </div>
            <button className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Change</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
