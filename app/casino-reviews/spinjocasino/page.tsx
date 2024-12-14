export default function spinjocasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Spinjo Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-11-14</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 6,000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ 24 hours Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Spinjo Casino has established itself as a newcomer in the online gaming market, offering a vast selection of slots, table games, and live dealer options from renowned providers including Red Tiger, Playson, and Pragmatic Play. The platform excels in its user-friendly interface, diverse game library, and the personalized Bonus Shop, making it particularly appealing for players seeking variety and rewards.  Their licensing from Curacao ensures regulatory compliance and a degree of player protection, while their security measures include SSL encryption and account verification processes. The casino's bonus structure features a welcome package of up to 50,000 kroner + 300 free spins across the first four deposits, though players should note the specific terms and conditions for each bonus. Payment processing is handled through a range of methods including debit cards, e-wallets, and bank transfers, with withdrawals typically completed within 24 hours. Mobile compatibility is excellent, allowing for seamless gameplay and access to all casino features on various devices. While the platform impresses with its intuitive navigation and comprehensive game selection, there are some areas for improvement, including clearer information on wagering requirements, more detailed responsible gambling resources, and expanding customer support channels beyond live chat and email. Customer support is available via 24/7 live chat and email, though phone support is not readily apparent. For the most current information about games, promotions, and services, visit https://www.spinjo.com/
          </p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400 mr-2">7.5/10</span>
            <span className="text-gray-400">Overall Rating</span>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🎮</div>
          <div className="text-sm text-gray-400">Total Games</div>
          <div className="text-xl font-bold text-gray-200">6,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">€20</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-sm text-gray-400">Withdrawal Time</div>
          <div className="text-xl font-bold text-gray-200">24 hours</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is Spinjo Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Spinjo Casino operates under a Curacao license, providing a level of regulatory oversight.  The casino utilizes SSL encryption to protect player data during transmission.  Responsible gambling tools include deposit limits, loss limits, wagering limits, session time limits, cooling-off periods, and self-exclusion options, empowering players to manage their gaming activity. Payment security is ensured through secure transaction processing and account verification procedures. While specific third-party certifications and audits are not explicitly mentioned, the casino adheres to data protection regulations and responsible gaming practices. Account security features include password protection and account verification, while banking security measures involve secure payment gateways. Problem gambling prevention tools are accessible through the responsible gambling section, offering resources and support for players.
          </p>
        </div>
      </section>
    </div>
  )
}