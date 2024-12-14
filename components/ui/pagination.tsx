import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  // Generer array av sidenumre som skal vises
  const getPageNumbers = () => {
    const pages = []
    const showPages = 5 // Antall sider som vises i pagineringen

    // Alltid vis første side
    pages.push(1)

    // Beregn start og slutt for midtre sider
    let start = Math.max(2, currentPage - Math.floor(showPages / 2))
    let end = Math.min(totalPages - 1, start + showPages - 1)

    // Juster start hvis vi er nær slutten
    if (end === totalPages - 1) {
      start = Math.max(2, end - showPages + 1)
    }

    // Legg til ... etter første side hvis det er gap
    if (start > 2) {
      pages.push('...')
    }

    // Legg til midtre sider
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    // Legg til ... før siste side hvis det er gap
    if (end < totalPages - 1) {
      pages.push('...')
    }

    // Alltid vis siste side hvis det er mer enn 1 side
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      {/* Forrige-knapp */}
      <Link
        href={currentPage > 1 ? `${baseUrl}?page=${currentPage - 1}` : '#'}
        className={`p-2 ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-white hover:text-blue-400'
        }`}
        aria-disabled={currentPage === 1}
      >
        <ChevronLeft className="h-5 w-5" />
      </Link>

      {/* Sidenumre */}
      {getPageNumbers().map((page, index) => (
        <Link
          key={index}
          href={typeof page === 'number' ? `${baseUrl}?page=${page}` : '#'}
          className={`px-4 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : page === '...'
              ? 'text-gray-400 cursor-default'
              : 'text-white hover:text-blue-400'
          }`}
        >
          {page}
        </Link>
      ))}

      {/* Neste-knapp */}
      <Link
        href={
          currentPage < totalPages ? `${baseUrl}?page=${currentPage + 1}` : '#'
        }
        className={`p-2 ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-white hover:text-blue-400'
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-5 w-5" />
      </Link>
    </nav>
  )
}
