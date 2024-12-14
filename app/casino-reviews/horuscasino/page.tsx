export default function horuscasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Horus Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-12-09</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 14,000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ Fast Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Horus Casino has established itself as a prominent player in the online gaming market, offering a diverse selection of over 14,000 games from renowned providers including NetEnt, Play'n GO, Microgaming, and Evolution Gaming.  The platform excels in its vast game library, mobile compatibility, and reportedly fast withdrawal times, making it particularly appealing for players seeking variety and convenience.  Their licensing from Curacao ensures regulatory compliance and a degree of player protection, while their security measures include SSL encryption and the use of a random number generator. The casino's bonus structure features an impressive welcome package of up to €1000 + 125 Free Spins, with some sources claiming no wagering requirements, though this should be verified on their official website. Payment processing is handled through credit cards, e-wallets, and cryptocurrency, with withdrawals typically completed quickly. Mobile compatibility is excellent, with a browser-based version offering over 1,000 games and a user-friendly interface. While the platform impresses with its game selection and bonuses, there are some areas for improvement, including the lack of phone support and a downloadable mobile app.  Inconsistencies between sources regarding the total game count also raise concerns. Customer support is available 24/7 via live chat and email. For the most current information about games, promotions, and services, visit http://www.horuscasino.com.
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
          <div className="text-xl font-bold text-gray-200">14,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">Check cashier for limits</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-sm text-gray-400">Withdrawal Time</div>
          <div className="text-xl font-bold text-gray-200">Fast</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is Horus Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Horus Casino operates under a Curacao license, which provides a basic level of regulatory oversight.  While Curacao licensing is common in the online gambling industry, it's generally considered less stringent than licenses from jurisdictions like the UK or Malta.  The casino states it employs SSL encryption to protect player data during transmission.  It also claims to use a random number generator (RNG) to ensure fair and unpredictable game outcomes.  However, details about independent audits or certifications of the RNG are not readily available.  Information on responsible gambling tools, payment security measures, data protection compliance (GDPR, etc.), player protection policies, account security features, banking security measures, and problem gambling prevention tools is not provided within the given source material.  Further investigation is recommended to fully assess the security and player protection measures in place at Horus Casino.
          </p>
        </div>
      </section>
    </div>
  )
}