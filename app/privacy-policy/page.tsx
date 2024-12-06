"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'

export default function PrivacyPolicy() {
  return (
    <LayoutWithCasinos
      title="Privacy Policy"
      description="Learn how we protect and handle your personal information"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Privacy Policy</h2>
        <p className="text-gray-300">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, 
          disclose, and safeguard your information when you visit our website.
        </p>

        <h3 className="text-xl font-semibold text-white">Information We Collect</h3>
        <div className="bg-white/5 p-4 rounded-lg mb-6">
          <h4 className="text-blue-400">Automatically Collected Information</h4>
          <ul className="text-gray-300">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Page access times</li>
            <li>Pages visited</li>
          </ul>
        </div>

        <div className="bg-white/5 p-4 rounded-lg mb-6">
          <h4 className="text-blue-400">How We Use Your Information</h4>
          <ul className="text-gray-300">
            <li>Improve our website functionality</li>
            <li>Analyze usage patterns</li>
            <li>Enhance user experience</li>
            <li>Maintain site security</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold text-white">Cookie Policy</h3>
        <p className="text-gray-300">
          We use cookies to enhance your browsing experience. You can control cookie 
          settings through your browser preferences.
        </p>

        <h3 className="text-xl font-semibold text-white">Contact Us</h3>
        <p className="text-gray-300">
          If you have questions about this Privacy Policy, please contact us through 
          our support channels.
        </p>
      </div>
    </LayoutWithCasinos>
  )
} 