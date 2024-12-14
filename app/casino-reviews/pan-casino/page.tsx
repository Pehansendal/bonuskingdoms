export default function pancasinoReview(): JSX.Element {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Quick Summary Box */}
      <div className="bg-[#1a1f2d] rounded-xl p-8 mb-12 border border-gray-800">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Pan-Casino Review
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
            ✓ 24-48 hours Withdrawals
          </span>
        </div>
        

        {/* Expert Verdict */}
        <div className="bg-gray-800/50 rounded-lg p-6">
          <p className="text-xl text-gray-200 mb-4">
            Pan-Casino positions itself as a strong contender in the online gaming world, offering a diverse selection of slots, table games, and a live casino experience from over 70 providers, including industry giants (specific names unavailable at this time). Its key strengths lie in its extensive game library, rewarding loyalty program, and commitment to responsible gambling, catering to players seeking variety and rewarding gameplay.  Pan-Casino operates under the licensing of the Government of Curacao, ensuring a degree of regulatory oversight and player protection.  Security measures include SSL encryption and secure payment processing, though further details on their infrastructure are not readily available. The casino offers a welcome bonus and regular promotions through its bonus calendar, though specifics regarding bonus amounts and wagering requirements need further clarification.  Players can utilize a variety of payment methods, with withdrawals typically processed within 24-48 hours after verification (which can take up to 7 days).  Mobile compatibility is a plus, with a mobile-friendly website offering convenient access to games and features. While Pan-Casino impresses with its game variety and loyalty program, improvement areas include providing greater transparency regarding specific game RTPs and more detailed information on bonus terms. Customer support is available 24/7 via live chat, email, and an online contact form.  For the most current information about games, promotions, and services, visit https://pan-casino.com/en.
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
          <div className="text-xl font-bold text-gray-200">24-48 hours</div>
        </div>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <div className="text-3xl mb-2">🏆</div>
          <div className="text-sm text-gray-400">License</div>
          <div className="text-xl font-bold text-gray-200">Curacao</div>
        </div>
      </div>
      

      {/* Security Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white">Is Pan-Casino Safe?</h2>
        <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800">
          <p className="text-gray-300 mb-4">
            Pan-Casino operates under a license from the Government of Curacao.  While this license provides a basic level of regulatory oversight, it's important to note that the Curacao jurisdiction is not as stringent as some others in the industry.  Pan-Casino employs SSL encryption to secure player data transmitted to and from the site.  They also utilize secure payment processors for financial transactions.  The casino promotes responsible gambling by allowing players to set deposit and loss limits through email requests.  Additionally, they offer a self-exclusion policy for players wishing to take a break from gambling.  While the casino states a commitment to data protection, specific details about their compliance with regulations such as GDPR are not readily available.  Players are advised to contact the casino directly or consult their terms and conditions for more detailed information on their security measures, data protection policies, and responsible gambling tools.
          </p>
        </div>
      </section>
    </div>
  )
}