/**
 * Konverterer rating fra 0-10 skala til 0-100 skala med en fast variasjon basert på casino-navn
 * @param rating Original rating (0-10)
 * @param casinoName Casino navn brukt som seed for variasjonen
 * @returns Ny rating (0-100) med konsistent variasjon
 */
export const convertRating = (rating: number, casinoName: string): number => {
  // Konverter til 0-100 skala
  const baseRating = rating * 10;
  
  // Bruk summen av ASCII-verdiene i casino-navnet modulo 7 for å få et tall mellom 0 og 6
  const nameSum = casinoName.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const variation = (nameSum % 7) - 3; // Gir et tall mellom -3 og +3
  
  // Sikre at resultatet er mellom 0 og 100
  const finalRating = Math.min(Math.max(baseRating + variation, 0), 100);
  
  return finalRating;
}; 