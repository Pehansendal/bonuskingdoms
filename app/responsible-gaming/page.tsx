"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'
import { Clock, DollarSign, Shield, Brain, AlertCircle, BarChart } from 'lucide-react'

export default function ResponsibleGaming() {
  return (
    <LayoutWithCasinos
      title="Responsible Gaming"
      description="Learn about safe gambling practices and how to maintain control"
    >
      <div className="prose prose-invert max-w-none">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-0">
            Our Commitment to Responsible Gaming
          </h2>
          <p className="text-gray-300 mb-0">
            At Bonus Kingdoms, we prioritize the wellbeing of our users. Gambling should remain an entertaining 
            activity, never a source of financial or emotional distress. We provide tools and resources to help 
            you maintain healthy gambling habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Clock className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Time Management</h3>
            <ul className="text-gray-300 text-sm">
              <li>Set session time limits</li>
              <li>Regular break reminders</li>
              <li>Activity tracking tools</li>
              <li>Cool-off periods</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <DollarSign className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Financial Controls</h3>
            <ul className="text-gray-300 text-sm">
              <li>Deposit limits</li>
              <li>Loss limits</li>
              <li>Wagering limits</li>
              <li>Reality checks</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Shield className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Protection Tools</h3>
            <ul className="text-gray-300 text-sm">
              <li>Self-exclusion options</li>
              <li>Account restrictions</li>
              <li>Marketing opt-out</li>
              <li>Access controls</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Brain className="w-6 h-6 text-blue-400" />
            Maintaining Control
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400">Do's</h4>
              <ul className="text-gray-300">
                <li>Set strict budget limits</li>
                <li>View gambling as entertainment</li>
                <li>Take regular breaks</li>
                <li>Keep track of time and money spent</li>
                <li>Gamble only with disposable income</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-red-400">Don'ts</h4>
              <ul className="text-gray-300">
                <li>Chase losses</li>
                <li>Gamble when emotional</li>
                <li>Borrow money to gamble</li>
                <li>Consider gambling as income</li>
                <li>Neglect other activities</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <AlertCircle className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Warning Signs</h3>
            <ul className="text-gray-300">
              <li>Spending more than you can afford</li>
              <li>Gambling interfering with daily life</li>
              <li>Hiding gambling activities</li>
              <li>Feeling guilty about gambling</li>
              <li>Others expressing concern</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <BarChart className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Self-Assessment</h3>
            <p className="text-gray-300">
              Ask yourself these questions:
            </p>
            <ul className="text-gray-300">
              <li>Do you gamble with money needed for bills?</li>
              <li>Does gambling affect your relationships?</li>
              <li>Do you gamble to escape problems?</li>
              <li>Have you tried to stop but couldn't?</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
          <p className="text-gray-300">
            If you're concerned about your gambling habits, help is available 24/7:
          </p>
          <ul className="text-gray-300">
            <li>National Problem Gambling Helpline: 1-800-522-4700</li>
            <li>GamCare: 0808 8020 133</li>
            <li>Gambling Therapy: www.gamblingtherapy.org</li>
          </ul>
        </div>
      </div>
    </LayoutWithCasinos>
  )
} 