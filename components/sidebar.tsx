"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Home, Trophy, Shield, UserX, HeartPulse, Lock, MessageSquare, Menu } from 'lucide-react'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { href: "/", icon: <Home size={20} />, text: "Home" },
    { href: "/top-casinos", icon: <Trophy size={20} />, text: "Best Casinos" },
    { href: "/responsible-gaming", icon: <Shield size={20} />, text: "Responsible Gaming" },
    { href: "/self-exclusion", icon: <UserX size={20} />, text: "Self-Exclusion" },
    { href: "/gambling-addiction", icon: <HeartPulse size={20} />, text: "Problem Gambling Help" },
    { href: "/privacy-policy", icon: <Lock size={20} />, text: "Privacy Policy" },
    { href: "/contact", icon: <MessageSquare size={20} />, text: "Contact Support" },
  ]

  return (
    <aside className="fixed lg:relative w-full lg:w-64 bg-[#070a0f] text-white z-50">
      <div className="lg:sticky lg:top-0 lg:h-screen">
        <div className="h-20 lg:hidden flex items-center justify-between px-4 border-b border-white/10">
          <Image 
            src="/bk-logo-stor.png"
            alt="Bonus Kingdoms"
            width={120}
            height={120}
            className="h-12 w-auto"
            priority
          />
          <button 
            className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} lg:block bg-[#070a0f] lg:bg-transparent`}>
          <div className="p-2 hidden lg:block">
            <Image 
              src="/bk-logo-stor.png"
              alt="Bonus Kingdoms"
              width={400}
              height={400}
              className="w-[220px] h-auto mx-auto"
              priority
            />
          </div>
          
          <nav className="p-4 space-y-2 flex flex-col items-center">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 text-gray-400 hover:text-white px-2 py-2 rounded-lg 
                           hover:bg-white/5 w-48 transition-colors duration-200 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.text}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
} 