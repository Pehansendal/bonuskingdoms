"use client"

import { LayoutWithCasinos } from '../../components/layout-with-casinos'

export default function ResponsibleGaming() {
  return (
    <LayoutWithCasinos
      title="Responsible Gaming"
      description="Learn about safe gambling practices and how to maintain control over your gaming habits"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Our Commitment to Responsible Gaming</h2>
        <p>
          At Bonus Kingdoms, we believe that gambling should always be an enjoyable form of entertainment, 
          not a way to make money or escape from problems. We are committed to promoting responsible 
          gaming practices and providing resources to help our users maintain healthy gambling habits.
        </p>

        <h3>Setting Limits</h3>
        <p>
          We recommend setting clear limits for yourself before you start playing:
        </p>
        <ul>
          <li>Deposit limits</li>
          <li>Time limits</li>
          <li>Loss limits</li>
          <li>Session limits</li>
        </ul>

        <h3>Warning Signs of Problem Gambling</h3>
        <p>
          Be aware of these common signs that gambling might be becoming a problem:
        </p>
        <ul>
          <li>Gambling with money you can't afford to lose</li>
          <li>Chasing losses</li>
          <li>Gambling affecting your relationships</li>
          <li>Feeling guilty about your gambling</li>
        </ul>

        <h3>Getting Help</h3>
        <p>
          If you or someone you know needs help with gambling-related issues, there are many 
          organizations that provide free, confidential support:
        </p>
        <ul>
          <li>GamCare: 0808 8020 133</li>
          <li>Gambling Therapy: www.gamblingtherapy.org</li>
          <li>BeGambleAware: www.begambleaware.org</li>
        </ul>
      </div>
    </LayoutWithCasinos>
  )
} 