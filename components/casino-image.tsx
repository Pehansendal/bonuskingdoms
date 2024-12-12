import Image from 'next/image'

interface CasinoImageProps {
  src: string
  alt: string
  className?: string
}

export default function CasinoImage({ src, alt, className = '' }: CasinoImageProps) {
  return (
    <div className={`relative w-full h-32 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 