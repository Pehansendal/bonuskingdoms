import { getFeaturedCasinos } from '@/utils/casinos'
import FeaturedCasinos from '@/components/FeaturedCasinos'

export default async function HomePage() {
  const casinos = await getFeaturedCasinos(10) // Henter 10 tilfeldige casinoer

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8">
              Your Gateway to Premium Online Casinos
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Expert reviews, exclusive bonuses, and trusted recommendations to enhance your online gaming experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/casinos"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
              >
                Explore All Casinos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Trusted Reviews</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">500+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Active Players</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">100,000+</dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-400">Exclusive Bonuses</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">€1M+</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <FeaturedCasinos casinos={casinos} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Why Choose BonusKingdoms
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your trusted source for online casino reviews and recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl" />
                <div className="relative">
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.name}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Expert Reviews',
    description: 'Detailed, unbiased reviews from industry experts with years of experience.',
    icon: function StarIcon(props: any) {
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      )
    }
  },
  {
    name: 'Exclusive Bonuses',
    description: 'Access to special bonus offers and promotions not available elsewhere.',
    icon: function GiftIcon(props: any) {
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      )
    }
  },
  {
    name: 'Trusted Recommendations',
    description: 'Only the most reliable and secure online casinos make our list.',
    icon: function ShieldIcon(props: any) {
      return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    }
  }
]
