"use client"

import Link from "next/link"
import { Home, Trophy, Info, Contact, Settings } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-gray-800 bg-gray-900 text-gray-100">
      <div className="flex h-full flex-col justify-between py-4">
        <div className="flex flex-col gap-2 px-4">
          <Link href="/" className="mb-6">
            <h1 className="text-xl font-bold">Casino Reviews</h1>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white">
              <Home className="h-5 w-5" />
              Home
            </Button>
          </Link>
          <Link href="/top-casinos">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white">
              <Trophy className="h-5 w-5" />
              Top Casinos
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white">
              <Info className="h-5 w-5" />
              About Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white">
              <Contact className="h-5 w-5" />
              Contact
            </Button>
          </Link>
        </div>
        <div className="px-4">
          <Link href="/settings">
            <Button variant="ghost" className="w-full justify-start gap-3 text-gray-300 hover:text-white">
              <Settings className="h-5 w-5" />
              Settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

