"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Casino } from '@/lib/types'

type CasinoCardProps = Casino

export function CasinoCard({ rank, name, logo, promotion, supportedCoins, additionalCoins, link }: CasinoCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const getCasinoReview = (name: string) => {
    const reviews = {
      "Stake": {
        description: "Ready to experience the future of crypto gambling? Stake Casino isn't just another platform - it's a game-changer! Imagine getting a sweet 10% lifetime rakeback and a $50 welcome bonus just for joining. But that's just the beginning of your epic journey! From heart-pounding slots to sophisticated table games and immersive live casino action, Stake delivers an adrenaline rush with every bet. Their provably fair system ensures complete transparency, while the intuitive interface makes navigation a breeze. With lightning-fast payouts that'll make your head spin and bank-grade security that never sleeps, you'll feel like crypto royalty from day one. Whether you're wielding Bitcoin, Ethereum, or your favorite altcoin, Stake's crystal-clear interface and elite 24/7 support team have got your back. The platform's social features and regular tournaments create an engaging community atmosphere that keeps players coming back for more. Welcome to the evolution of crypto gambling - where innovation meets entertainment!",
        pros: [
          "Lightning-fast withdrawals under 10 minutes",
          "Elite 24/7 support team with instant response",
          "Massive game selection from top providers",
          "Provably fair gaming system",
          "Regular tournaments and competitions",
          "Competitive rakeback program",
          "Multi-currency support"
        ],
        cons: [
          "No phone support available",
          "Restricted in certain regions",
          "Limited traditional payment options"
        ]
      },
      "BC Game": {
        description: "Hold onto your crypto, because BC.Game is about to blow your mind! Picture this: an incredible welcome package worth up to $20,000 plus a jaw-dropping 300% deposit bonus. This isn't just a casino - it's a crypto gaming revolution! With a sleek, modern interface that feels like it's from the future and provably fair games that keep it real, BC.Game is where serious players come to play. Their innovative social gaming features transform solitary gaming into an exciting community experience. The platform's unique crash games and exclusive titles offer something you won't find anywhere else. Supporting a massive arsenal of 20+ cryptocurrencies, from Bitcoin to the latest altcoins, this platform is a crypto enthusiast's dream come true. The VIP program rewards loyal players with cashback, personalized support, and exclusive perks that get better as you climb the ranks. Join an electrifying community where every bet could lead to epic wins, and every player is treated like a high roller!",
        pros: [
          "Cutting-edge gaming platform with unique features",
          "Massive crypto selection with instant deposits",
          "Thriving player community and chat system",
          "Innovative original games",
          "Generous VIP rewards program",
          "Regular platform updates and improvements",
          "Competitive odds and high limits"
        ],
        cons: [
          "Complex interface for newcomers",
          "Advanced bonus structure requires attention",
          "Some features may be overwhelming"
        ]
      },
      "Cloudbet": {
        description: "Step into the legendary world of Cloudbet, where crypto dreams become reality! This pioneer of digital currency gambling welcomes you with an astronomical 5 BTC bonus plus 50 free spins - talk about making an entrance! But it's not just about the numbers; Cloudbet delivers a premium experience that'll make you feel like crypto royalty. Their decade-long presence in the industry shows in every detail, from the sophisticated platform design to the meticulously curated game selection. The sportsbook offers competitive odds across 30+ sports, while the casino section features everything from classic slots to cutting-edge live dealer games. Security is paramount, with cold storage for crypto assets and top-tier encryption protecting your every move. Their lightning-fast transaction system processes withdrawals in minutes, not hours, and the multi-tier loyalty program rewards your dedication with cashback, personal account managers, and exclusive promotions. Experience the perfect blend of tradition and innovation at Cloudbet!",
        pros: [
          "Industry-leading security measures",
          "Comprehensive sportsbook and casino",
          "Instant withdrawals with no fees",
          "Professional customer support",
          "Established reputation since 2013",
          "High betting limits for VIP players",
          "Regular promotional events"
        ],
        cons: [
          "High wagering requirements on bonuses",
          "Limited VIP perks at lower levels",
          "Some country restrictions apply"
        ]
      },
      "Raze": {
        description: "Welcome to Raze Casino, where traditional gaming meets crypto innovation in explosive style! This rising star in the crypto gaming universe isn't just another casino - it's your next gaming adventure waiting to happen. With a mind-blowing 100% deposit match and daily cashback rewards that keep your bankroll healthy, every gaming session becomes an opportunity for epic wins. The platform's state-of-the-art interface feels like it was designed in the future, while maintaining that classic casino charm we all love. Whether you're spinning the latest slots, testing your skills at the tables, or diving into live dealer action, Raze's cutting-edge crypto integration ensures your gaming experience is smooth as silk. With support for premier cryptocurrencies like Bitcoin, Ethereum, Solana, and BNB, you're always in control of your gaming destiny. The platform's commitment to player satisfaction isn't just talk - it's built into every pixel of their service!",
        pros: [
          "Innovative hybrid gaming platform",
          "Daily cashback on all plays",
          "Ultra-smooth user interface",
          "Quick registration process",
          "Regular platform updates",
          "Competitive bonus structure",
          "Multiple crypto payment options"
        ],
        cons: [
          "Newer platform still building reputation",
          "Limited game providers compared to others",
          "Some features still in development"
        ]
      },
      "Bombastic": {
        description: "Bombastic Casino doesn't just live up to its name - it explodes past all expectations! Get ready for a gaming experience that'll blow your mind, starting with an earth-shattering 200% first deposit bonus and 50 free spins that'll set your gaming journey on fire. This isn't just another crypto casino; it's a full-scale entertainment revolution! Their game library is a treasure trove of excitement, packed with everything from classic slots that hit the sweet spot to live dealer games that bring Vegas straight to your screen. The platform's electrifying design gets your pulse racing before you even place your first bet, while the rock-solid crypto infrastructure keeps your transactions faster than a speeding bullet. Supporting a stellar lineup of cryptocurrencies including Bitcoin, Ethereum, Dogecoin, and Tether, Bombastic ensures your gaming experience is as seamless as it is spectacular. With regular tournaments, daily drops, and multiplier madness, every day brings new ways to win big!",
        pros: [
          "Explosive bonus package for newcomers",
          "High-energy gaming environment",
          "Lightning-fast crypto transactions",
          "Regular tournament schedule",
          "Extensive game selection",
          "Mobile-optimized platform",
          "24/7 player support system"
        ],
        cons: [
          "High wagering requirements",
          "Withdrawal limits for new players",
          "Geo-restrictions in certain markets"
        ]
      },
      "Del Oro": {
        description: "Step into the golden realm of Del Oro Casino, where luxury meets cutting-edge crypto gaming! This isn't just a casino - it's your passport to a premium gaming paradise. With an opulent welcome package worth up to $3,000 and weekly cashback that keeps the gold flowing, Del Oro sets the standard for high-class crypto gaming. Every aspect of the platform exudes sophistication, from the meticulously curated game selection to the seamless crypto transaction system. The VIP treatment isn't just for high rollers - every player gets a taste of the golden life with personalized service and exclusive promotions. Supporting elite cryptocurrencies like Bitcoin, XRP, Tether, and Ethereum, Del Oro ensures your gaming experience is as smooth as aged whiskey. The platform's commitment to excellence shows in every detail, from the lightning-fast payouts to the professional customer service that treats every player like royalty. Welcome to where crypto meets class!",
        pros: [
          "Premium gaming environment",
          "Generous weekly cashback system",
          "VIP treatment for all players",
          "Professional support team",
          "Curated game selection",
          "Fast withdrawal processing",
          "Regular exclusive promotions"
        ],
        cons: [
          "Higher minimum deposits",
          "Limited cryptocurrency options",
          "Strict verification process"
        ]
      },
      "Duelbits": {
        description: "Enter the arena of Duelbits Casino, where simplicity meets sophistication in perfect harmony! This isn't your average crypto casino - it's a masterclass in streamlined gaming excellence. With a VIP rewards program that actually rewards and daily rakeback that puts money back in your pocket, Duelbits has mastered the art of player appreciation. The platform's crystal-clear design cuts through the chaos of typical casino sites, delivering a pure, focused gaming experience that lets you concentrate on what matters - winning! Supporting premier cryptocurrencies like Bitcoin, Ethereum, and Solana, Duelbits makes complex crypto transactions feel as natural as breathing. Their transparent approach to gaming isn't just marketing speak - it's woven into the very fabric of the platform, from the provably fair games to the straightforward bonus terms. Whether you're a seasoned pro or just starting your crypto gaming journey, Duelbits provides the perfect battlefield for your betting adventures!",
        pros: [
          "Streamlined, user-friendly interface",
          "Transparent gaming practices",
          "Generous daily rakeback",
          "Quick withdrawal processing",
          "Clean, modern design",
          "Active community features",
          "Fair bonus conditions"
        ],
        cons: [
          "Limited game variety",
          "Fewer promotional offers",
          "No traditional payment methods"
        ]
      },
      "Kripty": {
        description: "Dive into the vibrant world of Kripty Casino, where every spin, deal, and bet is an adventure waiting to unfold! This isn't just another crypto casino - it's a celebration of everything that makes crypto gaming great. Kick off your journey with a spectacular 150% welcome bonus and 100 free spins that'll make your head spin! The platform's electric atmosphere is matched only by its impressive array of games, all optimized for the crypto generation. From pulse-pounding slots to sophisticated live dealer experiences, every game is a new chance to strike it rich. With support for popular cryptocurrencies like Bitcoin, Dogecoin, and Binance Coin, Kripty makes crypto gaming accessible to everyone. The modern design isn't just eye candy - it's a carefully crafted interface that makes navigation a breeze while keeping the excitement levels at maximum. Regular promotions, tournaments, and special events ensure there's always something new to discover!",
        pros: [
          "Generous welcome package",
          "Modern, intuitive interface",
          "Regular promotional events",
          "Fast crypto transactions",
          "Optimized mobile experience",
          "Wide game selection",
          "Active player community"
        ],
        cons: [
          "Limited customer support hours",
          "Some country restrictions",
          "Newer to the market"
        ]
      },
      "Playbet": {
        description: "Welcome to Playbet Casino, where the future of crypto gaming meets classic casino thrills! This dynamic platform isn't just keeping up with the times - it's setting the pace for the entire industry. Launch your gaming journey with a massive welcome bonus of up to 2 BTC, then keep the momentum going with weekly reload promotions that never quit! The platform's sophisticated design manages to be both cutting-edge and comfortably familiar, making every gaming session feel like coming home to excitement. With support for major cryptocurrencies including Bitcoin, Ethereum, and Tether, Playbet ensures your gaming experience is always smooth, secure, and sensational. Their extensive game library is constantly evolving, featuring everything from classic favorites to the latest releases. The platform's commitment to security isn't just talk - it's backed by state-of-the-art encryption and regular security audits. Whether you're a casual player or a serious high-roller, Playbet's got your gaming needs covered!",
        pros: [
          "Substantial crypto bonuses",
          "Weekly reload promotions",
          "Extensive game selection",
          "Top-tier security measures",
          "Regular platform updates",
          "Efficient banking system",
          "Responsive customer support"
        ],
        cons: [
          "Complex bonus terms",
          "Limited payment methods",
          "Restricted in some regions"
        ]
      }
    }

    return reviews[name as keyof typeof reviews] || {
      description: "Detailed casino information coming soon...",
      pros: ["Quick withdrawals", "24/7 customer service", "Extensive game library"],
      cons: ["No phone support", "Limited in some countries"]
    }
  }

  const review = getCasinoReview(name)

  return (
    <Card 
      ref={ref}
      className={`
        transition-all duration-700
        ${inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
        bg-[#1a1f2e]/40 backdrop-blur-md border border-white/10 shadow-lg text-white 
        hover:shadow-xl hover:border-white/20 transition-all duration-300
        relative before:absolute before:inset-0 before:bg-gradient-to-r 
        before:from-white/5 before:to-transparent before:rounded-xl
      `}
    >
      <CardContent className="p-3 lg:p-4 relative">
        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          <div className="flex items-center gap-3">
            <Link 
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-16 h-16 flex-shrink-0 transition-transform hover:scale-105"
            >
              <Image 
                src={logo} 
                alt={name} 
                fill
                className="rounded-lg object-contain"
              />
            </Link>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-gray-400 text-sm">#{rank}</span>
                <h2 className="text-lg font-bold uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {name}
                </h2>
              </div>
              <p className="text-gray-400 uppercase text-xs">PROMOTIONS</p>
              <p className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                {promotion}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 uppercase text-xs mb-1">COINS</p>
              <div className="flex gap-1">
                {supportedCoins.slice(0, 4).map((coin) => (
                  <div key={coin} className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                                shadow-lg hover:shadow-xl hover:bg-[#252b3d] 
                                transition-all duration-300 border border-white/5">
                    <Image
                      src={`/${coin}.svg`}
                      alt={coin}
                      width={16}
                      height={16}
                      className="transition-transform hover:scale-125 hover:rotate-12"
                    />
                  </div>
                ))}
                {additionalCoins > 0 && (
                  <div className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                                flex items-center shadow-lg hover:shadow-xl 
                                transition-all duration-300 border border-white/5">
                    <span className="text-gray-400 text-xs">+{additionalCoins}</span>
                  </div>
                )}
              </div>
            </div>

            <Link 
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600/90 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg
                               shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                               transition-all duration-300 backdrop-blur-sm text-sm">
                Go to site
              </Button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href={`https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-20 h-20 flex-shrink-0 transition-transform hover:scale-105"
            >
              <Image 
                src={logo} 
                alt={name} 
                fill
                className="rounded-lg object-contain"
              />
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">#{rank}</span>
              <h2 className="text-xl font-bold uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {name}
              </h2>
            </div>
          </div>

          <div className="flex-1 px-4">
            <p className="text-gray-400 uppercase text-xs">PROMOTIONS</p>
            <p className="text-sm font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              {promotion}
            </p>
          </div>

          <div className="flex-shrink-0">
            <p className="text-gray-400 uppercase text-xs mb-1">COINS</p>
            <div className="flex gap-1">
              {supportedCoins.slice(0, 4).map((coin) => (
                <div key={coin} 
                     className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                              shadow-lg hover:shadow-xl hover:bg-[#252b3d] 
                              transition-all duration-300 border border-white/5">
                  <Image
                    src={`/${coin}.svg`}
                    alt={coin}
                    width={16}
                    height={16}
                    className="transition-transform hover:scale-125 hover:rotate-12"
                  />
                </div>
              ))}
              {additionalCoins > 0 && (
                <div className="bg-[#252b3d]/80 backdrop-blur-sm rounded-full p-1.5 
                              flex items-center shadow-lg hover:shadow-xl 
                              transition-all duration-300 border border-white/5">
                  <span className="text-gray-400 text-xs">+{additionalCoins}</span>
                </div>
              )}
            </div>
          </div>

          <Link 
            href={`https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-600/90 hover:bg-blue-700 text-white px-6 py-1.5 rounded-lg
                             shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                             transition-all duration-300 backdrop-blur-sm text-sm">
              Go to site
            </Button>
          </Link>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              className="w-full mt-2 text-gray-400 hover:text-white border-t border-white/5
                         hover:bg-white/5 transition-colors duration-300 text-sm py-1"
            >
              Read review
              <ChevronDown className={`ml-2 h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="collapse-animate">
            <div className="mt-4 p-4 bg-[#252b3d]/60 backdrop-blur-sm rounded-lg
                          border border-white/5 shadow-inner
                          transform transition-all duration-300 ease-out">
              <div className="space-y-4">
                <h3 className="font-semibold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {name} Review
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {review.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-green-400">Advantages</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {review.pros.map((pro, index) => (
                        <li key={index} className="hover:text-green-400 transition-colors duration-200">
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-red-400">Disadvantages</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {review.cons.map((con, index) => (
                        <li key={index} className="hover:text-red-400 transition-colors duration-200">
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

