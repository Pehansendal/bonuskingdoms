// app/cryptocasinos/[slug]/not-found.tsx
export default function NotFound() {
    return (
      <div className="min-h-screen bg-[#070a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Casino ikke funnet</h1>
          <p className="text-gray-400">
            Beklager, men vi kunne ikke finne det forespurte casinoet.
          </p>
        </div>
      </div>
    )
  }