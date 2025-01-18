import Link from 'next/link';
import { 
  ArrowRightIcon, ShieldCheckIcon, ClockIcon, CurrencyDollarIcon,
  GiftIcon, SparklesIcon, ExclamationTriangleIcon, CheckCircleIcon,
  InformationCircleIcon, LinkIcon, DocumentTextIcon, WalletIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

export default function HowBonusesWork() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16 animate-fadeInUp">
        <h1 className="text-5xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer">
          Understanding Casino Bonuses
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Your complete guide to welcome bonuses, first deposits, and free spins in the world of crypto casinos.
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Quick Navigation */}
        <div className="bg-gray-800/50 rounded-xl p-6 mb-12 hover-glow">
          <h2 className="text-2xl font-bold text-white mt-0">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4 stagger-animation">
            {[
              'Welcome Bonuses',
              'First Deposit Bonuses',
              'Free Spins',
              'Important Terms',
              'Advantages',
              'Tips & Tricks'
            ].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 no-underline transition-colors animate-fadeInRight hover-lift"
              >
                <ArrowRightIcon className="w-4 h-4" />
                <span>{section}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-r from-gray-900/50 to-blue-900/30 rounded-xl p-8 mb-12 hover-effect">
          <div className="flex items-start gap-4">
            <div className="bg-blue-500/10 rounded-full p-3 mt-1">
              <InformationCircleIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                When diving into the world of online casinos, particularly cryptocurrency casinos, players often encounter enticing promotions such as welcome bonuses, first deposit bonuses, and free spins. These offers are designed to attract new players and enhance their gaming experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                In this comprehensive guide, we'll explain how these bonuses work, their benefits, and important considerations to maximize their potential.
              </p>
            </div>
          </div>
        </div>

        {/* Welcome Bonuses Section */}
        <section id="welcome-bonuses" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <GiftIcon className="w-8 h-8 text-blue-500" />
              What Are Welcome Bonuses?
            </h2>
            <p>
              A <strong>welcome bonus</strong> is a promotional offer given to new players when they sign up at an online casino. This bonus serves as a warm introduction, allowing players to explore the platform with added resources.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-blue-400 mt-0">How Welcome Bonuses Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Sign-Up Requirement:</strong> Create an account to claim the bonus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Activation:</strong> Some bonuses are automatic, others need a bonus code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Usage:</strong> Bonus funds and spins come with wagering requirements.</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-bold text-blue-300 mt-0">Example</h4>
              <p className="mb-0">
                100% match bonus up to 1 BTC + 50 free spins means the casino matches your deposit up to 1 BTC and adds 50 free spins.
              </p>
            </div>
          </div>
        </section>

        {/* First Deposit Bonuses Section */}
        <section id="first-deposit-bonuses" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <CurrencyDollarIcon className="w-8 h-8 text-green-500" />
              First Deposit Bonuses
            </h2>
            <p>
              A <strong>first deposit bonus</strong> is often the centerpiece of a casino's welcome offer. This bonus is activated when players make their first deposit on the platform, often offered in cryptocurrencies like Bitcoin or Ethereum.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-blue-400 mt-0">How First Deposit Bonuses Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Deposit Amount:</strong> Minimum deposit required (e.g., 0.01 BTC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Percentage Match:</strong> Casino matches your deposit (50%, 100%, or even 200%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Maximum Cap:</strong> Upper limit on bonus amount</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-900/20 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-bold text-blue-300 mt-0">Example Calculation</h4>
              <div className="space-y-2">
                <p className="mb-2">For a 100% match bonus up to 0.5 BTC:</p>
                <ul className="list-disc pl-6 space-y-1 mb-0">
                  <li>Deposit 0.3 BTC → Get 0.3 BTC bonus (100% match)</li>
                  <li>Deposit 1 BTC → Get 0.5 BTC bonus (capped at maximum)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Free Spins Section */}
        <section id="free-spins" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <SparklesIcon className="w-8 h-8 text-purple-500" />
              Free Spins Explained
            </h2>
            <p>
              <strong>Free spins</strong> are a popular bonus type specifically designed for slot game enthusiasts. These spins allow you to play selected slot games without using your own funds, while still having the chance to win real money.
            </p>
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-blue-400 mt-0">How Free Spins Work</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Game Selection:</strong> Usually limited to specific popular slots</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Winnings:</strong> Often converted to bonus funds with wagering requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>No Deposit Option:</strong> Some casinos offer free spins just for signing up</span>
                </li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6 stagger-animation">
              <div className="bg-purple-900/20 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h4 className="text-lg font-bold text-purple-300 mt-0">Common Free Spins Offers</h4>
                <ul className="list-disc pl-6 space-y-2 mb-0">
                  <li>Welcome bonus free spins (with deposit)</li>
                  <li>No deposit free spins (risk-free)</li>
                  <li>Loyalty program rewards</li>
                  <li>Special promotional events</li>
                </ul>
              </div>
              <div className="bg-pink-900/20 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h4 className="text-lg font-bold text-pink-300 mt-0">Tips for Free Spins</h4>
                <ul className="list-disc pl-6 space-y-2 mb-0">
                  <li>Check wagering requirements</li>
                  <li>Note maximum win limits</li>
                  <li>Verify eligible games</li>
                  <li>Watch expiration dates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Terms Section */}
        <section id="important-terms" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <ExclamationTriangleIcon className="w-8 h-8 text-red-500" />
              Important Terms to Understand
            </h2>
            <p>
              Before claiming any casino bonus, it's crucial to understand the terms and conditions that come with it. Here are the key concepts you need to know:
            </p>
            
            {/* Wagering Requirements */}
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-red-400 mt-0 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-900/50 rounded-full flex items-center justify-center text-lg">1</span>
                Wagering Requirements
              </h3>
              <p className="mb-4">
                Also known as playthrough requirements, these determine how many times you must wager the bonus amount before withdrawing.
              </p>
              <div className="bg-red-900/20 rounded-lg p-4">
                <h4 className="text-lg font-bold text-red-300 mt-0">Example</h4>
                <p className="mb-0">
                  40x wagering on 0.1 BTC bonus means you must bet 4 BTC total (40 × 0.1 BTC) before withdrawal.
                </p>
              </div>
            </div>

            {/* Game Contribution */}
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-orange-400 mt-0 flex items-center gap-2">
                <span className="w-8 h-8 bg-orange-900/50 rounded-full flex items-center justify-center text-lg">2</span>
                Game Contribution
              </h3>
              <p>Different games contribute differently to wagering requirements:</p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-orange-900/20 rounded-lg p-4 animate-fadeInUp hover-lift">
                  <h4 className="text-lg font-bold text-orange-300 mt-0">Slots</h4>
                  <p className="mb-0">Usually 100% contribution</p>
                </div>
                <div className="bg-orange-900/20 rounded-lg p-4 animate-fadeInUp hover-lift">
                  <h4 className="text-lg font-bold text-orange-300 mt-0">Table Games</h4>
                  <p className="mb-0">Often 10-20% contribution</p>
                </div>
              </div>
            </div>

            {/* Time Limits */}
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-yellow-400 mt-0 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-900/50 rounded-full flex items-center justify-center text-lg">3</span>
                Time Limits
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ClockIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>Bonus Expiry:</strong> Usually 7-30 days to use bonus funds</span>
                </li>
                <li className="flex items-start gap-2">
                  <ClockIcon className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong>Free Spins Expiry:</strong> Often 24-48 hours to use spins</span>
                </li>
              </ul>
            </div>

            {/* Maximum Bets */}
            <div className="bg-gray-900/50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-yellow-400 mt-0 flex items-center gap-2">
                <span className="w-8 h-8 bg-yellow-900/50 rounded-full flex items-center justify-center text-lg">4</span>
                Maximum Bets
              </h3>
              <p className="mb-0">
                While using bonus funds, there's usually a maximum bet limit (e.g., 0.001 BTC per spin or hand) to prevent high-risk betting strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="advantages" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <ShieldCheckIcon className="w-8 h-8 text-green-500" />
              Advantages of Crypto Casino Bonuses
            </h2>
            <p>
              Cryptocurrency casinos offer unique advantages that set them apart in the online gambling space:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6 stagger-animation">
              {/* Fast Transactions */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h3 className="text-xl font-bold text-green-400 mt-0">Fast Transactions</h3>
                <ul className="space-y-2 mb-0">
                  <li>Instant deposits</li>
                  <li>Quick withdrawals (often within minutes)</li>
                  <li>No bank processing delays</li>
                </ul>
              </div>

              {/* Enhanced Privacy */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h3 className="text-xl font-bold text-green-400 mt-0">Enhanced Privacy</h3>
                <ul className="space-y-2 mb-0">
                  <li>Minimal personal information required</li>
                  <li>Anonymous gaming options</li>
                  <li>Secure blockchain transactions</li>
                </ul>
              </div>

              {/* Better Bonuses */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h3 className="text-xl font-bold text-green-400 mt-0">Better Bonuses</h3>
                <ul className="space-y-2 mb-0">
                  <li>Higher bonus amounts</li>
                  <li>More frequent promotions</li>
                  <li>Cryptocurrency-specific offers</li>
                </ul>
              </div>

              {/* Global Access */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <h3 className="text-xl font-bold text-green-400 mt-0">Global Access</h3>
                <ul className="space-y-2 mb-0">
                  <li>No currency conversion fees</li>
                  <li>Available worldwide</li>
                  <li>No banking restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Tricks Section */}
        <section id="tips-tricks" className="mb-16 scroll-mt-24 animate-scaleIn hover-glow">
          <div className="bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-white mt-0">
              <SparklesIcon className="w-8 h-8 text-indigo-500" />
              Tips for Maximizing Casino Bonuses
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Read Terms */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-indigo-900/50 rounded-full flex items-center justify-center text-lg font-bold text-indigo-400">1</span>
                  <h3 className="text-xl font-bold text-indigo-400 mt-0">Read Terms</h3>
                </div>
                <ul className="space-y-2 mb-0 text-sm">
                  <li>Check wagering requirements</li>
                  <li>Note time limits</li>
                  <li>Understand game restrictions</li>
                </ul>
              </div>

              {/* Strategic Deposits */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-indigo-900/50 rounded-full flex items-center justify-center text-lg font-bold text-indigo-400">2</span>
                  <h3 className="text-xl font-bold text-indigo-400 mt-0">Plan Deposits</h3>
                </div>
                <ul className="space-y-2 mb-0 text-sm">
                  <li>Match bonus maximums</li>
                  <li>Consider your budget</li>
                  <li>Time deposits with promotions</li>
                </ul>
              </div>

              {/* Game Selection */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-indigo-900/50 rounded-full flex items-center justify-center text-lg font-bold text-indigo-400">3</span>
                  <h3 className="text-xl font-bold text-indigo-400 mt-0">Choose Games</h3>
                </div>
                <ul className="space-y-2 mb-0 text-sm">
                  <li>Focus on 100% contribution games</li>
                  <li>Learn optimal strategies</li>
                  <li>Stick to familiar games</li>
                </ul>
              </div>

              {/* Bonus Management */}
              <div className="bg-gray-900/50 rounded-lg p-6 animate-fadeInUp hover-lift">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-indigo-900/50 rounded-full flex items-center justify-center text-lg font-bold text-indigo-400">4</span>
                  <h3 className="text-xl font-bold text-indigo-400 mt-0">Track Progress</h3>
                </div>
                <ul className="space-y-2 mb-0 text-sm">
                  <li>Monitor wagering progress</li>
                  <li>Watch expiry dates</li>
                  <li>Keep detailed records</li>
                </ul>
              </div>
            </div>

            {/* Pro Tips Box */}
            <div className="bg-blue-900/20 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-bold text-blue-300 mt-0 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                Pro Tips
              </h4>
              <ul className="grid md:grid-cols-2 gap-4 mb-0">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Start with smaller bonuses to understand the process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Calculate wagering requirements before claiming</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Look for low wagering bonuses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Compare bonus terms across casinos</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* External Resources Section - før Call to Action */}
        <section className="mb-16 scroll-mt-24">
          <div className="bg-gradient-to-r from-gray-900/50 to-purple-900/30 rounded-xl p-8 hover-effect">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-white mt-0 mb-6">
              <LinkIcon className="w-6 h-6 text-purple-400" />
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <a 
                href="https://cryptogambling.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CurrencyDollarIcon className="w-6 h-6 text-yellow-500" />
                  <h3 className="text-lg font-semibold text-white m-0">Crypto Gambling Foundation</h3>
                </div>
                <p className="text-gray-400 text-sm mb-0">
                  Learn about safe and responsible crypto gambling practices
                </p>
                <div className="flex items-center gap-2 mt-4 text-purple-400 group-hover:text-purple-300">
                  <span className="text-sm">Visit site</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </div>
              </a>

              <a 
                href="https://www.casino.org/bonuses/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <DocumentTextIcon className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold text-white m-0">Casino.org Guide</h3>
                </div>
                <p className="text-gray-400 text-sm mb-0">
                  Comprehensive guide to understanding casino bonuses
                </p>
                <div className="flex items-center gap-2 mt-4 text-purple-400 group-hover:text-purple-300">
                  <span className="text-sm">Visit site</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </div>
              </a>

              <a 
                href="https://bitcoin.org/en/choose-your-wallet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gray-800/50 rounded-lg p-6 transition-all hover:bg-gray-800/70 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <WalletIcon className="w-6 h-6 text-orange-500" />
                  <h3 className="text-lg font-semibold text-white m-0">Bitcoin Wallet Guide</h3>
                </div>
                <p className="text-gray-400 text-sm mb-0">
                  Official guide to choosing and setting up a crypto wallet
                </p>
                <div className="flex items-center gap-2 mt-4 text-purple-400 group-hover:text-purple-300">
                  <span className="text-sm">Visit site</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mt-12 animate-fadeInUp hover-glow">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-white mt-0">Ready to Claim Your Bonus?</h2>
            <p className="text-gray-100">
              Compare the best crypto casino bonuses and start playing today.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="/best-bonus-offers"
                className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Top Bonus Offers
              </Link>
              <Link 
                href="/all-casinos"
                className="inline-block px-8 py-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Browse All Casinos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 