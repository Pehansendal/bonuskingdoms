import fs from 'fs'
import path from 'path'

function validateFilename(filename: string): boolean {
  // Regler for filnavn
  const rules = {
    noSpaces: /\s/,
    noUppercase: /[A-Z]/,
    noSpecialChars: /[^a-z0-9-_.]/,
    validExtensions: /\.(tsx|ts|js|jsx|html|webp|svg|png|jpg|jpeg)$/
  }

  if (rules.noSpaces.test(filename)) {
    console.error(`Error: Filename "${filename}" contains spaces`)
    return false
  }

  if (rules.noUppercase.test(filename)) {
    console.error(`Error: Filename "${filename}" contains uppercase letters`)
    return false
  }

  if (rules.noSpecialChars.test(filename)) {
    console.error(`Error: Filename "${filename}" contains special characters`)
    return false
  }

  if (!rules.validExtensions.test(filename)) {
    console.error(`Error: Filename "${filename}" has invalid extension`)
    return false
  }

  return true
}

// Legg til i package.json:
// "scripts": {
//   "validate": "ts-node scripts/validate-filenames.ts"
// } 