"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'
import { Lock, Clock, ShieldAlert, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SelfExclusion() {
  return (
    <LayoutWithCasinos
      title="Self-Exclusion Tools"
      description="Learn about self-exclusion options and how to take control"
    >
      <div className="prose prose-invert max-w-none">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-0">
            Understanding Self-Exclusion
          </h2>
          <p className="text-gray-300 mb-0">
            Self-exclusion is a powerful tool that allows you to voluntarily ban yourself from gambling 
            activities. It's one of the most effective ways to maintain control and prevent problem gambling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Lock className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Account Restriction</h3>
            <p className="text-gray-300 text-sm">
              Complete account lockout during the exclusion period. No exceptions or early removals.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Clock className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Time Periods</h3>
            <ul className="text-gray-300 text-sm">
              <li>6 months</li>
              <li>1 year</li>
              <li>5 years</li>
              <li>Lifetime</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <ShieldAlert className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Protection</h3>
            <p className="text-gray-300 text-sm">
              Prevents creation of new accounts and blocks marketing communications.
            </p>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">How Self-Exclusion Works</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold">1</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Request Exclusion</h4>
                <p className="text-gray-300">Contact customer support or use the self-exclusion tool in your account settings.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold">2</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Choose Duration</h4>
                <p className="text-gray-300">Select your preferred exclusion period. Consider longer periods for better protection.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold">3</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Verification</h4>
                <p className="text-gray-300">Confirm your decision and verify your identity to activate the exclusion.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-400 font-bold">4</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Activation</h4>
                <p className="text-gray-300">The exclusion takes effect immediately and cannot be reversed until the period ends.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">When to Consider Self-Exclusion</h3>
            <ul className="text-gray-300">
              <li>Difficulty controlling gambling habits</li>
              <li>Spending more than you can afford</li>
              <li>Gambling affecting relationships</li>
              <li>Feeling anxious about gambling</li>
              <li>Using gambling to escape problems</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <HelpCircle className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Additional Support</h3>
            <ul className="text-gray-300">
              <li>Professional counseling</li>
              <li>Support groups</li>
              <li>Financial advice</li>
              <li>Family support services</li>
              <li>Blocking software options</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Ready to Take Control?</h3>
          <p className="text-gray-300 mb-4">
            Our support team is available 24/7 to help you with the self-exclusion process.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact Support <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </LayoutWithCasinos>
  )
} 