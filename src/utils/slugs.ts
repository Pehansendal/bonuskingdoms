export function normalizeSlug(name: string): string {
  // Fjern .json siden vi ikke lenger bruker filer
  const baseName = name
    .toLowerCase()
    .trim()
  
  // Håndter spesifikke tilfeller
  const specialCases: Record<string, string> = {
    '1xslotscasino': '1xslots-casino',
    '7bitcasino': '7bit-casino',
    'allslotscasino': 'allslots-casino',
    '50crownscasino': '50crowns-casino',
    // Legg til flere ved behov
  }

  if (specialCases[baseName]) {
    return specialCases[baseName]
  }
  
  // Standard transformasjon
  return baseName
    .replace(/([a-z])([0-9])/g, '$1-$2')  // Legg til bindestrek mellom bokstaver og tall
    .replace(/casino$/, '-casino')         // Legg til bindestrek før 'casino' hvis det er på slutten
    .replace(/\s+/g, '-')                  // Erstatt mellomrom med bindestreker
}

// Ny funksjon for å generere logo-filnavn
export function getLogoFilename(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/-/g, '')
} 