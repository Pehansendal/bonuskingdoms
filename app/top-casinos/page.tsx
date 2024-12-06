"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'
import { Button } from '@/components/ui/button'
import { Trophy, Shield, Clock } from 'lucide-react'

export default function TopCasinos() {
  return (
    <LayoutWithCasinos
      title="Best Crypto Casinos 2024"
      description="Discover our expertly curated selection of the top cryptocurrency casinos"
    >
      <div className="prose prose-invert max-w-none">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-0">
            Top Rated Crypto Casinos
          </h2>
          <p className="text-gray-300">
            Our team of experts continuously evaluates crypto casinos based on strict criteria to ensure we recommend only the best platforms for our users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Trophy className="w-8 h-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Best Overall</h3>
            <p className="text-gray-300 text-sm">
              Casinos that excel in all aspects: games, bonuses, security, and support.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Shield className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Most Secure</h3>
            <p className="text-gray-300 text-sm">
              Platforms with top-tier security measures and proven track records.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Clock className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Fast Payouts</h3>
            <p className="text-gray-300 text-sm">
              Casinos offering the quickest withdrawal times and efficient processing.
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Our Rating Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="text-gray-300 space-y-2">
              <li>Security & Licensing</li>
              <li>Game Selection</li>
              <li>Bonus Offers</li>
              <li>Payment Methods</li>
            </ul>
            <ul className="text-gray-300 space-y-2">
              <li>Customer Support</li>
              <li>User Experience</li>
              <li>Payout Speed</li>
              <li>Mobile Compatibility</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-4">
            Our detailed casino rankings are being updated to provide you with the most current information.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            View Current Rankings
          </Button>
        </div>
      </div>
    </LayoutWithCasinos>
  )
} 