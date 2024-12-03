"use client"

import { LayoutWithCasinos } from '@/components/layout-with-casinos'

export default function SelfExclusion() {
  return (
    <LayoutWithCasinos
      title="Self-Exclusion Tools"
      description="Learn about self-exclusion options and how to take control of your gambling habits"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Understanding Self-Exclusion</h2>
        <p>
          Self-exclusion is a formal process that allows you to voluntarily ban yourself from gambling 
          activities for a set period. This tool is one of the most effective ways to maintain control 
          over gambling habits and prevent problem gambling.
        </p>

        <h3>How Self-Exclusion Works</h3>
        <ul>
          <li>Choose your exclusion period (6 months, 1 year, 5 years, or lifetime)</li>
          <li>Account access will be completely restricted</li>
          <li>Cannot create new accounts during exclusion</li>
          <li>Marketing communications will be stopped</li>
        </ul>

        <h3>When to Consider Self-Exclusion</h3>
        <ul>
          <li>Difficulty controlling gambling time or spending</li>
          <li>Gambling affecting work or relationships</li>
          <li>Feeling anxious or stressed about gambling</li>
          <li>Chasing losses or borrowing money to gamble</li>
        </ul>
      </div>
    </LayoutWithCasinos>
  )
} 