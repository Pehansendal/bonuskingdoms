export default function ExampleReview() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          LuckyStar Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on December 12, 2024</p>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">✓</span> Licensed by MGA
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">✓</span> 5000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            <span className="mr-2">✓</span> 24h Withdrawals
          </span>
        </div>

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Our verdict: LuckyStar Casino stands out with its massive game selection and lightning-fast payouts, though new players should note the higher-than-average wagering requirements.
          </p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400 mr-2">8.5/10</span>
            <span className="text-gray-400">Overall Rating</span>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🎮</div>
          <div className="text-sm text-gray-400">Total Games</div>
          <div className="text-xl font-bold text-gray-200">5,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">€10</div>
        </div>
        {/* ... liknende bokser for andre nøkkelfakta ... */}
      </div>

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is LuckyStar Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            LuckyStar Casino operates under a full gaming license from the Malta Gaming Authority (MGA/B2C/123/4567) and employs industry-standard SSL encryption...
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <span className="text-green-400 mr-3">✓</span>
              SSL Encryption
            </li>
            <li className="flex items-center text-gray-300">
              <span className="text-green-400 mr-3">✓</span>
              MGA Licensed
            </li>
            {/* ... flere sikkerhetspunkter ... */}
          </ul>
        </div>
      </section>

      {/* Game Selection */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Game Selection</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <span className="mr-2">🎰</span> Slots
            </h3>
            <p className="text-gray-300 mb-4">3,500+ titles including:</p>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Book of Dead (RTP: 96.21%)
              </li>
              <li className="text-gray-300">
                Starburst (RTP: 96.09%)
              </li>
              <li className="text-gray-300">
                Sweet Bonanza (RTP: 96.48%)
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              <span className="mr-2">🎲</span> Table Games
            </h3>
            <p className="text-gray-300 mb-4">250+ variants including:</p>
            <ul className="space-y-2">
              <li className="text-gray-300">
                European Roulette Pro
              </li>
              <li className="text-gray-300">
                Blackjack Multi-Hand
              </li>
              <li className="text-gray-300">
                Baccarat Deluxe
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Bonus Offers</h2>
        <div className="bg-[#1a1f2d] rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 text-left text-gray-200">Bonus Type</th>
                <th className="p-4 text-left text-gray-200">Amount</th>
                <th className="p-4 text-left text-gray-200">Wagering</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-4 text-gray-300">Welcome Bonus</td>
                <td className="p-4 text-gray-300">100% up to €500</td>
                <td className="p-4 text-gray-300">35x</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-4 text-gray-300">Free Spins</td>
                <td className="p-4 text-gray-300">200 FS</td>
                <td className="p-4 text-gray-300">40x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Advantages & Disadvantages</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1f2d]/80 backdrop-blur-sm p-8 rounded-3xl border border-green-500/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent flex items-center mb-6">
                <span className="text-3xl mr-3">★</span>
                Advantages
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-green-300 transition-colors">Fast withdrawals within 24 hours</span>
                </li>
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-green-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✓</span>
                  <span className="group-hover/item:text-green-300 transition-colors">Large game selection with 5000+ titles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-[#1a1f2d]/80 backdrop-blur-sm p-8 rounded-3xl border border-red-500/20">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent flex items-center mb-6">
                <span className="text-3xl mr-3">⚠</span>
                Disadvantages
              </h3>
              <ul className="space-y-4">
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✗</span>
                  <span className="group-hover/item:text-red-300 transition-colors">High wagering requirements on bonuses</span>
                </li>
                <li className="text-gray-200 flex items-start group/item">
                  <span className="text-red-400 mr-3 text-xl group-hover/item:scale-110 transition-transform">✗</span>
                  <span className="group-hover/item:text-red-300 transition-colors">Limited customer support hours</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-[#1a1f2d] rounded-xl border border-gray-800">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <span className="text-lg font-semibold text-gray-200">Is LuckyStar Casino legitimate?</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-300">
              Yes, LuckyStar Casino is licensed by the Malta Gaming Authority (MGA/B2C/123/4567) and uses SSL encryption to protect player data.
            </div>
          </details>
          
          <details className="group bg-[#1a1f2d] rounded-xl border border-gray-800">
            <summary className="flex items-center justify-between p-6 cursor-pointer">
              <span className="text-lg font-semibold text-gray-200">How long do withdrawals take?</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-6 pb-6 text-gray-300">
              Most withdrawals are processed within 24 hours, though the exact time depends on your chosen payment method.
            </div>
          </details>
        </div>
      </section>
    </div>
  )
} 