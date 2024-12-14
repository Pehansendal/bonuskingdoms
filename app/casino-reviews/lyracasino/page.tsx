export default function lyracasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          LyraCasino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-12-09</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 3,000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ 1-5 days Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            LyraCasino has established itself as a contender in the online gaming market, offering a diverse selection of slots, table games, and live dealer experiences from renowned providers including NetEnt, Microgaming, Play'n GO, ELK Studios, Nolimit City, Relax Gaming, Pragmatic Play, and Evolution Gaming. The platform excels in mobile compatibility, game variety, and its quick registration process, making it particularly appealing for players seeking instant access to gaming. Their licensing from Curacao ensures regulatory compliance and player protection, while their security measures include SSL encryption for secure data transfer and the use of a random number generator to ensure fair gameplay. The casino's bonus structure features a 200% welcome bonus up to €500 and a daily 10% cashback, though players should note the 40x wagering requirement. Payment processing is handled through bank transfers (Swedbank, LHV, SEB, Luminor) and MuchBetter, with withdrawals typically completed within 1-5 days. Mobile compatibility is seamless, allowing for on-the-go gaming directly through the browser. While the platform impresses with its vast game library and convenient mobile access, there are some areas for improvement, including limited customer support hours, potential licensing discrepancies requiring clarification, and the need for more detailed information regarding responsible gambling tools. Customer support is available via email and a contact form, though live chat is not consistently available. For the most current information about games, promotions, and services, visit https://www.lyracasino.com/.
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
          <div className="text-xl font-bold text-gray-200">3,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">€20</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-sm text-gray-400">Withdrawal Time</div>
          <div className="text-xl font-bold text-gray-200">1-5 days</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is LyraCasino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            LyraCasino operates under a Curacao license, a jurisdiction known for its online gambling regulations.  The casino employs SSL encryption to protect player data during transmission.  While the specific details of their responsible gambling tools are not readily available, players can generally expect options like deposit limits, self-exclusion, and access to responsible gambling resources. Payment security is ensured through SSL encryption and the use of established payment processors.  Further information on third-party certifications, audits, data protection compliance (GDPR), player protection policies, account security features, banking security measures, and problem gambling prevention tools would enhance transparency and player trust.
          </p>
        </div>
      </section>
    </div>
  )
}