export default function sportunacasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sportuna Casino Review
        </h1>
        <p className="text-gray-400 mb-6">Last updated on 2024-11-06</p>
        
        {/* Trust Indicators */}
        
        <div className="flex flex-wrap gap-4 mb-6">
          
          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full flex items-center">
            ✓ Licensed by Curacao
          </span>
          <span className="bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full flex items-center">
            ✓ 5,000+ Games
          </span>
          <span className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center">
            ✓ 1-3 days Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Sportuna Casino has established itself as a versatile platform in the online gaming market, offering a diverse selection of casino games, sports betting, and live dealer experiences from renowned providers including Pragmatic Play, Play'n GO, and Evolution Gaming. The platform excels in its wide game variety, user-friendly interface, and mobile compatibility, making it particularly appealing for players seeking a comprehensive gaming experience. Their licensing from Curacao (OGL/2023/158/0074) ensures regulatory compliance and a degree of player protection, while their security measures include SSL encryption and TLS 1.2 protocol for secure transactions. The casino's bonus structure features a welcome bonus with free spins, though players should note the wagering requirements and bonus terms. Payment processing is handled through various methods including credit/debit cards, e-wallets, and cryptocurrencies, with withdrawals typically completed within 1-3 business days after a pending period of up to 3 business days.  Mobile compatibility is excellent, with instant play available through mobile browsers, allowing for seamless gaming on the go. While the platform impresses with its diverse offerings and user-friendly design, there are some areas for improvement, including inconsistencies in licensing information, limited details on responsible gambling tools, and the lack of a dedicated mobile app. Customer support is available 24/7 via live chat and email, though phone support is not offered.  For the most current information about games, promotions, and services, visit https://sportuna.com.
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
          <div className="text-xl font-bold text-gray-200">5,000+</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">💳</div>
          <div className="text-sm text-gray-400">Min Deposit</div>
          <div className="text-xl font-bold text-gray-200">€10</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-sm text-gray-400">Withdrawal Time</div>
          <div className="text-xl font-bold text-gray-200">1-3 days</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is Sportuna Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Sportuna Casino operates under a Curacao license (OGL/2023/158/0074), which provides a basic level of regulatory oversight.  However, it's important to note that some sources report conflicting information regarding the licensing. The casino employs industry-standard security measures, including SSL encryption and TLS 1.2 protocol, to protect player data and financial transactions.  While specific details on responsible gambling tools are limited, the casino mentions self-exclusion as an option and claims to have a comprehensive responsible gambling policy. Players should contact customer support for detailed information on available tools and resources. Payment security is ensured through secure payment gateways and KYC verification procedures.  Information on third-party certifications and audits is not available. Sportuna Casino states that it complies with data protection regulations, but details are not specified. Player protection policies are in place, but specific procedures are not outlined in the available information. Account security is maintained through password protection and account verification. Banking security measures include secure transaction processing and fraud prevention measures.  Players are encouraged to contact customer support for any concerns regarding security or responsible gambling.
          </p>
        </div>
      </section>
    </div>
  )
}