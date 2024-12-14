export default function icecasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Ice Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-11-08</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 3,500+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ 1-5 days Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Ice Casino has established itself as a reputable platform in the online gaming market, offering over 3,500 games, including slots, table games, and live dealer options from renowned providers including  Absolute Live Gaming, Amatic Industries, Amusnet Interactive, Arcadem, ATMOSFERA, Belatra Games, Bet2Tech, Betsoft Gaming, BGAMING, Blueprint Gaming, Booming Games, ELK Studios, and Endorphina. The platform excels in its diverse game selection, convenient payment options, and 24/7 customer support, making it particularly appealing for players seeking variety and accessibility.  Their licensing from Curacao ensures regulatory compliance, while their security measures include SSL encryption and responsible gaming tools. The casino's bonus structure features a welcome bonus of 120% up to $300 + 120 Free Spins, though players should note that terms and conditions apply. Payment processing is handled through various methods, including Skrill, Neteller, Visa, Mastercard, and crypto options like Bitcoin and Tether, with withdrawals typically completed within 1-5 days. Mobile compatibility is excellent with both a browser-based platform and dedicated app, allowing for gaming on the go. While the platform impresses with its user-friendly interface and extensive game library, there are some areas for improvement, including providing more specific information on withdrawal limits and responsible gambling tools. Customer support is available via live chat, email, and phone, though specific response times are not detailed. For the most current information about games, promotions, and services, visit https://icecasino.com.
          </p>
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yellow-400 mr-2">4.4/10</span>
            <span className="text-gray-400">Overall Rating</span>
          </div>
        </div>
      </div>

      {/* Key Facts */}
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🎮</div>
          <div className="text-sm text-gray-400">Total Games</div>
          <div className="text-xl font-bold text-gray-200">3,500+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">Check cashier for limits</div>
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
        <h2 className="text-3xl font-bold mb-6 text-white">Is Ice Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Ice Casino operates under a Curacao license, which provides a basic level of regulatory oversight. The casino utilizes SSL encryption to protect player data during transmission. While specific security protocols are not detailed, industry-standard practices like secure payment gateways and data protection measures are likely in place. Responsible gaming tools are mentioned, but details on their implementation and usage are lacking. Payment security is ensured through established processors, and account security features such as password protection are standard.  Further information regarding third-party certifications, audits, data protection compliance (GDPR, etc.), player protection policies, and problem gambling prevention tools would enhance transparency and build greater trust.
          </p>
        </div>
      </section>
    </div>
  )
}