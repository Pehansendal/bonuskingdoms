import fs from 'fs/promises';
import path from 'path';

export const convertToMarkdown = (text: string) => {
  const lines = text.split('\n');
  
  return lines.map(line => {
    const trimmed = line.trim();
    
    // Sjekk om linjen ser ut som en overskrift
    if (trimmed && !trimmed.includes('.') && trimmed.length < 100) {
      // Sjekk om det ser ut som en hovedoverskrift
      if (trimmed.toLowerCase().includes('welcome') || 
          trimmed.toLowerCase().includes('overview') ||
          trimmed.toLowerCase().includes('introduction')) {
        return `# ${trimmed}\n`;
      }
      // Andre overskrifter
      return `## ${trimmed}\n`;
    }
    
    // Vanlige paragrafer
    if (trimmed) {
      return `${trimmed}\n\n`;
    }
    
    return '';
  }).join('');
};

export async function loadTextContent(filePath: string): Promise<string> {
  try {
    // Rens filstien
    const cleanPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
    
    // Hent filen med fetch
    const response = await fetch(cleanPath);
    if (!response.ok) {
      throw new Error(`Failed to load content: ${response.statusText}`);
    }
    
    // Les teksten som raw text, ikke HTML
    const text = await response.text();
    
    // Sjekk om vi fikk HTML ved en feil
    if (text.includes('<!DOCTYPE html>') || text.includes('<html')) {
      throw new Error('Received HTML instead of text content');
    }
    
    // Konverter til markdown hvis vi har innhold
    if (!text.trim()) {
      return 'No content available';
    }
    
    return convertToMarkdown(text);
  } catch (error: unknown) {
    console.error('Error loading text content:', error);
    if (error instanceof Error) {
      return `Failed to load content: ${error.message}`;
    }
    return 'Failed to load content: Unknown error';
  }
} 