import { CasinoCard } from './casino-card'
import { Casino } from '@/types/casino'

interface CasinoGridProps {
  casinos: Casino[]
}

export function CasinoGrid({ casinos }: CasinoGridProps) {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4">
      {casinos.map((casino) => (
        <CasinoCard 
          key={casino.name} 
          {...casino}
        />
      ))}
    </div>
  )
} 