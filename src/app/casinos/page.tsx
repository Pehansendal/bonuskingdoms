import { getCasinos } from '@/utils/casinos'
import Link from 'next/link'
import Image from 'next/image'

export default async function CasinosPage() {
  const casinos = await getCasinos()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">All Casinos</h1>
      <div className="space-y-4">
        {casinos.map((casino) => (
          <Link 
            key={casino.slug} 
            href={`/casinos/${casino.slug}`}
            className="block"
          >
            <div className="bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                  <Image
                    src={casino.logo}
                    alt={casino.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{casino.name}</h2>
                  <p className="text-gray-300">{casino.description}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 