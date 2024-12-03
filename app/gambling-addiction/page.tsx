"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'

export default function GamblingAddiction() {
  return (
    <LayoutWithCasinos
      title="Problem Gambling Help"
      description="Get support and resources for gambling addiction recovery"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Getting Help for Problem Gambling</h2>
        <p>
          Problem gambling can affect anyone, regardless of age, gender, or background. 
          Recognizing you need help is the first and most important step toward recovery.
        </p>

        <h3>Professional Support Services</h3>
        <ul>
          <li>24/7 Helpline: 1-800-522-4700</li>
          <li>Online Chat Support: www.ncpgambling.org</li>
          <li>Local Support Groups</li>
          <li>Professional Counseling Services</li>
        </ul>

        <h3>Self-Help Resources</h3>
        <ul>
          <li>Self-assessment tools</li>
          <li>Budgeting and financial advice</li>
          <li>Family support resources</li>
          <li>Recovery journals and apps</li>
        </ul>
      </div>
    </LayoutWithCasinos>
  )
} 