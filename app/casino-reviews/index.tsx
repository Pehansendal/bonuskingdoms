import Link from 'next/link'
import Image from 'next/image'

export default function CasinoReviews(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Casino Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <Link href="/casino-reviews/10betcasino" key="10betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/10betcasino.png`}
                alt="10bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">10bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/11crococasino" key="11crococasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/11crococasino.png`}
                alt="11CROCO Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">11CROCO Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/1gocasino" key="1gocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/1gocasino.png`}
                alt="1Go Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">1Go Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/1redcasino" key="1redcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/1redcasino.png`}
                alt="1Red Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">1Red Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/1xslotscasino" key="1xslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/1xslotscasino.png`}
                alt="1xSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">1xSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/20betcasino" key="20betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/20betcasino.png`}
                alt="20bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">20bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/22betcasino" key="22betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/22betcasino.png`}
                alt="22bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">22bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/24casino" key="24casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/24casino.png`}
                alt="24Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">24Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/24slotscasino" key="24slotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/24slotscasino.png`}
                alt="24Slots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">24Slots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/4kasinocasino" key="4kasinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/4kasinocasino.png`}
                alt="4Kasino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">4Kasino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/500casino" key="500casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/500casino.png`}
                alt="500 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">500 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/50crownscasino" key="50crownscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/50crownscasino.png`}
                alt="50 Crowns Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">50 Crowns Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/55betcasino" key="55betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/55betcasino.png`}
                alt="55BET Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">55BET Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/7bitcasino" key="7bitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/7bitcasino.png`}
                alt="7BitCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">7BitCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/888starzcasino" key="888starzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/888starzcasino.png`}
                alt="888STARZ Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">888STARZ Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/airbetcasino" key="airbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/airbetcasino.png`}
                alt="Airbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Airbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/allspinscasino" key="allspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/allspinscasino.png`}
                alt="AllSpins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">AllSpins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/allstarzcasino" key="allstarzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/allstarzcasino.png`}
                alt="AllStarz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">AllStarz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ameriobetcasino" key="ameriobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ameriobetcasino.png`}
                alt="Amerio Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Amerio Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/anarchycasino" key="anarchycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/anarchycasino.png`}
                alt="Anarchy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Anarchy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/aplaycasino" key="aplaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/aplaycasino.png`}
                alt="APlay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">APlay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/arcanebetcasino" key="arcanebetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/arcanebetcasino.png`}
                alt="ArcaneBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ArcaneBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/artcasino" key="artcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/artcasino.png`}
                alt="Artcasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Artcasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/asinocasino" key="asinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/asinocasino.png`}
                alt="Asino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Asino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/aufcasino" key="aufcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/aufcasino.png`}
                alt="Auf Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Auf Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/avocasino" key="avocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/avocasino.png`}
                alt="Avocasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Avocasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/axecasino" key="axecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/axecasino.png`}
                alt="Axecasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Axecasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bankonbetcasino" key="bankonbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bankonbetcasino.png`}
                alt="Bankonbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bankonbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bdmbetcasino" key="bdmbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bdmbetcasino.png`}
                alt="Bdmbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bdmbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/beastinocasino" key="beastinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/beastinocasino.png`}
                alt="Beastino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Beastino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betandplaycasino" key="betandplaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betandplaycasino.png`}
                alt="Betandplay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betandplay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betandyoucasino" key="betandyoucasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betandyoucasino.png`}
                alt="Betandyou Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betandyou Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betbeastcasino" key="betbeastcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betbeastcasino.png`}
                alt="BetBeast Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BetBeast Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betchaincasino" key="betchaincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betchaincasino.png`}
                alt="BetChain Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BetChain Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betcoincasino" key="betcoincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betcoincasino.png`}
                alt="Betcoin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betcoin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/beteumcasino" key="beteumcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/beteumcasino.png`}
                alt="Beteum Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Beteum Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betfinalcasino" key="betfinalcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betfinalcasino.png`}
                alt="Betfinal Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betfinal Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betflarecasino" key="betflarecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betflarecasino.png`}
                alt="Betflare Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betflare Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betifycasino" key="betifycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betifycasino.png`}
                alt="Betify Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betify Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betifymecasino" key="betifymecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betifymecasino.png`}
                alt="BetifyMe Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BetifyMe Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betitallcasino" key="betitallcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betitallcasino.png`}
                alt="Bet It All Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bet It All Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betmartinicasino" key="betmartinicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betmartinicasino.png`}
                alt="Betmartini Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betmartini Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betnoxcasino" key="betnoxcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betnoxcasino.png`}
                alt="Betnox Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betnox Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betonredcasino" key="betonredcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betonredcasino.png`}
                alt="BetOnRed Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BetOnRed Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betovixcasino" key="betovixcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betovixcasino.png`}
                alt="Betovix Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betovix Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betroom24casino" key="betroom24casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betroom24casino.png`}
                alt="Betroom24 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betroom24 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betrunnercasino" key="betrunnercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betrunnercasino.png`}
                alt="BetRunner Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BetRunner Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betsofacasino" key="betsofacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betsofacasino.png`}
                alt="Betsofa Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betsofa Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">4.7/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betsomniacasino" key="betsomniacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betsomniacasino.png`}
                alt="Betsomnia Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betsomnia Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betssencasino" key="betssencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betssencasino.png`}
                alt="Betssen Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betssen Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betswapcasino" key="betswapcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betswapcasino.png`}
                alt="Betswap Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betswap Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betticasino" key="betticasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betticasino.png`}
                alt="Betti Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betti Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/betzinocasino" key="betzinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/betzinocasino.png`}
                alt="Betzino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Betzino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/billybetscasino" key="billybetscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/billybetscasino.png`}
                alt="BillyBets Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BillyBets Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/billybillioncasino" key="billybillioncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/billybillioncasino.png`}
                alt="Billy Billion Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Billy Billion Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.2/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bitcoincasino" key="bitcoincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bitcoincasino.png`}
                alt="Bitcoin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bitcoin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bitcoingamescasino" key="bitcoingamescasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bitcoingamescasino.png`}
                alt="Bitcoin Games Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bitcoin Games Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bitkingzcasino" key="bitkingzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bitkingzcasino.png`}
                alt="Bitkingz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bitkingz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bitslercasino" key="bitslercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bitslercasino.png`}
                alt="Bitsler Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bitsler Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bitstarzcasino" key="bitstarzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bitstarzcasino.png`}
                alt="BitStarz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BitStarz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bizzocasino" key="bizzocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bizzocasino.png`}
                alt="Bizzo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bizzo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bk8casino" key="bk8casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bk8casino.png`}
                alt="BK8 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BK8 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/blacklioncasino" key="blacklioncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/blacklioncasino.png`}
                alt="Black Lion Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Black Lion Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/blazecasino" key="blazecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/blazecasino.png`}
                alt="Blaze Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Blaze Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/blitz-betcasino" key="blitz-betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/blitz-betcasino.png`}
                alt="Blitz-bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Blitz-bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/blueleocasino" key="blueleocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/blueleocasino.png`}
                alt="BlueLeo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BlueLeo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bluffbetcasino" key="bluffbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bluffbetcasino.png`}
                alt="Bluffbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bluffbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bohocasino" key="bohocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bohocasino.png`}
                alt="Boho Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Boho Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bongocasino" key="bongocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bongocasino.png`}
                alt="Bongo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bongo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/booicasino" key="booicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/booicasino.png`}
                alt="Booi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Booi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/boomerang-betcasino" key="boomerang-betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/boomerang-betcasino.png`}
                alt="Boomerang-bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Boomerang-bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/boomerangcasino" key="boomerangcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/boomerangcasino.png`}
                alt="Boomerang Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Boomerang Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/brangocasino" key="brangocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/brangocasino.png`}
                alt="Brango Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Brango Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/brazino777casino" key="brazino777casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/brazino777casino.png`}
                alt="Brazino777 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Brazino777 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/brucebetcasino" key="brucebetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/brucebetcasino.png`}
                alt="BruceBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BruceBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bullcasino" key="bullcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bullcasino.png`}
                alt="Bull Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bull Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/bullsbetcasino" key="bullsbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/bullsbetcasino.png`}
                alt="Bullsbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Bullsbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/burancasino" key="burancasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/burancasino.png`}
                alt="BuranCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BuranCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">1.0/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/burningbetcasino" key="burningbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/burningbetcasino.png`}
                alt="BurningBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">BurningBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/buumicasino" key="buumicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/buumicasino.png`}
                alt="Buumi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Buumi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cabarinocasino" key="cabarinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cabarinocasino.png`}
                alt="Cabarino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cabarino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cadabruscasino" key="cadabruscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cadabruscasino.png`}
                alt="Cadabrus Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cadabrus Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cadoolacasino" key="cadoolacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cadoolacasino.png`}
                alt="Cadoola Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cadoola Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/caibocasino" key="caibocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/caibocasino.png`}
                alt="Caibo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Caibo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">1.0/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/campeonbetcasino" key="campeonbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/campeonbetcasino.png`}
                alt="Campeonbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Campeonbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cashwincasino" key="cashwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cashwincasino.png`}
                alt="Cashwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cashwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoadrenaline" key="casinoadrenaline" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoadrenaline.png`}
                alt="Casino Adrenaline logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Adrenaline</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinobello" key="casinobello" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinobello.png`}
                alt="CasinoBello logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CasinoBello</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinobetcasino" key="casinobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinobetcasino.png`}
                alt="Casinobet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casinobet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoestrella" key="casinoestrella" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoestrella.png`}
                alt="Casino Estrella logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Estrella</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoextra" key="casinoextra" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoextra.png`}
                alt="Casino Extra logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Extra</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoextreme" key="casinoextreme" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoextreme.png`}
                alt="Casino Extreme logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Extreme</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinofriday" key="casinofriday" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinofriday.png`}
                alt="Casino Friday logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Friday</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoin" key="casinoin" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoin.png`}
                alt="Casinoin logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casinoin</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoinfinity" key="casinoinfinity" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoinfinity.png`}
                alt="Casino Infinity logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Infinity</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinolycasino" key="casinolycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinolycasino.png`}
                alt="Casinoly Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casinoly Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinoorca" key="casinoorca" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinoorca.png`}
                alt="Casino Orca logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Orca</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinorocket" key="casinorocket" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinorocket.png`}
                alt="Casino Rocket logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino Rocket</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinostriker" key="casinostriker" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinostriker.png`}
                alt="CasinoStriker logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CasinoStriker</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinovacasino" key="casinovacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinovacasino.png`}
                alt="Casinova Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casinova Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinovibes" key="casinovibes" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinovibes.png`}
                alt="CasinoVibes logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CasinoVibes</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinox" key="casinox" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinox.png`}
                alt="Casino X logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casino X</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinozercasino" key="casinozercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinozercasino.png`}
                alt="Casinozer Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casinozer Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casinycasino" key="casinycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casinycasino.png`}
                alt="Casiny Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casiny Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/casoocasino" key="casoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/casoocasino.png`}
                alt="Casoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Casoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/catcasino" key="catcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/catcasino.png`}
                alt="CatCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CatCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/chipstarscasino" key="chipstarscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/chipstarscasino.png`}
                alt="Chipstars Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Chipstars Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cleopatracasino" key="cleopatracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cleopatracasino.png`}
                alt="Cleopatra Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cleopatra Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/clubrichescasino" key="clubrichescasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/clubrichescasino.png`}
                alt="Club Riches Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Club Riches Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cobracasino" key="cobracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cobracasino.png`}
                alt="Cobra Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cobra Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/coinsgamecasino" key="coinsgamecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/coinsgamecasino.png`}
                alt="Coins Game Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Coins Game Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/comeoncasino" key="comeoncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/comeoncasino.png`}
                alt="ComeOn Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ComeOn Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/conquestadorcasino" key="conquestadorcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/conquestadorcasino.png`}
                alt="Conquestador Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Conquestador Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">4.6/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/coolzinocasino" key="coolzinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/coolzinocasino.png`}
                alt="Coolzino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Coolzino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cosmicslotcasino" key="cosmicslotcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cosmicslotcasino.png`}
                alt="CosmicSlot Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CosmicSlot Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cosmobetcasino" key="cosmobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cosmobetcasino.png`}
                alt="Cosmobet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cosmobet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/crashinocasino" key="crashinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/crashinocasino.png`}
                alt="Crashino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Crashino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/crocoslotscasino" key="crocoslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/crocoslotscasino.png`}
                alt="CrocoSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CrocoSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/crownslotscasino" key="crownslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/crownslotscasino.png`}
                alt="Crownslots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Crownslots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cryptoleocasino" key="cryptoleocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cryptoleocasino.png`}
                alt="CryptoLeo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">CryptoLeo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/cryptorushcasino" key="cryptorushcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/cryptorushcasino.png`}
                alt="Cryptorush Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Cryptorush Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/daddycasino" key="daddycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/daddycasino.png`}
                alt="Daddy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Daddy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dailyspinscasino" key="dailyspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dailyspinscasino.png`}
                alt="Dailyspins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Dailyspins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dazardbetcasino" key="dazardbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dazardbetcasino.png`}
                alt="Dazardbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Dazardbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dedprzcasino" key="dedprzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dedprzcasino.png`}
                alt="DEDPRZ Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">DEDPRZ Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/delorocasino" key="delorocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/delorocasino.png`}
                alt="Del Oro Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Del Oro Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/divasluckcasino" key="divasluckcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/divasluckcasino.png`}
                alt="Divas Luck Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Divas Luck Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dolfwincasino" key="dolfwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dolfwincasino.png`}
                alt="Dolfwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Dolfwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/driftcasino" key="driftcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/driftcasino.png`}
                alt="Drift Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Drift Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dripcasino" key="dripcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dripcasino.png`}
                alt="Drip Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Drip Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dublzcasino" key="dublzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dublzcasino.png`}
                alt="Dublz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Dublz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">2.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/duckdicecasino" key="duckdicecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/duckdicecasino.png`}
                alt="DuckDice Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">DuckDice Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/dundeeslotscasino" key="dundeeslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/dundeeslotscasino.png`}
                alt="DundeeSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">DundeeSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/emucasino" key="emucasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/emucasino.png`}
                alt="EmuCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">EmuCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/epicbetcasino" key="epicbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/epicbetcasino.png`}
                alt="Epicbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Epicbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.0/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/everumcasino" key="everumcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/everumcasino.png`}
                alt="Everum Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Everum Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/evobetcasino" key="evobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/evobetcasino.png`}
                alt="Evobet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Evobet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fairspincasino" key="fairspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fairspincasino.png`}
                alt="Fairspin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Fairspin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fansportcasino" key="fansportcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fansportcasino.png`}
                alt="Fansport Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Fansport Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fatpandacasino" key="fatpandacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fatpandacasino.png`}
                alt="FatPanda Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">FatPanda Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fatpiratecasino" key="fatpiratecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fatpiratecasino.png`}
                alt="FatPirate Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">FatPirate Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/felixspincasino" key="felixspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/felixspincasino.png`}
                alt="Felixspin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Felixspin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/flamingcasino" key="flamingcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/flamingcasino.png`}
                alt="Flaming Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Flaming Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/flappycasino" key="flappycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/flappycasino.png`}
                alt="Flappy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Flappy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.4/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/flushcasino" key="flushcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/flushcasino.png`}
                alt="Flush Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Flush Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fortunejackcasino" key="fortunejackcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fortunejackcasino.png`}
                alt="FortuneJack Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">FortuneJack Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/fortunepandacasino" key="fortunepandacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/fortunepandacasino.png`}
                alt="Fortune Panda Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Fortune Panda Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/freshcasino" key="freshcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/freshcasino.png`}
                alt="Fresh Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Fresh Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/funbetcasino" key="funbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/funbetcasino.png`}
                alt="Funbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Funbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gamacasino" key="gamacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gamacasino.png`}
                alt="Gama Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gama Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gamblezencasino" key="gamblezencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gamblezencasino.png`}
                alt="Gamblezen Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gamblezen Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gamdomcasino" key="gamdomcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gamdomcasino.png`}
                alt="Gamdom Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gamdom Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gamixcasino" key="gamixcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gamixcasino.png`}
                alt="Gamix Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gamix Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gangstacasino" key="gangstacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gangstacasino.png`}
                alt="Gangsta Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gangsta Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gate777casino" key="gate777casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gate777casino.png`}
                alt="Gate777 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gate777 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gembetcasino" key="gembetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gembetcasino.png`}
                alt="GemBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GemBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/geniejackpotcasino" key="geniejackpotcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/geniejackpotcasino.png`}
                alt="Genie Jackpot Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Genie Jackpot Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/getslotscasino" key="getslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/getslotscasino.png`}
                alt="GetSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GetSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gizbocasino" key="gizbocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gizbocasino.png`}
                alt="Gizbo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gizbo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/godbunnycasino" key="godbunnycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/godbunnycasino.png`}
                alt="Godbunny Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Godbunny Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/goldencrowncasino" key="goldencrowncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/goldencrowncasino.png`}
                alt="Golden Crown Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Golden Crown Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/goldenpandacasino" key="goldenpandacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/goldenpandacasino.png`}
                alt="Golden Panda Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Golden Panda Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/goldenstarcasino" key="goldenstarcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/goldenstarcasino.png`}
                alt="Golden Star Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Golden Star Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/goodmancasino" key="goodmancasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/goodmancasino.png`}
                alt="Goodman Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Goodman Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/goralbetcasino" key="goralbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/goralbetcasino.png`}
                alt="GoralBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GoralBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.9/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gospincasino" key="gospincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gospincasino.png`}
                alt="GoSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GoSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/grandwincasino" key="grandwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/grandwincasino.png`}
                alt="Grandwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Grandwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/greatspincasino" key="greatspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/greatspincasino.png`}
                alt="GreatSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">GreatSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gudarcasino" key="gudarcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gudarcasino.png`}
                alt="Gudar Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gudar Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gunsbetcasino" key="gunsbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gunsbetcasino.png`}
                alt="Gunsbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gunsbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/gxmblecasino" key="gxmblecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/gxmblecasino.png`}
                alt="Gxmble Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Gxmble Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/happyhugocasino" key="happyhugocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/happyhugocasino.png`}
                alt="HappyHugo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HappyHugo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/happyslotscasino" key="happyslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/happyslotscasino.png`}
                alt="HappySlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HappySlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/happyspinscasino" key="happyspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/happyspinscasino.png`}
                alt="HappySpins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HappySpins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/hazcasino" key="hazcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/hazcasino.png`}
                alt="Haz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Haz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/hellspincasino" key="hellspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/hellspincasino.png`}
                alt="HellSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HellSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/herospincasino" key="herospincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/herospincasino.png`}
                alt="HeroSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HeroSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/hiperwincasino" key="hiperwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/hiperwincasino.png`}
                alt="Hiperwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Hiperwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/horuscasino" key="horuscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/horuscasino.png`}
                alt="Horus Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Horus Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/hotslotscasino" key="hotslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/hotslotscasino.png`}
                alt="HotSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">HotSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/icebetcasino" key="icebetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/icebetcasino.png`}
                alt="IceBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">IceBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/icecasino" key="icecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/icecasino.png`}
                alt="Ice Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Ice Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">4.4/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/impressariocasino" key="impressariocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/impressariocasino.png`}
                alt="Impressario Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Impressario Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/index" key="index" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/index.png`}
                alt="undefined logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">undefined</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">0.0/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ivibetcasino" key="ivibetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ivibetcasino.png`}
                alt="Ivibet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Ivibet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/iwildcasino" key="iwildcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/iwildcasino.png`}
                alt="iWild Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">iWild Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/izzicasino" key="izzicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/izzicasino.png`}
                alt="Izzi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Izzi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jackbitcasino" key="jackbitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jackbitcasino.png`}
                alt="Jackbit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jackbit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jackburstcasino" key="jackburstcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jackburstcasino.png`}
                alt="Jackburst Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jackburst Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jackpotfrenzycasino" key="jackpotfrenzycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jackpotfrenzycasino.png`}
                alt="JackpotFrenzy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">JackpotFrenzy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jackpotgurucasino" key="jackpotgurucasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jackpotgurucasino.png`}
                alt="Jackpot Guru Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jackpot Guru Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jackpotycasino" key="jackpotycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jackpotycasino.png`}
                alt="Jackpoty Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jackpoty Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jacktopcasino" key="jacktopcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jacktopcasino.png`}
                alt="Jacktop Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jacktop Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jeetcitycasino" key="jeetcitycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jeetcitycasino.png`}
                alt="JeetCity Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">JeetCity Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jetcasino" key="jetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jetcasino.png`}
                alt="Jet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/johnvegascasino" key="johnvegascasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/johnvegascasino.png`}
                alt="JohnVegasCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">JohnVegasCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/joker8casino" key="joker8casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/joker8casino.png`}
                alt="Joker8 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Joker8 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/joocasino" key="joocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/joocasino.png`}
                alt="Joo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Joo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/joyacasino" key="joyacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/joyacasino.png`}
                alt="Joya Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Joya Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.4/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/joycasino" key="joycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/joycasino.png`}
                alt="JoyCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">JoyCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jozzcasino" key="jozzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jozzcasino.png`}
                alt="Jozz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jozz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.6/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/jupicasino" key="jupicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/jupicasino.png`}
                alt="Jupi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Jupi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/justcasino" key="justcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/justcasino.png`}
                alt="JustCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">JustCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/katsubetcasino" key="katsubetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/katsubetcasino.png`}
                alt="KatsuBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">KatsuBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kaulanacasino" key="kaulanacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kaulanacasino.png`}
                alt="Kaulana Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kaulana Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kingamocasino" key="kingamocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kingamocasino.png`}
                alt="Kingamo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kingamo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kingbillycasino" key="kingbillycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kingbillycasino.png`}
                alt="King Billy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">King Billy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.7/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kingdomcasino" key="kingdomcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kingdomcasino.png`}
                alt="Kingdom Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kingdom Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kingswincasino" key="kingswincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kingswincasino.png`}
                alt="KingsWin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">KingsWin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kirgocasino" key="kirgocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kirgocasino.png`}
                alt="Kirgo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kirgo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/koicasino" key="koicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/koicasino.png`}
                alt="Koi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Koi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kriptycasino" key="kriptycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kriptycasino.png`}
                alt="Kripty Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kripty Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/kryptosinocasino" key="kryptosinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/kryptosinocasino.png`}
                alt="Kryptosino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Kryptosino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lamabetcasino" key="lamabetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lamabetcasino.png`}
                alt="Lamabet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lamabet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">4.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/legianocasino" key="legianocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/legianocasino.png`}
                alt="Legiano Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Legiano Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/legzocasino" key="legzocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/legzocasino.png`}
                alt="Legzo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Legzo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lemoncasino" key="lemoncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lemoncasino.png`}
                alt="Lemon Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lemon Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/leonbetcasino" key="leonbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/leonbetcasino.png`}
                alt="Leon Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Leon Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/letsluckycasino" key="letsluckycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/letsluckycasino.png`}
                alt="LetsLucky Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LetsLucky Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/levelupcasino" key="levelupcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/levelupcasino.png`}
                alt="LevelUp Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LevelUp Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lexcasino" key="lexcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lexcasino.png`}
                alt="Lex Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lex Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lilibetcasino" key="lilibetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lilibetcasino.png`}
                alt="Lilibet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lilibet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/loftcasino" key="loftcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/loftcasino.png`}
                alt="Loft Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Loft Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lokicasino" key="lokicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lokicasino.png`}
                alt="Loki Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Loki Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lucky7evencasino" key="lucky7evencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lucky7evencasino.png`}
                alt="Lucky7even Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky7even Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckychoocasino" key="luckychoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckychoocasino.png`}
                alt="LuckyChoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyChoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckycircuscasino" key="luckycircuscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckycircuscasino.png`}
                alt="Lucky Circus Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Circus Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckycryptocasino" key="luckycryptocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckycryptocasino.png`}
                alt="Lucky Crypto Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Crypto Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckydayscasino" key="luckydayscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckydayscasino.png`}
                alt="Lucky Days Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Days Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckydreamscasino" key="luckydreamscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckydreamscasino.png`}
                alt="Lucky Dreams Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Dreams Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyelfcasino" key="luckyelfcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyelfcasino.png`}
                alt="Lucky Elf Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Elf Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyhourcasino" key="luckyhourcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyhourcasino.png`}
                alt="LuckyHour Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyHour Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyhuntercasino" key="luckyhuntercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyhuntercasino.png`}
                alt="Lucky Hunter Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Hunter Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckykongcasino" key="luckykongcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckykongcasino.png`}
                alt="LuckyKong Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyKong Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckynuggetcasino" key="luckynuggetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckynuggetcasino.png`}
                alt="Lucky Nugget Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Nugget Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyreelscasino" key="luckyreelscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyreelscasino.png`}
                alt="LuckyReels Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyReels Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyspinscasino" key="luckyspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyspinscasino.png`}
                alt="Lucky Spins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Spins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckystarcasino" key="luckystarcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckystarcasino.png`}
                alt="LuckyStar Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyStar Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckystartcasino" key="luckystartcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckystartcasino.png`}
                alt="Luckystart Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Luckystart Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckyvibecasino" key="luckyvibecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckyvibecasino.png`}
                alt="Lucky Vibe Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Vibe Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckywhalecasino" key="luckywhalecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckywhalecasino.png`}
                alt="Lucky Whale Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lucky Whale Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/luckywinscasino" key="luckywinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/luckywinscasino.png`}
                alt="LuckyWins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LuckyWins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lukkicasino" key="lukkicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lukkicasino.png`}
                alt="Lukki Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Lukki Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lunubetcasino" key="lunubetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lunubetcasino.png`}
                alt="LunuBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LunuBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/lyracasino" key="lyracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/lyracasino.png`}
                alt="LyraCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">LyraCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/marathonbetcasino" key="marathonbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/marathonbetcasino.png`}
                alt="Marathonbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Marathonbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/marsbetcasino" key="marsbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/marsbetcasino.png`}
                alt="Marsbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Marsbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mbitcasino" key="mbitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mbitcasino.png`}
                alt="mBit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">mBit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/megadicecasino" key="megadicecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/megadicecasino.png`}
                alt="Mega Dice Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mega Dice Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/megaparicasino" key="megaparicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/megaparicasino.png`}
                alt="Megapari Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Megapari Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/megarichcasino" key="megarichcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/megarichcasino.png`}
                alt="Megarich Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Megarich Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/merlincasino" key="merlincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/merlincasino.png`}
                alt="Merlin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Merlin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/metaspinscryptocasino" key="metaspinscryptocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/metaspinscryptocasino.png`}
                alt="Metaspins Crypto Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Metaspins Crypto Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/miraxcasino" key="miraxcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/miraxcasino.png`}
                alt="Mirax Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mirax Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mobilebet" key="mobilebet" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mobilebet.png`}
                alt="Mobilebet logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mobilebet</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">4.3/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/moicasino" key="moicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/moicasino.png`}
                alt="MoiCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">MoiCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mondcasino" key="mondcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mondcasino.png`}
                alt="Mondcasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mondcasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/monixbetcasino" key="monixbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/monixbetcasino.png`}
                alt="Monixbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Monixbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/monrocasino" key="monrocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/monrocasino.png`}
                alt="Monro Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Monro Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/montecryptoscasino" key="montecryptoscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/montecryptoscasino.png`}
                alt="MonteCryptos Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">MonteCryptos Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/moonwincasino" key="moonwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/moonwincasino.png`}
                alt="Moonwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Moonwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mrbitcasino" key="mrbitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mrbitcasino.png`}
                alt="Mr Bit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mr Bit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mrpachocasino" key="mrpachocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mrpachocasino.png`}
                alt="MrPacho Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">MrPacho Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/mystakecasino" key="mystakecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/mystakecasino.png`}
                alt="Mystake Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Mystake Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/n1betcasino" key="n1betcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/n1betcasino.png`}
                alt="N1Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">N1Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nalucasino" key="nalucasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nalucasino.png`}
                alt="Nalu Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Nalu Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nationalcasino" key="nationalcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nationalcasino.png`}
                alt="National Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">National Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/needforspincasino" key="needforspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/needforspincasino.png`}
                alt="NeedForSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">NeedForSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/neon54casino" key="neon54casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/neon54casino.png`}
                alt="Neon54 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Neon54 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/neospincasino" key="neospincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/neospincasino.png`}
                alt="Neospin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Neospin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ninlaycasino" key="ninlaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ninlaycasino.png`}
                alt="Ninlay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Ninlay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nitrobetcasino" key="nitrobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nitrobetcasino.png`}
                alt="Nitrobet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Nitrobet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">5.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nolimitbetcasino" key="nolimitbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nolimitbetcasino.png`}
                alt="NoLimitBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">NoLimitBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nominicasino" key="nominicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nominicasino.png`}
                alt="Nomini Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Nomini Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/norgesspillcasino" key="norgesspillcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/norgesspillcasino.png`}
                alt="NorgesSpill Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">NorgesSpill Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/nummuscasino" key="nummuscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/nummuscasino.png`}
                alt="Nummus Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Nummus Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ohmyspinscasino" key="ohmyspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ohmyspinscasino.png`}
                alt="OhMySpins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">OhMySpins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ohmyzinocasino" key="ohmyzinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ohmyzinocasino.png`}
                alt="OhMyZino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">OhMyZino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/olympiacasino" key="olympiacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/olympiacasino.png`}
                alt="Olympia Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Olympia Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/omnislotscasino" key="omnislotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/omnislotscasino.png`}
                alt="Omni Slots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Omni Slots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/oneduncasino" key="oneduncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/oneduncasino.png`}
                alt="Onedun Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Onedun Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/onluckcasino" key="onluckcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/onluckcasino.png`}
                alt="OnLuck Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">OnLuck Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/orbetcasino" key="orbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/orbetcasino.png`}
                alt="Orbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Orbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/oshcasino" key="oshcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/oshcasino.png`}
                alt="OSH Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">OSH Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/oshicasino" key="oshicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/oshicasino.png`}
                alt="Oshi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Oshi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/ovitoonscasino" key="ovitoonscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/ovitoonscasino.png`}
                alt="Ovitoons Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Ovitoons Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/palmslotscasino" key="palmslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/palmslotscasino.png`}
                alt="PalmSlots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PalmSlots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/pan-casino" key="pan-casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/pan-casino.png`}
                alt="Pan-Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pan-Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/pin-upcasino" key="pin-upcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/pin-upcasino.png`}
                alt="Pin-up Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pin-up Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/pinnaclecasino" key="pinnaclecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/pinnaclecasino.png`}
                alt="Pinnacle Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pinnacle Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/piratespotcasino" key="piratespotcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/piratespotcasino.png`}
                alt="Pirate Spot Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pirate Spot Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/plangamescasino" key="plangamescasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/plangamescasino.png`}
                alt="Plangames Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Plangames Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playfastcasino" key="playfastcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playfastcasino.png`}
                alt="Playfastcasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Playfastcasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playfinacasino" key="playfinacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playfinacasino.png`}
                alt="Playfina Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Playfina Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.6/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playfortunacasino" key="playfortunacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playfortunacasino.png`}
                alt="PlayFortuna Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PlayFortuna Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playmojocasino" key="playmojocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playmojocasino.png`}
                alt="PlayMojo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PlayMojo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playmoolacasino" key="playmoolacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playmoolacasino.png`}
                alt="Playmoola Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Playmoola Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.2/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/playouwincasino" key="playouwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/playouwincasino.png`}
                alt="PlaYouWin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PlaYouWin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/pledoocasino" key="pledoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/pledoocasino.png`}
                alt="Pledoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Pledoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/powerbet777casino" key="powerbet777casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/powerbet777casino.png`}
                alt="Powerbet777 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Powerbet777 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/powerupcasino" key="powerupcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/powerupcasino.png`}
                alt="PowerUp Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PowerUp Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/primebetzcasino" key="primebetzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/primebetzcasino.png`}
                alt="PrimeBetz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">PrimeBetz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/prontobetcasino" key="prontobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/prontobetcasino.png`}
                alt="ProntoBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ProntoBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/pumacasino" key="pumacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/pumacasino.png`}
                alt="Puma Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Puma Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/punterzcasino" key="punterzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/punterzcasino.png`}
                alt="Punterz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Punterz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/queencasino" key="queencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/queencasino.png`}
                alt="Queen Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Queen Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/quickslotcasino" key="quickslotcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/quickslotcasino.png`}
                alt="QuickSlot Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">QuickSlot Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rakebitcasino" key="rakebitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rakebitcasino.png`}
                alt="Rakebit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rakebit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rakoocasino" key="rakoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rakoocasino.png`}
                alt="Rakoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rakoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/razecasino" key="razecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/razecasino.png`}
                alt="Raze Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Raze Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/razedcasino" key="razedcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/razedcasino.png`}
                alt="Razed Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Razed Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">5.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/readycasino" key="readycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/readycasino.png`}
                alt="ReadyCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ReadyCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/reddicecasino" key="reddicecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/reddicecasino.png`}
                alt="Red Dice Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Red Dice Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/redstarcasino" key="redstarcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/redstarcasino.png`}
                alt="Red Star Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Red Star Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/reloadbetcasino" key="reloadbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/reloadbetcasino.png`}
                alt="ReloadBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ReloadBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/respincasino" key="respincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/respincasino.png`}
                alt="ReSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ReSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/retrobetcasino" key="retrobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/retrobetcasino.png`}
                alt="Retro Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Retro Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/richardcasino" key="richardcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/richardcasino.png`}
                alt="Richard Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Richard Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rickycasino" key="rickycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rickycasino.png`}
                alt="Rickycasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rickycasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/riobetcasino" key="riobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/riobetcasino.png`}
                alt="RioBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RioBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rivalocasino" key="rivalocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rivalocasino.png`}
                alt="Rivalo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rivalo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rivieracasino" key="rivieracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rivieracasino.png`}
                alt="Riviera Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Riviera Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rizzcasino" key="rizzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rizzcasino.png`}
                alt="Rizz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rizz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rocketplaycasino" key="rocketplaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rocketplaycasino.png`}
                alt="RocketPlay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RocketPlay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rocketspincasino" key="rocketspincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rocketspincasino.png`}
                alt="RocketSpin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RocketSpin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rocketwincasino" key="rocketwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rocketwincasino.png`}
                alt="RocketWin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RocketWin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rockwincasino" key="rockwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rockwincasino.png`}
                alt="Rockwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rockwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rollettocasino" key="rollettocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rollettocasino.png`}
                alt="Rolletto Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rolletto Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rollingslotscasino" key="rollingslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rollingslotscasino.png`}
                alt="Rolling Slots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rolling Slots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rollinocasino" key="rollinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rollinocasino.png`}
                alt="Rollino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rollino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/rollxocasino" key="rollxocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/rollxocasino.png`}
                alt="RollXO Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RollXO Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/roolicasino" key="roolicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/roolicasino.png`}
                alt="Rooli Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rooli Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/roosterbetcasino" key="roosterbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/roosterbetcasino.png`}
                alt="Rooster Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Rooster Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/royalgamecasino" key="royalgamecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/royalgamecasino.png`}
                alt="RoyalGame Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RoyalGame Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/royalstarscasino" key="royalstarscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/royalstarscasino.png`}
                alt="Royal Stars Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Royal Stars Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/royspinscasino" key="royspinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/royspinscasino.png`}
                alt="RoySpins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">RoySpins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/run4wincasino" key="run4wincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/run4wincasino.png`}
                alt="Run4Win Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Run4Win Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sapphirebetcasino" key="sapphirebetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sapphirebetcasino.png`}
                alt="SapphireBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SapphireBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/shambalacasino" key="shambalacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/shambalacasino.png`}
                alt="Shambala Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Shambala Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/shangrilacasino" key="shangrilacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/shangrilacasino.png`}
                alt="Shangri La Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Shangri La Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sherbetcasino" key="sherbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sherbetcasino.png`}
                alt="Sherbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sherbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/shotzcasino" key="shotzcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/shotzcasino.png`}
                alt="Shotz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Shotz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/silverplaycasino" key="silverplaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/silverplaycasino.png`}
                alt="Silverplay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Silverplay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sirwincasino" key="sirwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sirwincasino.png`}
                alt="Sirwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sirwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/skycrowncasino" key="skycrowncasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/skycrowncasino.png`}
                alt="Skycrown Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Skycrown Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotacasino" key="slotacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotacasino.png`}
                alt="Slota Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slota Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotboxcasino" key="slotboxcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotboxcasino.png`}
                alt="SlotBox Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SlotBox Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sloterracasino" key="sloterracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sloterracasino.png`}
                alt="Sloterra Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sloterra Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotlordscasino" key="slotlordscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotlordscasino.png`}
                alt="SlotLords Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SlotLords Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotmancasino" key="slotmancasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotmancasino.png`}
                alt="Slotman Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slotman Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotozencasino" key="slotozencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotozencasino.png`}
                alt="Slotozen Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slotozen Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotparadisecasino" key="slotparadisecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotparadisecasino.png`}
                alt="Slotparadise Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slotparadise Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotscitycasino" key="slotscitycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotscitycasino.png`}
                alt="Slots City Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slots City Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotsflixcasino" key="slotsflixcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotsflixcasino.png`}
                alt="Slotsflix Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slotsflix Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotsgallerycasino" key="slotsgallerycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotsgallerycasino.png`}
                alt="Slots Gallery Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slots Gallery Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotticacasino" key="slotticacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotticacasino.png`}
                alt="Slottica Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slottica Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slottojamcasino" key="slottojamcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slottojamcasino.png`}
                alt="SlottoJAM Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SlottoJAM Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slottywaycasino" key="slottywaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slottywaycasino.png`}
                alt="Slottyway Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slottyway Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotumcasino" key="slotumcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotumcasino.png`}
                alt="Slotum Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Slotum Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/slotvibecasino" key="slotvibecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/slotvibecasino.png`}
                alt="SlotVibe Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SlotVibe Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/smokacecasino" key="smokacecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/smokacecasino.png`}
                alt="Smokace Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Smokace Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/snatchcasino" key="snatchcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/snatchcasino.png`}
                alt="Snatch Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Snatch Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/solcasino" key="solcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/solcasino.png`}
                alt="Sol Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sol Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/solisbetcasino" key="solisbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/solisbetcasino.png`}
                alt="Solisbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Solisbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sombrerospinscasino" key="sombrerospinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sombrerospinscasino.png`}
                alt="Sombrero Spins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sombrero Spins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spacelillycasino" key="spacelillycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spacelillycasino.png`}
                alt="Space Lilly Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Space Lilly Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spadesqueencasino" key="spadesqueencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spadesqueencasino.png`}
                alt="Spades Queen Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spades Queen Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinariumcasino" key="spinariumcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinariumcasino.png`}
                alt="Spinarium Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinarium Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinarocasino" key="spinarocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinarocasino.png`}
                alt="Spinaro Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinaro Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinawaycasino" key="spinawaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinawaycasino.png`}
                alt="Spin Away Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spin Away Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinbetcasino" key="spinbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinbetcasino.png`}
                alt="SpinBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinbettercasino" key="spinbettercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinbettercasino.png`}
                alt="SpinBetter Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinBetter Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinbitcasino" key="spinbitcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinbitcasino.png`}
                alt="SpinBit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinBit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinchcasino" key="spinchcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinchcasino.png`}
                alt="Spinch Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinch Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinfevercasino" key="spinfevercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinfevercasino.png`}
                alt="SpinFever Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinFever Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinightcasino" key="spinightcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinightcasino.png`}
                alt="Spinight Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinight Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinjocasino" key="spinjocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinjocasino.png`}
                alt="Spinjo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinjo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinlinecasino" key="spinlinecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinlinecasino.png`}
                alt="Spinline Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinline Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinsamuraicasino" key="spinsamuraicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinsamuraicasino.png`}
                alt="Spin Samurai Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spin Samurai Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinsbrocasino" key="spinsbrocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinsbrocasino.png`}
                alt="SpinsBro Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinsBro Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">9.4/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinspacecasino" key="spinspacecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinspacecasino.png`}
                alt="SpinSpace Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinSpace Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinsupcasino" key="spinsupcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinsupcasino.png`}
                alt="SpinsUP Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinsUP Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinsycasino" key="spinsycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinsycasino.png`}
                alt="Spinsy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spinsy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spinybetcasino" key="spinybetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spinybetcasino.png`}
                alt="SpinyBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SpinyBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/spiritcasino" key="spiritcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/spiritcasino.png`}
                alt="Spirit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Spirit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sportazacasino" key="sportazacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sportazacasino.png`}
                alt="Sportaza Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sportaza Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sportunacasino" key="sportunacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sportunacasino.png`}
                alt="Sportuna Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sportuna Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/stakeprixcasino" key="stakeprixcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/stakeprixcasino.png`}
                alt="StakePrix Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">StakePrix Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/stardacasino" key="stardacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/stardacasino.png`}
                alt="Starda Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Starda Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/staxinocasino" key="staxinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/staxinocasino.png`}
                alt="Staxino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Staxino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/staycasino" key="staycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/staycasino.png`}
                alt="StayCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">StayCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/stelariocasino" key="stelariocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/stelariocasino.png`}
                alt="Stelario Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Stelario Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/stupidcasino" key="stupidcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/stupidcasino.png`}
                alt="Stupid Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Stupid Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/sunplaycasino" key="sunplaycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/sunplaycasino.png`}
                alt="Sunplay Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Sunplay Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/supacasicasino" key="supacasicasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/supacasicasino.png`}
                alt="SupaCasi Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SupaCasi Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/superbosscasino" key="superbosscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/superbosscasino.png`}
                alt="SuperBoss Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">SuperBoss Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/svenbetcasino" key="svenbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/svenbetcasino.png`}
                alt="Svenbet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Svenbet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/syndicatecasino" key="syndicatecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/syndicatecasino.png`}
                alt="Syndicate Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Syndicate Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/theclubhousecasino" key="theclubhousecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/theclubhousecasino.png`}
                alt="The ClubHouse Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">The ClubHouse Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">3.4/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/thorcasino" key="thorcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/thorcasino.png`}
                alt="Thorcasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Thorcasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/thunderpickcasino" key="thunderpickcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/thunderpickcasino.png`}
                alt="Thunderpick Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Thunderpick Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tikitakacasino" key="tikitakacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tikitakacasino.png`}
                alt="TikiTaka Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TikiTaka Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tiktakbetcasino" key="tiktakbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tiktakbetcasino.png`}
                alt="TikTak Bet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TikTak Bet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tivitbetcasino" key="tivitbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tivitbetcasino.png`}
                alt="TiViTBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TiViTBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tombrichescasino" key="tombrichescasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tombrichescasino.png`}
                alt="Tomb Riches Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Tomb Riches Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tonybetcasino" key="tonybetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tonybetcasino.png`}
                alt="TonyBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TonyBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/treasurespinscasino" key="treasurespinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/treasurespinscasino.png`}
                alt="Treasure Spins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Treasure Spins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/trinocasino" key="trinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/trinocasino.png`}
                alt="Trino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Trino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/trip2vipcasino" key="trip2vipcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/trip2vipcasino.png`}
                alt="Trip2Vip Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Trip2Vip Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tripscasino" key="tripscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tripscasino.png`}
                alt="Trips Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Trips Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/trivelabetcasino" key="trivelabetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/trivelabetcasino.png`}
                alt="TrivelaBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TrivelaBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/trustdicecasino" key="trustdicecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/trustdicecasino.png`}
                alt="TrustDice Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">TrustDice Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/tsarscasino" key="tsarscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/tsarscasino.png`}
                alt="Tsars Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Tsars Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/universalslotscasino" key="universalslotscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/universalslotscasino.png`}
                alt="Universal Slots Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Universal Slots Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">5.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/unlimcasino" key="unlimcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/unlimcasino.png`}
                alt="Unlim Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Unlim Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vasycasino" key="vasycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vasycasino.png`}
                alt="Vasy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vasy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vavadacasino" key="vavadacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vavadacasino.png`}
                alt="Vavada Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vavada Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vavecasino" key="vavecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vavecasino.png`}
                alt="Vave Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vave Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vegasinocasino" key="vegasinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vegasinocasino.png`}
                alt="Vegasino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vegasino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vegasnowcasino" key="vegasnowcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vegasnowcasino.png`}
                alt="Vegas Now Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vegas Now Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vegazcasino" key="vegazcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vegazcasino.png`}
                alt="Vegaz Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vegaz Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/velobetcasino" key="velobetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/velobetcasino.png`}
                alt="Velobet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Velobet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vibecasino" key="vibecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vibecasino.png`}
                alt="Vibe Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Vibe Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/voltslotcasino" key="voltslotcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/voltslotcasino.png`}
                alt="Voltslot Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Voltslot Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/voodoocasino" key="voodoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/voodoocasino.png`}
                alt="Voodoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Voodoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/vulkanvegascasino" key="vulkanvegascasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/vulkanvegascasino.png`}
                alt="VulkanVegas Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">VulkanVegas Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wantedwincasino" key="wantedwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wantedwincasino.png`}
                alt="Wanted Win Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wanted Win Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">8.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wasinocasino" key="wasinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wasinocasino.png`}
                alt="Wasino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wasino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wazambacasino" key="wazambacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wazambacasino.png`}
                alt="Wazamba Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wazamba Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wazbeecasino" key="wazbeecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wazbeecasino.png`}
                alt="Wazbee Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wazbee Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wcasinoonline" key="wcasinoonline" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wcasinoonline.png`}
                alt="Wcasino Online logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wcasino Online</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/weisscasino" key="weisscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/weisscasino.png`}
                alt="Weiss Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Weiss Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wellecasino" key="wellecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wellecasino.png`}
                alt="Welle Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Welle Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/weltbetcasino" key="weltbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/weltbetcasino.png`}
                alt="WeltBet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WeltBet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/whamoocasino" key="whamoocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/whamoocasino.png`}
                alt="Whamoo Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Whamoo Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wildsinocasino" key="wildsinocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wildsinocasino.png`}
                alt="Wildsino Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wildsino Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wildtornadocasino" key="wildtornadocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wildtornadocasino.png`}
                alt="Wild Tornado Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wild Tornado Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winawincasino" key="winawincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winawincasino.png`}
                alt="Winawin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winawin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/windettacasino" key="windettacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/windettacasino.png`}
                alt="Windetta Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Windetta Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wingagacasino" key="wingagacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wingagacasino.png`}
                alt="WinGaga Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WinGaga Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winlegendscasino" key="winlegendscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winlegendscasino.png`}
                alt="WinLegends Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WinLegends Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winmakercasino" key="winmakercasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winmakercasino.png`}
                alt="Winmaker Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winmaker Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winningcasino" key="winningcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winningcasino.png`}
                alt="Winning Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winning Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winscorecasino" key="winscorecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winscorecasino.png`}
                alt="Winscore Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winscore Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winspiritcasino" key="winspiritcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winspiritcasino.png`}
                alt="WinSpirit Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WinSpirit Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winsroyalcasino" key="winsroyalcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winsroyalcasino.png`}
                alt="WinsRoyal Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WinsRoyal Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winstoriacasino" key="winstoriacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winstoriacasino.png`}
                alt="Winstoria Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winstoria Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wintomatocasino" key="wintomatocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wintomatocasino.png`}
                alt="WinTomato Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WinTomato Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wintopiacasino" key="wintopiacasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wintopiacasino.png`}
                alt="Wintopia Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wintopia Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/winwincasino" key="winwincasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/winwincasino.png`}
                alt="Winwin Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Winwin Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wirwettencasino" key="wirwettencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wirwettencasino.png`}
                alt="Wir Wetten Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wir Wetten Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wishcasino" key="wishcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wishcasino.png`}
                alt="Wish Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wish Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wizebetscasino" key="wizebetscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wizebetscasino.png`}
                alt="Wizebets Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wizebets Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">2.2/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wolfbetcasino" key="wolfbetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wolfbetcasino.png`}
                alt="WOLFBET Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WOLFBET Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wolfycasino" key="wolfycasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wolfycasino.png`}
                alt="Wolfy Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wolfy Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wonacocasino" key="wonacocasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wonacocasino.png`}
                alt="Wonaco Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wonaco Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wsmcasino" key="wsmcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wsmcasino.png`}
                alt="WSM Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">WSM Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/wunderwinscasino" key="wunderwinscasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/wunderwinscasino.png`}
                alt="Wunderwins Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Wunderwins Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/x7casino" key="x7casino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/x7casino.png`}
                alt="X7 Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">X7 Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/yojucasino" key="yojucasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/yojucasino.png`}
                alt="Yoju Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Yoju Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zenbettingcasino" key="zenbettingcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zenbettingcasino.png`}
                alt="ZenBetting Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ZenBetting Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.8/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zencasino" key="zencasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zencasino.png`}
                alt="ZenCasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">ZenCasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">6.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zinkracasino" key="zinkracasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zinkracasino.png`}
                alt="Zinkra Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Zinkra Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zipcasino" key="zipcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zipcasino.png`}
                alt="Zipcasino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Zipcasino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zoomecasino" key="zoomecasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zoomecasino.png`}
                alt="Zoome Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Zoome Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
        <Link href="/casino-reviews/zotabetcasino" key="zotabetcasino" className="block">
          <div className="bg-[#1a1f2d] p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="relative h-32 mb-4">
              <Image
                src={`/images/casinos/zotabetcasino.png`}
                alt="Zotabet Casino logo"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Zotabet Casino</h2>
            <div className="flex items-center text-yellow-400">
              <span className="text-lg font-bold mr-2">7.5/10</span>
              <span className="text-gray-400">Rating</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}