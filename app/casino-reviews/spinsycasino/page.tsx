export default function spinsycasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Spinsy Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-12-09</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 7,000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ 3 days Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Spinsy Casino has established itself as a prominent player in the online gaming market, offering a diverse selection of over 7,000 casino games and sports betting options from renowned providers including NetEnt, Red Tiger Gaming, and Pragmatic Play. The platform excels in its vast game library, 24/7 customer support, and variety of payment options, making it particularly appealing for players seeking a comprehensive gaming experience.  Their licensing from Curacao ensures regulatory compliance, while their security measures include SSL encryption and account verification. The casino's bonus structure features a welcome bonus of 100% up to €500 and 200 free spins, though players should note the 35x wagering requirement. Payment processing is handled through Visa, MasterCard, MiFinity, and Cryptocurrency, with withdrawals typically completed within three business days. Mobile compatibility is excellent, allowing for seamless gameplay on various devices. While the platform impresses with its extensive offerings, there are some areas for improvement, including limited information on responsible gambling tools and specific details on user experience. Customer support is available via 24/7 live chat and email.  For the most current information about games, promotions, and services, visit https://spinsy.com/
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
          <div className="text-xl font-bold text-gray-200">7,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">€10</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-sm text-gray-400">Withdrawal Time</div>
          <div className="text-xl font-bold text-gray-200">3 days</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is Spinsy Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Spinsy Casino operates under a Curacao license, overseen by the Curacao Gaming Control Board (CGCB).  While the Curacao license is not as stringent as some other jurisdictions, it provides a basic level of regulatory oversight. Spinsy Casino implements standard security measures such as SSL encryption to protect player data during transmission.  They also require account verification, which involves submitting identification documents, to enhance security and prevent fraud.  Specific details regarding responsible gambling tools, payment security measures, third-party certifications, data protection compliance, player protection policies, account security features, banking security measures, and problem gambling prevention tools are not readily available.  Players are advised to contact customer support or consult the casino's terms and conditions for further information on these important aspects of online safety.
          </p>
        </div>
      </section>
    </div>
  )
}