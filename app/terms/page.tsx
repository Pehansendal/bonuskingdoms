"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'

export default function Terms() {
  return (
    <LayoutWithCasinos
      title="Terms & Conditions"
      description="Our website terms of use and service conditions"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Website Terms of Use</h2>
        <p>
          By accessing and using Bonus Kingdoms, you agree to comply with and be bound by these 
          terms and conditions. Please read them carefully before using our services.
        </p>

        <h3>Content Usage</h3>
        <p>
          All content on this website is for informational purposes only. We strive to maintain 
          accurate and up-to-date information, but we make no warranties about the completeness, 
          reliability, or accuracy of this information.
        </p>

        {/* Add more terms sections as needed */}
      </div>
    </LayoutWithCasinos>
  )
} 