"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'
import { Phone, Heart, Brain, Users, AlertTriangle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function GamblingAddiction() {
  return (
    <LayoutWithCasinos
      title="Problem Gambling Help"
      description="Get support and resources for gambling addiction recovery"
    >
      <div className="prose prose-invert max-w-none">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-white/10 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-0">
            Problem Gambling Support
          </h2>
          <p className="text-gray-300 mb-0">
            If you or someone you know is struggling with gambling, help is available. Recovery is possible 
            with the right support and resources.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-red-400 mt-0 mb-2">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-2">
                24/7 Support Lines Available:
              </p>
              <ul className="text-gray-300 mb-0">
                <li>National Problem Gambling Helpline: 1-800-522-4700</li>
                <li>Crisis Helpline: 1-800-273-8255</li>
                <li>Emergency Services: 911</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Phone className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Support Services</h3>
            <ul className="text-gray-300 text-sm">
              <li>24/7 Helplines</li>
              <li>Online Chat Support</li>
              <li>Text Message Help</li>
              <li>Local Support Groups</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Heart className="w-8 h-8 text-red-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Recovery Resources</h3>
            <ul className="text-gray-300 text-sm">
              <li>Treatment Programs</li>
              <li>Counseling Services</li>
              <li>Support Groups</li>
              <li>Self-Help Tools</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Brain className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Educational Tools</h3>
            <ul className="text-gray-300 text-sm">
              <li>Understanding Addiction</li>
              <li>Recovery Strategies</li>
              <li>Coping Mechanisms</li>
              <li>Prevention Tips</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
          <h3 className="text-xl font-semibold text-white mb-4">Signs of Problem Gambling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400">Behavioral Signs</h4>
              <ul className="text-gray-300">
                <li>Gambling with money needed for bills</li>
                <li>Lying about gambling activities</li>
                <li>Neglecting work or family</li>
                <li>Unable to stop or control gambling</li>
                <li>Gambling to escape problems</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400">Emotional Signs</h4>
              <ul className="text-gray-300">
                <li>Anxiety about gambling debts</li>
                <li>Depression or hopelessness</li>
                <li>Guilt about gambling</li>
                <li>Mood swings</li>
                <li>Restlessness when not gambling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <Users className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Family Support</h3>
            <p className="text-gray-300">
              Support for family members affected by problem gambling:
            </p>
            <ul className="text-gray-300">
              <li>Family counseling services</li>
              <li>Support groups for loved ones</li>
              <li>Financial advice services</li>
              <li>Educational resources</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <ArrowRight className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Next Steps</h3>
            <p className="text-gray-300">
              Take action today:
            </p>
            <ul className="text-gray-300">
              <li>Call a helpline</li>
              <li>Join a support group</li>
              <li>Set up self-exclusion</li>
              <li>Seek professional help</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Ready to Take the First Step?</h3>
          <p className="text-gray-300 mb-4">
            Our support team is here to help connect you with the resources you need.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact Support <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </LayoutWithCasinos>
  )
} 